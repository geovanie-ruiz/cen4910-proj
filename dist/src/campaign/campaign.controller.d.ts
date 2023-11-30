import { GameStateDto } from '../users/dto/gamestate.dto';
import { CampaignService } from './campaign.service';
import { CampaignDto } from './dto/campaign.dto';
import { ChoiceMadeDto } from './dto/choice-made.dto';
import { ChoiceDto } from './dto/choice.dto';
import { EpilogueDto } from './dto/epilogue.dto';
export declare class CampaignController {
    private campaignService;
    constructor(campaignService: CampaignService);
    getCampaigns(): Promise<CampaignDto[]>;
    getCampaignEnding(gameState: GameStateDto): Promise<EpilogueDto>;
    getCampaignById(campaignId: number): Promise<CampaignDto>;
    createChoiceRecord(playerChoice: ChoiceMadeDto): Promise<void>;
    getChoiceById(campaignId: number, sequenceId: number, characterId: number): Promise<ChoiceDto>;
    getChoicesByCampaign(campaignId: number, characterId: number): Promise<ChoiceDto[]>;
}
