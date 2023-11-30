import { GameStateDto } from "../../users/dto/gamestate.dto";
import { CampaignDto } from "../dto/campaign.dto";
import { ChoiceMadeDto } from "../dto/choice-made.dto";
import { ChoiceDto } from "../dto/choice.dto";
import { EpilogueDto, MajorChoiceDto } from "../dto/epilogue.dto";
import { ActionEntity } from "../entity/action.entity";
import { CampaignEntity } from "../entity/campaign.entity";
import { ChallengeEntity } from "../entity/challenge.entity";
import { ChoiceEntity } from "../entity/choice.entity";
import { ContentEntity } from "../entity/content.entity";
import { ViewEntity } from "../entity/view.entity";
import { CampaignChoice, CampaignEndings, CampaignEpilogue, ChoiceOption, MajorChoice, PublicChoice, PublicChoiceSelection } from "../interfaces/epilogue.interface";
export declare const campaignEnding: CampaignEndings;
export declare const campaignEndings: CampaignEndings[];
export declare const majorChoice: MajorChoice;
export declare const majorChoices: MajorChoice[];
export declare const epilogue: CampaignEpilogue;
export declare const oneCampaignChoices: CampaignChoice[];
export declare const campaignChoices: CampaignChoice[];
export declare const optionPersonal: ChoiceOption;
export declare const optionSuccess: ChoiceOption;
export declare const optionFailure: ChoiceOption;
export declare const choiceOptions: ChoiceOption[];
export declare const publicChoiceSelectionsAlso: PublicChoiceSelection[];
export declare const publicChoiceSelectionsOthers: PublicChoiceSelection[];
export declare const publicCheckSelectionsPlayerSuccess: PublicChoiceSelection[];
export declare const publicCheckSelectionsPlayerFailure: PublicChoiceSelection[];
export declare const publicChoices: PublicChoice[];
export declare const oneCheckAction: ActionEntity;
export declare const oneChoiceAction: ActionEntity;
export declare const oneCheckChallenge: ChallengeEntity;
export declare const oneChoiceChallenge: ChallengeEntity;
export declare const oneChoice: ChoiceEntity;
export declare const oneSuccess: ChoiceEntity;
export declare const oneFailure: ChoiceEntity;
export declare const oneExpositionContent: ContentEntity;
export declare const oneCheckChallengeContent: ContentEntity;
export declare const oneChoiceChallengeContent: ContentEntity;
export declare const oneView: ViewEntity;
export declare const oneCampaign: CampaignEntity;
export declare const actionArray: ActionEntity[];
export declare const challengeArray: ChallengeEntity[];
export declare const choiceArray: ChoiceEntity[];
export declare const playerChoicesGood: ChoiceEntity[];
export declare const playerChoicesNeutralA: ChoiceEntity[];
export declare const playerChoicesNeutralB: ChoiceEntity[];
export declare const playerChoicesNeutralC: ChoiceEntity[];
export declare const playerChoicesEvil: ChoiceEntity[];
export declare const contentArray: ContentEntity[];
export declare const viewArray: ViewEntity[];
export declare const campaignArray: CampaignEntity[];
export declare const choiceMadeDto: ChoiceMadeDto;
export declare const checkMadeDto: ChoiceMadeDto;
export declare const epilogueDto: EpilogueDto;
export declare const oneCampaignEpilogueDto: EpilogueDto;
export declare const campaignDto: CampaignDto;
export declare const campaignDtos: CampaignDto[];
export declare const majorChoicesDto: MajorChoiceDto[];
export declare const gameStateDto: GameStateDto;
export declare const choicesDto: ChoiceDto[];
export declare const choiceDto: ChoiceDto;
export declare const checkDto: ChoiceDto;
