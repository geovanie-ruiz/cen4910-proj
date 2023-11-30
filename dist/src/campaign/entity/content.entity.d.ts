import { AbstractEntity } from '../../common/abstract.entity';
import { ViewEntity } from './view.entity';
import { ChallengeEntity } from './challenge.entity';
export declare class ContentEntity extends AbstractEntity {
    exposition: string;
    next: number;
    challenge: ChallengeEntity;
    view: ViewEntity;
}
