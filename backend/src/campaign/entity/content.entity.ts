import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { ViewEntity } from './view.entity';
import { ChallengeEntity } from './challenge.entity';

@Entity('content')
export class ContentEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: true,
    unique: false,
  })
  exposition: string;

  @Column({
    type: 'smallint',
    nullable: true,
    unique: false,
  })
  next: number;

  @OneToOne(() => ChallengeEntity, {
    eager: true,
  })
  @JoinColumn()
  challenge: ChallengeEntity;

  @OneToOne(() => ViewEntity, (view) => view.content)
  @JoinColumn()
  view: ViewEntity;
}
