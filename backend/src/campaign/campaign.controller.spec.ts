import { Test, TestingModule } from '@nestjs/testing';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import * as Mocks from './tests/mock-data.mock';

describe('CampaignController', () => {
  let controller: CampaignController;
  let service: CampaignService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignController],
      providers: [
        {
          provide: CampaignService,
          useValue: {
            getAllCampaigns: jest.fn().mockResolvedValue(Mocks.campaignArray),
            getCampaignEnding: jest.fn().mockResolvedValue(Mocks.epilogueDto),
            getCampaignById: jest.fn().mockResolvedValue(Mocks.oneCampaign),
            createChoiceRecord: jest.fn(),
            getChoiceById: jest.fn().mockResolvedValue(Mocks.choiceDto),
            getChoicesByCampaign: jest.fn().mockResolvedValue(Mocks.choicesDto),
          },
        }
      ],
    }).compile();

    controller = module.get<CampaignController>(CampaignController);
    service = module.get<CampaignService>(CampaignService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should get all campaigns', async () => {
    const campaigns = await controller.getCampaigns();
    expect(campaigns).toEqual(Mocks.campaignArray);
  });

  it('should get a campaign ending', async () => {
    const ending = await controller.getCampaignEnding(Mocks.gameStateDto);
    expect(ending).toEqual(Mocks.epilogueDto);
  });

  it('should get a campaign by its ID', async () => {
    const campaign = await controller.getCampaignById(1);
    expect(campaign).toEqual(Mocks.oneCampaign);
  });

  it('should create a choice record', async () => {
    const createChoiceRecord = jest.spyOn(service, 'createChoiceRecord');
    await controller.createChoiceRecord(Mocks.choiceMadeDto);
    expect(createChoiceRecord).toHaveBeenCalled();
    expect(createChoiceRecord).toHaveBeenCalledWith(Mocks.choiceMadeDto);
  });

  it('should get a choice by its ID', async () => {
    const choice = await controller.getChoiceById(1, 1, 1);
    expect(choice).toEqual(Mocks.choiceDto);
  });

  it('should get all choices for a campaign', async () => {
    const choices = await controller.getChoicesByCampaign(1, 1);
    expect(choices).toEqual(Mocks.choicesDto);
  });
});
