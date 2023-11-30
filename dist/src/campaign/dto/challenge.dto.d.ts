import { ChallengeType } from '../enum/challenge.enum';
import { ActionCheckDto } from './action-check.dto';
import { ActionChoiceDto } from './action-choice.dto';
export type Action = ActionCheckDto | ActionChoiceDto;
export declare class ChallengeDto {
    text: string;
    type: ChallengeType;
    actions: Action[];
}
