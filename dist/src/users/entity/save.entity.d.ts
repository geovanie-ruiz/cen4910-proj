import { AbstractEntity } from '../../common/abstract.entity';
import { UserEntity } from './user.entity';
export declare class UserSaveEntity extends AbstractEntity {
    filename: string;
    campaign_id: number;
    character_id: number;
    last_sequence_id: number;
    user: UserEntity;
}
