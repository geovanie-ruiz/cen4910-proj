import { AbstractEntity } from '../../common/abstract.entity';
import { ChallengeEntity } from './challenge.entity';
import { DungeonsDragonsAlignment } from '../enum/alignment.enum';
export declare class ActionEntity extends AbstractEntity {
    choice_id: number;
    label: string;
    alignment: DungeonsDragonsAlignment;
    next: number;
    personal_choice_label: string;
    others_choice_label: string;
    score: number;
    pass: number;
    fail: number;
    personal_fail: string;
    personal_success: string;
    others_fail: string;
    others_success: string;
    challenge: ChallengeEntity;
}
