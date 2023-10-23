import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CampaignEntity } from './entity/campaign.entity';
import { CampaignDto } from './dto/campaign.dto';
import { ViewDto } from './dto/view.dto';
import { ContentExpositionDto } from './dto/content-exposition.dto';
import { ContentChallengeDto } from './dto/content-challenge.dto';
import { Action, ChallengeDto } from './dto/challenge.dto';
import { ActionCheckDto } from './dto/action-check.dto';
import { ActionChoiceDto } from './dto/action-choice.dto';
import { ContentType } from './enum/content.enum';
import { ChallengeType } from './enum/challenge.enum';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(CampaignEntity)
    private readonly campaignRepo: Repository<CampaignEntity>,
  ) {}

  private normalizeToCampaignDto(data: CampaignEntity[]): CampaignDto[] {
    return data.map((campaign) => this.toCampaignDto(campaign));
  }

  private toCampaignDto(data: CampaignEntity): CampaignDto {
    const { id, name, views } = data;

    const viewsData: ViewDto[] = views.map((view) => {
      console.log(view);

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
              id: action.id,
              label: action.label,
              score: action.score,
              pass: action.pass,
              fail: action.fail,
            };
          } else if (content.challenge.type === ChallengeType.Choice) {
            actionDto = {
              id: action.id,
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
}
