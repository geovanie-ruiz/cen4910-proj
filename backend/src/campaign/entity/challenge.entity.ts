import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { ContentEntity } from './content.entity';
import { ChallengeType } from '../enum/challenge.enum';
import { ActionEntity } from './action.entity';

@Entity('challenge')
export class ChallengeEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  text: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  type: ChallengeType;

  @OneToMany(() => ActionEntity, (action) => action.challenge, {
    eager: true,
  })
  @JoinColumn()
  actions: ActionEntity[];

  @OneToOne(() => ContentEntity, (content) => content.challenge)
  @JoinColumn()
  content: ContentEntity;
}
