import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { UserEntity } from './user.entity';
import { SaveFile } from '../interfaces/save.interface';

@Entity('user_save')
export class UserSaveEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  filename: string;

  @Column({
    type: 'jsonb',
    nullable: false,
    unique: false,
  })
  save_data: SaveFile;

  @ManyToOne(() => UserEntity, (user) => user.saves)
  user: UserEntity;
}
