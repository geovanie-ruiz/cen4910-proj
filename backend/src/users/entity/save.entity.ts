import { Column, Entity, ManyToOne, Unique } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { UserEntity } from './user.entity';

@Entity('user_save')
@Unique(['user', 'filename'])
export class UserSaveEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  filename: string;

  @Column({
    type: 'smallint',
    nullable: false,
    unique: false,
  })
  campaign_id: number;

  @Column({
    type: 'smallint',
    nullable: false,
    unique: false,
  })
  character_id: number;

  @Column({
    type: 'smallint',
    nullable: false,
    unique: false,
  })
  last_sequence_id: number;

  @ManyToOne(() => UserEntity, (user) => user.saves)
  user: UserEntity;
}
