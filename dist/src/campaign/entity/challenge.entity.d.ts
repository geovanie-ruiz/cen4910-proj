import { AbstractEntity } from '../../common/abstract.entity';
import { ContentEntity } from './content.entity';
import { ChallengeType } from '../enum/challenge.enum';
import { ActionEntity } from './action.entity';
export declare class ChallengeEntity extends AbstractEntity {
    text: string;
    type: ChallengeType;
    actions: ActionEntity[];
    content: ContentEntity;
}
