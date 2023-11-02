import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameStateDto } from '../users/dto/gamestate.dto';
import { ActionCheckDto } from './dto/action-check.dto';
import { ActionChoiceDto } from './dto/action-choice.dto';
import { CampaignDto } from './dto/campaign.dto';
import { Action, ChallengeDto } from './dto/challenge.dto';
import { ChoiceMadeDto } from './dto/choice-made.dto';
import { ChoiceDto } from './dto/choice.dto';
import { ContentChallengeDto } from './dto/content-challenge.dto';
import { ContentExpositionDto } from './dto/content-exposition.dto';
import { EpilogueDto, MajorChoiceDto, MetaAlignment } from './dto/epilogue.dto';
import { ViewDto } from './dto/view.dto';
import { ActionEntity } from './entity/action.entity';
import { CampaignEntity } from './entity/campaign.entity';
import { ChoiceEntity } from './entity/choice.entity';
import { ViewEntity } from './entity/view.entity';
import { DungeonsDragonsAlignment } from './enum/alignment.enum';
import { ChallengeType } from './enum/challenge.enum';
import { ContentType } from './enum/content.enum';
import {
  CampaignChoice,
  CampaignEndings,
  ChoiceOption,
  MajorChoice,
  PublicChoice,
  PublicChoiceSelection,
} from './interfaces/epilogue.interface';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(CampaignEntity)
    private readonly campaignRepo: Repository<CampaignEntity>,
    @InjectRepository(ChoiceEntity)
    private readonly choiceRepo: Repository<ChoiceEntity>,
  ) { }

  normalizeToCampaignDto(data: CampaignEntity[]): CampaignDto[] {
    return data.map((campaign) => this.toCampaignDto(campaign));
  }

  toCampaignDto(data: CampaignEntity): CampaignDto {
    const { id, name, views } = data;

    const viewsData: ViewDto[] = views.map((view) => {
      const { sequence_id, content_type, content } = view;

      let contentData: ContentExpositionDto | ContentChallengeDto;

      if (content_type === ContentType.Exposition) {
        contentData = {
          exposition: content.exposition,
          next: content.next,
        };
      } else if (content_type === ContentType.Challenge) {
        const actionData: Action[] = content.challenge.actions.map((action) => {
          let actionDto: ActionCheckDto | ActionChoiceDto;

          if (content.challenge.type === ChallengeType.Check) {
            actionDto = {
              id: action.choice_id,
              label: action.label,
              score: action.score,
              pass: action.pass,
              fail: action.fail,
            };
          } else if (content.challenge.type === ChallengeType.Choice) {
            actionDto = {
              id: action.choice_id,
              label: action.label,
              alignment: action.alignment.toString(),
              next: action.next,
            };
          }

          return actionDto;
        });

        const challenge: ChallengeDto = {
          text: content.challenge.text,
          type: content.challenge.type,
          actions: actionData,
        };

        contentData = {
          challenge,
        };
      }

      const viewDto: ViewDto = {
        sequence_id: sequence_id,
        content_type,
        content: contentData,
      };

      return viewDto;
    });

    const campaignDto: CampaignDto = {
      id,
      name,
      views: viewsData,
    };

    return campaignDto;
  }

  async getAllCampaigns(): Promise<CampaignDto[]> {
    const campaigns = await this.campaignRepo.find({
      relations: {
        views: {
          content: {
            challenge: {
              actions: true,
            },
          },
        },
      },
    });

    return this.normalizeToCampaignDto(campaigns);
  }

  async getCampaignById(id: number): Promise<CampaignDto> {
    const campaign = await this.campaignRepo.findOne({
      where: {
        id: id,
      },
      relations: {
        views: {
          content: {
            challenge: {
              actions: true,
            },
          },
        },
      },
    });

    if (!campaign) {
      throw new HttpException('Campaign not found', HttpStatus.BAD_REQUEST);
    }

    return this.toCampaignDto(campaign);
  }

  toAlignmentText(good: number, neutral: number, evil: number): MetaAlignment {
    const moralChoicesMade = good + evil > 0;
    const moralChoicesBalanced = good - evil === 0;
    if (moralChoicesMade && moralChoicesBalanced) return 'Neutral';

    switch (Math.max(good, neutral, evil)) {
      case good:
        return 'Good';
      case neutral:
        return 'Neutral';
      case evil:
        return 'Evil';
    }
  }

  toAlignment(alignments: DungeonsDragonsAlignment[]) {
    const goodScore = alignments.filter((alignment) =>
      [
        DungeonsDragonsAlignment.LawfulGood,
        DungeonsDragonsAlignment.NeutralGood,
        DungeonsDragonsAlignment.ChaoticGood,
      ].includes(alignment),
    ).length;
    const neutralScore = alignments.filter((alignment) =>
      [
        DungeonsDragonsAlignment.LawfulNeutral,
        DungeonsDragonsAlignment.TrueNeutral,
        DungeonsDragonsAlignment.ChaoticNeutral,
      ].includes(alignment),
    ).length;
    const evilScore = alignments.filter((alignment) =>
      [
        DungeonsDragonsAlignment.LawfulEvil,
        DungeonsDragonsAlignment.NeutralEvil,
        DungeonsDragonsAlignment.ChaoticEvil,
      ].includes(alignment),
    ).length;
    return this.toAlignmentText(goodScore, neutralScore, evilScore);
  }

  calculateAlignment(
    choices: ChoiceEntity[],
    campaignChoices: CampaignChoice[],
  ) {
    const alignments: DungeonsDragonsAlignment[] = [];
    for (let i = 0; i < campaignChoices.length; i++) {
      const alignment = campaignChoices[i].options.find(
        (option) => option.choice_id === choices[i].choice_made_id
      ).alignment;
      alignment && alignments.push(alignment);
    }

    return this.toAlignment(alignments);
  }

  calculateEpilogue(alignment: MetaAlignment, endings: CampaignEndings[]) {
    const ending = endings.find((ending) => ending.alignment === alignment);
    return ending.epilogue;
  }

  generatePlayerChoiceLabel(choice: ChoiceEntity, option: ChoiceOption) {
    if (option.personal_choice == null || option.personal_choice == '') {
      if (choice.is_success) {
        return option.personal_success;
      } else {
        return option.personal_fail;
      }
    }
    return option.personal_choice;
  }

  generatePublicChoiceLabel(
    total_population: number,
    public_choices: PublicChoiceSelection[],
    choice_options: ChoiceOption[],
  ) {
    const public_choice = public_choices[0];
    const campaign_choice = choice_options[public_choice.choice_id - 1];

    let also = '';
    let other_choice_selections = public_choice.total_choice_selections;

    if (public_choice.is_player_choice) {
      also = ' also';
      other_choice_selections -= 1;
    }

    const other_population = total_population - 1;

    const choice_percent = Math.round(
      (other_choice_selections / other_population) * 100,
    );
    const fake_choice_type_check =
      campaign_choice.others_choice_template == null ||
      campaign_choice.others_choice_template == '';

    if (fake_choice_type_check) {
      if (public_choice.is_player_success) {
        const check_percent = Math.round(
          (public_choice.total_failures / other_choice_selections) * 100,
        );
        return `${check_percent}% of other players ${campaign_choice.others_fail}`;
      } else {
        const check_percent = Math.round(
          (public_choice.total_succcesses / other_choice_selections) * 100,
        );
        return `${check_percent}% of other players ${campaign_choice.others_success}`;
      }
    } else {
      return `${choice_percent}% of other players${also} ${campaign_choice.others_choice_template}`;
    }
  }

  caclulateContent(
    majorChoices: MajorChoice[],
    choices: ChoiceEntity[],
    publicChoices: PublicChoice[],
    campaignChoices: CampaignChoice[],
  ): MajorChoiceDto[] {
    const majorChoicesDto: MajorChoiceDto[] = majorChoices.map(
      (majorChoice) => {
        const player_choice = choices.find(
          (choice) => choice.sequence_id === majorChoice.sequence_id,
        );

        const public_choice = publicChoices.find(
          (publicChoice) =>
            publicChoice.sequence_id === majorChoice.sequence_id,
        );

        const campaign_choice = campaignChoices.find(
          (campaignChoice) =>
            campaignChoice.sequence_id === majorChoice.sequence_id,
        );

        const player_choice_idx = player_choice.choice_made_id - 1;
        const player_choice_label = this.generatePlayerChoiceLabel(
          player_choice,
          campaign_choice.options[player_choice_idx],
        );

        const other_choice_label = this.generatePublicChoiceLabel(
          public_choice.total_selections,
          public_choice.selection_details,
          campaign_choice.options,
        );

        return {
          player_choice: player_choice_label,
          others_choice: other_choice_label,
        };
      },
    );
    return majorChoicesDto;
  }

  toEpilogueDto(
    data: CampaignEntity,
    campaignChoices: CampaignChoice[],
    choices: ChoiceEntity[],
    publicChoices: PublicChoice[],
  ): EpilogueDto {
    const alignment: MetaAlignment = this.calculateAlignment(
      choices,
      campaignChoices,
    );

    const epilogue = this.calculateEpilogue(
      alignment,
      data.epilogue.epilogue_options,
    );

    const content = this.caclulateContent(
      data.epilogue.major_choices,
      choices,
      publicChoices,
      campaignChoices,
    );

    return {
      epilogue,
      alignment,
      content,
    };
  }

  async getPublicChoices(
    campaign_id: number,
    playerChoices: ChoiceEntity[],
    campaignChoices: CampaignChoice[],
  ): Promise<PublicChoice[]> {
    const choices: PublicChoice[] = [];

    for (let i = 0; i < campaignChoices.length; i++) {
      const sequence_id = campaignChoices[i].sequence_id;
      const total_choices = campaignChoices[i].options.length;
      const playerChoice = playerChoices[i];

      const total_selections = await this.choiceRepo.count({
        where: {
          campaign_id: campaign_id,
          sequence_id: sequence_id,
        },
      });

      const selection_details: PublicChoiceSelection[] = [];
      for (let choice_id = 1; choice_id <= total_choices; choice_id++) {
        const total_choice_selections = await this.choiceRepo.count({
          where: {
            campaign_id: campaign_id,
            sequence_id: sequence_id,
            choice_made_id: choice_id,
          },
        });

        const total_succcesses = await this.choiceRepo.count({
          where: {
            campaign_id: campaign_id,
            sequence_id: sequence_id,
            choice_made_id: choice_id,
            is_success: true,
          },
        });

        const total_failures = await this.choiceRepo.count({
          where: {
            campaign_id: campaign_id,
            sequence_id: sequence_id,
            choice_made_id: choice_id,
            is_success: false,
          },
        });

        const is_player_choice = playerChoice.choice_made_id === choice_id;
        const is_player_success = is_player_choice && playerChoice.is_success;

        const selection = {
          choice_id,
          total_choice_selections,
          total_succcesses,
          total_failures,
          is_player_choice,
          is_player_success,
        };

        selection_details.push(selection);
      }

      const choice = {
        sequence_id: sequence_id,
        total_selections,
        selection_details: selection_details.sort(
          (a, b) => b.total_choice_selections - a.total_choice_selections,
        ),
      };

      choices.push(choice);
    }

    return choices;
  }

  async getCampaignEnding({
    campaign_id,
    character_id,
  }: GameStateDto): Promise<EpilogueDto> {
    const campaign = await this.campaignRepo.findOne({
      where: {
        id: campaign_id,
      },
      relations: {
        views: {
          content: {
            challenge: {
              actions: true,
            },
          },
        },
      },
    });

    if (!campaign) {
      throw new HttpException('Invalid Campaign ID', HttpStatus.BAD_REQUEST);
    }

    const campaignChoices: CampaignChoice[] = campaign.views
      .filter((view) => view.content_type === ContentType.Challenge)
      .map((view: ViewEntity): CampaignChoice => {
        const actions = view.content.challenge.actions;
        const options: ChoiceOption[] = actions.map(
          (action: ActionEntity): ChoiceOption => {
            return {
              choice_id: action.choice_id,
              alignment: action?.alignment,
              personal_choice: action?.personal_choice_label,
              others_choice_template: action?.others_choice_label,
              personal_fail: action?.personal_fail,
              personal_success: action?.personal_success,
              others_fail: action?.others_fail,
              others_success: action?.others_success,
            };
          },
        );

        return {
          sequence_id: view.sequence_id,
          options,
        };
      })
      .sort((a, b) => a.sequence_id - b.sequence_id);

    const playerChoices: ChoiceEntity[] = await this.choiceRepo.find({
      where: { campaign_id: campaign.id, character_id: character_id },
      order: { sequence_id: 'ASC' },
    });

    if (playerChoices.length <= 0) {
      throw new HttpException(
        'No choices made within the campaign.',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (campaignChoices.length !== playerChoices.length) {
      throw new HttpException(
        'Campaign not yet complete.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const publicChoices: PublicChoice[] = await this.getPublicChoices(
      campaign_id,
      playerChoices,
      campaignChoices,
    );

    return this.toEpilogueDto(
      campaign,
      campaignChoices,
      playerChoices,
      publicChoices,
    );
  }

  async createChoiceRecord(playerChoice: ChoiceMadeDto) {
    const choiceMade: ChoiceEntity = this.choiceRepo.create({
      campaign_id: playerChoice.campaign_id,
      sequence_id: playerChoice.sequence_id,
      character_id: playerChoice.character_id,
      choice_made_id: playerChoice.choice_made_id,
    });

    if (playerChoice.is_success !== null) {
      choiceMade.is_success = playerChoice.is_success;
    }

    await this.choiceRepo.upsert(choiceMade, {
      conflictPaths: ['campaign_id', 'sequence_id', 'character_id'],
      skipUpdateIfNoValuesChanged: true,
    });
  }

  async getChoiceById(
    campaign: number,
    sequence: number,
    character: number,
  ): Promise<ChoiceDto> {
    const choiceMade: ChoiceEntity = await this.choiceRepo.findOne({
      where: {
        campaign_id: campaign,
        sequence_id: sequence,
        character_id: character,
      },
    });

    if (!choiceMade) {
      throw new HttpException('Choice does not exist.', HttpStatus.BAD_REQUEST);
    }

    return choiceMade;
  }

  toChoicesDto(choices: ChoiceEntity[]): ChoiceDto[] {
    return choices.map((choice): ChoiceDto => {
      if (choice?.is_success || choice.is_success !== undefined) {
        return {
          choice_made_id: choice.choice_made_id,
          is_success: choice.is_success,
        };
      } else {
        return { choice_made_id: choice.choice_made_id, };
      }
    });
  }

  async getChoicesByCampaign(
    campaign: number,
    character: number,
  ): Promise<ChoiceDto[]> {
    const choicesMade: ChoiceEntity[] = await this.choiceRepo.find({
      where: {
        campaign_id: campaign,
        character_id: character,
      },
      order: {
        sequence_id: 'ASC',
      },
    });

    if (choicesMade.length <= 0) {
      throw new HttpException('Choices do not exist.', HttpStatus.BAD_REQUEST);
    }

    return this.toChoicesDto(choicesMade);
  }
}
