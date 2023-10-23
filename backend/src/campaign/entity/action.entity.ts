import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { ChallengeEntity } from './challenge.entity';
import { DungeonsDragonsAlignment } from '../enum/alignment.enum';

@Entity('action')
export class ActionEntity extends AbstractEntity {
  @Column({
    type: 'smallint',
    nullable: false,
    unique: false,
  })
  choice_id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  label: string;

  @Column({
    type: 'varchar',
    nullable: true,
    unique: false,
  })
  alignment: DungeonsDragonsAlignment;

  @Column({
    type: 'smallint',
    nullable: true,
    unique: false,
  })
  next: number;

  @Column({
    type: 'smallint',
    nullable: true,
    unique: false,
  })
  score: number;

  @Column({
    type: 'smallint',
    nullable: true,
    unique: false,
  })
  pass: number;

  @Column({
    type: 'smallint',
    nullable: true,
    unique: false,
  })
  fail: number;

  @ManyToOne(() => ChallengeEntity, (challenge) => challenge.actions)
  challenge: ChallengeEntity;
}
