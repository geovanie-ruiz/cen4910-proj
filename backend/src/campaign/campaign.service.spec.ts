import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CampaignService } from './campaign.service';
import { CampaignEntity } from './entity/campaign.entity';
import { ChoiceEntity } from './entity/choice.entity';
import { DungeonsDragonsAlignment } from './enum/alignment.enum';
import * as Mocks from './tests/mock-data.mock';
import { create } from 'domain';

describe('CampaignService', () => {
  let service: CampaignService;
  let campaignEntityRepository: Repository<CampaignEntity>;
  let choiceEntityRepository: Repository<ChoiceEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CampaignService,
        {
          provide: getRepositoryToken(CampaignEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(Mocks.campaignArray),
            findOne: jest.fn().mockResolvedValue(Mocks.oneCampaign),
            create: jest.fn().mockReturnValue(Mocks.oneCampaign),
            save: jest.fn().mockResolvedValue(Mocks.oneCampaign),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(ChoiceEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(Mocks.choiceArray),
            findOne: jest.fn().mockResolvedValue(Mocks.oneChoice),
            create: jest.fn().mockReturnValue(Mocks.oneChoice),
            save: jest.fn().mockResolvedValue(Mocks.oneChoice),
            upsert: jest.fn().mockResolvedValueOnce(Mocks.oneChoice),
            remove: jest.fn(),
            delete: jest.fn(),
            count: jest.fn().mockResolvedValue(5),
          },
        }
      ],
    }).compile();

    service = module.get<CampaignService>(CampaignService);
    campaignEntityRepository = module.get<Repository<CampaignEntity>>(
      getRepositoryToken(CampaignEntity),
    );;
    choiceEntityRepository = module.get<Repository<ChoiceEntity>>(
      getRepositoryToken(ChoiceEntity),
    );;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(campaignEntityRepository).toBeDefined();
    expect(choiceEntityRepository).toBeDefined();
  });

  it('normalizes campaign entities into dto', async () => {
    const campaigns = service.normalizeToCampaignDto([Mocks.oneCampaign,]);
    expect(campaigns).toEqual([Mocks.campaignDto,]);
  });

  it('converts campaign entity to dto', async () => {
    const campaign = service.toCampaignDto(Mocks.oneCampaign);
    expect(campaign).toEqual(Mocks.campaignDto);
  });

  it('retrieves all campaigns', async () => {
    const campaigns = await service.getAllCampaigns();
    expect(campaigns).toEqual(Mocks.campaignDtos);
  });

  it('retrieves campaigns by their ID', async () => {
    const campaign = await service.getCampaignById(1);
    expect(campaign).toEqual(Mocks.campaignDto);
  });

  it('fails to retreive campaigns by ID', async () => {
    jest.spyOn(campaignEntityRepository, 'findOne').mockResolvedValue(null);

    try {
      await service.getCampaignById(1);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Campaign not found');
    }
  });

  it('calculates morality based on score', async () => {
    const goodScore = service.toAlignmentText(...[3, 2, 0]);
    const neutralScoreA = service.toAlignmentText(...[0, 3, 2]);
    const neutralScoreB = service.toAlignmentText(...[2, 1, 2]);
    const neutralScoreC = service.toAlignmentText(...[0, 5, 0]);
    const evilScore = service.toAlignmentText(...[0, 2, 3]);

    expect(goodScore).toEqual('Good');
    expect(neutralScoreA).toEqual('Neutral');
    expect(neutralScoreB).toEqual('Neutral');
    expect(neutralScoreC).toEqual('Neutral');
    expect(evilScore).toEqual('Evil');
  });

  it('calculates morality based on alignments', async () => {
    const goodAlignments = [
      DungeonsDragonsAlignment.LawfulGood,
      DungeonsDragonsAlignment.NeutralGood,
      DungeonsDragonsAlignment.ChaoticGood,
      DungeonsDragonsAlignment.TrueNeutral,
      DungeonsDragonsAlignment.TrueNeutral,
    ];
    const neutralAlignmentsA = [
      DungeonsDragonsAlignment.LawfulNeutral,
      DungeonsDragonsAlignment.TrueNeutral,
      DungeonsDragonsAlignment.ChaoticNeutral,
      DungeonsDragonsAlignment.ChaoticEvil,
      DungeonsDragonsAlignment.LawfulEvil,
    ];
    const neutralAlignmentsB = [
      DungeonsDragonsAlignment.LawfulGood,
      DungeonsDragonsAlignment.ChaoticGood,
      DungeonsDragonsAlignment.TrueNeutral,
      DungeonsDragonsAlignment.ChaoticEvil,
      DungeonsDragonsAlignment.LawfulEvil,
    ];
    const neutralAlignmentsC = [
      DungeonsDragonsAlignment.LawfulNeutral,
      DungeonsDragonsAlignment.LawfulNeutral,
      DungeonsDragonsAlignment.TrueNeutral,
      DungeonsDragonsAlignment.ChaoticNeutral,
      DungeonsDragonsAlignment.ChaoticNeutral,
    ];
    const evilAlignments = [
      DungeonsDragonsAlignment.LawfulEvil,
      DungeonsDragonsAlignment.NeutralEvil,
      DungeonsDragonsAlignment.ChaoticEvil,
      DungeonsDragonsAlignment.TrueNeutral,
      DungeonsDragonsAlignment.TrueNeutral,
    ];

    const goodScore = service.toAlignment(goodAlignments);
    const neutralScoreA = service.toAlignment(neutralAlignmentsA);
    const neutralScoreB = service.toAlignment(neutralAlignmentsB);
    const neutralScoreC = service.toAlignment(neutralAlignmentsC);
    const evilScore = service.toAlignment(evilAlignments);

    expect(goodScore).toEqual('Good');
    expect(neutralScoreA).toEqual('Neutral');
    expect(neutralScoreB).toEqual('Neutral');
    expect(neutralScoreC).toEqual('Neutral');
    expect(evilScore).toEqual('Evil');
  });

  it('calculates morality based on choices', async () => {
    const goodScore = service.calculateAlignment(
      Mocks.playerChoicesGood,
      Mocks.campaignChoices,
    );
    const neutralScoreA = service.calculateAlignment(
      Mocks.playerChoicesNeutralA,
      Mocks.campaignChoices,
    );
    const neutralScoreB = service.calculateAlignment(
      Mocks.playerChoicesNeutralB,
      Mocks.campaignChoices,
    );
    const neutralScoreC = service.calculateAlignment(
      Mocks.playerChoicesNeutralC,
      Mocks.campaignChoices,
    );
    const evilScore = service.calculateAlignment(
      Mocks.playerChoicesEvil,
      Mocks.campaignChoices,
    );

    expect(goodScore).toEqual('Good');
    expect(neutralScoreA).toEqual('Neutral');
    expect(neutralScoreB).toEqual('Neutral');
    expect(neutralScoreC).toEqual('Neutral');
    expect(evilScore).toEqual('Evil');
  });

  it('calculates epilogues based on morality', async () => {
    const good = service.calculateAlignment(
      Mocks.playerChoicesGood,
      Mocks.campaignChoices,
    );
    const neutralA = service.calculateAlignment(
      Mocks.playerChoicesNeutralA,
      Mocks.campaignChoices,
    );
    const neutralB = service.calculateAlignment(
      Mocks.playerChoicesNeutralB,
      Mocks.campaignChoices,
    );
    const neutralC = service.calculateAlignment(
      Mocks.playerChoicesNeutralC,
      Mocks.campaignChoices,
    );
    const evil = service.calculateAlignment(
      Mocks.playerChoicesEvil,
      Mocks.campaignChoices,
    );

    const goodEnding = service.calculateEpilogue(
      good,
      Mocks.campaignEndings,
    );
    const neutralEndingA = service.calculateEpilogue(
      neutralA,
      Mocks.campaignEndings,
    );
    const neutralEndingB = service.calculateEpilogue(
      neutralB,
      Mocks.campaignEndings,
    );
    const neutralEndingC = service.calculateEpilogue(
      neutralC,
      Mocks.campaignEndings,
    );
    const evilEnding = service.calculateEpilogue(
      evil,
      Mocks.campaignEndings,
    );

    expect(goodEnding).toEqual('A Good Ending');
    expect(neutralEndingA).toEqual('A Neutral Ending');
    expect(neutralEndingB).toEqual('A Neutral Ending');
    expect(neutralEndingC).toEqual('A Neutral Ending');
    expect(evilEnding).toEqual('An Evil Ending');
  });

  it('generates labels for player choices', async () => {
    const choice = service.generatePlayerChoiceLabel(
      Mocks.oneChoice,
      Mocks.optionPersonal,
    );
    const success = service.generatePlayerChoiceLabel(
      Mocks.oneSuccess,
      Mocks.optionSuccess,
    );
    const failure = service.generatePlayerChoiceLabel(
      Mocks.oneFailure,
      Mocks.optionFailure,
    );

    expect(choice).toEqual('A Personal Choice');
    expect(success).toEqual('A Personal Success');
    expect(failure).toEqual('A Personal Failure');
  });

  it('generates labels for other player choices', async () => {
    const also = service.generatePublicChoiceLabel(
      11,
      Mocks.publicChoiceSelectionsAlso,
      Mocks.choiceOptions,
    );
    const others = service.generatePublicChoiceLabel(
      11,
      Mocks.publicChoiceSelectionsOthers,
      Mocks.choiceOptions,
    );
    const othersFailed = service.generatePublicChoiceLabel(
      11,
      Mocks.publicCheckSelectionsPlayerSuccess,
      Mocks.choiceOptions,
    );
    const othersSucceeded = service.generatePublicChoiceLabel(
      11,
      Mocks.publicCheckSelectionsPlayerFailure,
      Mocks.choiceOptions,
    );

    expect(also).toEqual('50% of other players also Also Chosen');
    expect(others).toEqual('60% of other players Others Chose');
    expect(othersFailed).toEqual('100% of other players 1 Fail');
    expect(othersSucceeded).toEqual('100% of other players 2 Success');
  });

  it('calculates major choices content', async () => {
    const choices = service.caclulateContent(
      Mocks.majorChoices,
      Mocks.playerChoicesEvil,
      Mocks.publicChoices,
      Mocks.campaignChoices,
    );

    expect(choices).toEqual(Mocks.majorChoicesDto);
  });

  it('converts data to epilogue dto', async () => {
    const epilogue = service.toEpilogueDto(
      Mocks.oneCampaign,
      Mocks.oneCampaignChoices,
      Mocks.choiceArray,
      Mocks.publicChoices,
    );

    expect(epilogue).toEqual(Mocks.oneCampaignEpilogueDto);
  });

  it('retrieves a list of public choices', async () => {
    const choices = await service.getPublicChoices(
      1,
      Mocks.playerChoicesEvil,
      Mocks.campaignChoices,
    );

    expect(choices).toEqual(Mocks.publicChoices)
  });

  it('retrieves campaign endings', async () => {
    const ending = await service.getCampaignEnding(Mocks.gameStateDto);
    expect(ending).toEqual(Mocks.epilogueDto);
  });

  it('fails to retrieve campaign endings', async () => {
    jest.spyOn(campaignEntityRepository, 'findOne').mockResolvedValueOnce(null);
    jest.spyOn(choiceEntityRepository, 'find')
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([Mocks.oneChoice,]);
    
    try {
      await service.getCampaignEnding(Mocks.gameStateDto);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Invalid Campaign ID');
    }

    try {
      await service.getCampaignEnding(Mocks.gameStateDto);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('No choices made within the campaign.');
    }

    try {
      await service.getCampaignEnding(Mocks.gameStateDto);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Campaign not yet complete.');
    }
  });

  it('creates choice records', async () => {
    const createChoice = jest.spyOn(choiceEntityRepository, 'create');
    const upsertChoice = jest.spyOn(choiceEntityRepository, 'upsert');

    const choice = {
      campaign_id: Mocks.choiceMadeDto.campaign_id,
      sequence_id: Mocks.choiceMadeDto.sequence_id,
      character_id: Mocks.choiceMadeDto.character_id,
      choice_made_id: Mocks.choiceMadeDto.choice_made_id,
    };
    const check = {
      campaign_id: Mocks.checkMadeDto.campaign_id,
      sequence_id: Mocks.checkMadeDto.sequence_id,
      character_id: Mocks.checkMadeDto.character_id,
      choice_made_id: Mocks.checkMadeDto.choice_made_id,
    };
    const checkSave = {
      campaign_id: Mocks.checkMadeDto.campaign_id,
      sequence_id: Mocks.checkMadeDto.sequence_id,
      character_id: Mocks.checkMadeDto.character_id,
      choice_made_id: Mocks.checkMadeDto.choice_made_id,
      is_success: Mocks.checkMadeDto.is_success,
    };

    await service.createChoiceRecord(Mocks.choiceMadeDto);
    expect(createChoice).toHaveBeenCalled();
    expect(createChoice).toHaveBeenCalledTimes(1);
    expect(createChoice).toHaveBeenCalledWith(choice);
    expect(createChoice).toReturnWith(Mocks.oneChoice);
    expect(upsertChoice).toHaveBeenCalled();
    expect(upsertChoice).toHaveBeenCalledTimes(1);
    expect(upsertChoice).toHaveBeenCalledWith(choice, {
      conflictPaths: ['campaign_id', 'sequence_id', 'character_id'],
      skipUpdateIfNoValuesChanged: true,
    });

    await service.createChoiceRecord(Mocks.checkMadeDto);
    expect(createChoice).toHaveBeenCalled();
    expect(createChoice).toHaveBeenCalledTimes(2);
    expect(createChoice).toHaveBeenCalledWith(check);
    expect(createChoice).toReturnWith(Mocks.oneChoice);
    expect(upsertChoice).toHaveBeenCalled();
    expect(upsertChoice).toHaveBeenCalledTimes(2);
    expect(upsertChoice).toHaveBeenCalledWith(checkSave, {
      conflictPaths: ['campaign_id', 'sequence_id', 'character_id'],
      skipUpdateIfNoValuesChanged: true,
    });
  });

  it('retrieves choices by ID', async () => {
    const choice = await service.getChoiceById(1, 1, 1);
    expect(choice).toEqual(Mocks.oneChoice);
  });

  it('fails to retrieve choices by ID', async () => {
    jest.spyOn(choiceEntityRepository, 'findOne').mockResolvedValueOnce(null);
    
    try {
      await service.getChoiceById(1, 1, 1);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Choice does not exist.');
    }
  });

  it('retrives choices by campaign', async () => {
    const choices = await service.getChoicesByCampaign(1, 1);
    expect(choices).toEqual(Mocks.choicesDto);
  });

  it('fails to retrieve choices by campaign', async () => {
    jest.spyOn(choiceEntityRepository, 'find').mockResolvedValueOnce([]);
    
    try {
      await service.getChoicesByCampaign(1, 1);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Choices do not exist.');
    }
  });
});
