import { AbstractEntity } from '../../common/abstract.entity';
import { UserSaveEntity } from './save.entity';
export declare class UserEntity extends AbstractEntity {
    username: string;
    password: string;
    email: string;
    saves: UserSaveEntity[];
    hashPassword(): Promise<void>;
}
