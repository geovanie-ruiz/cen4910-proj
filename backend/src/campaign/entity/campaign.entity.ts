import { Column, Entity, OneToMany } from 'typeorm';
import { QuestionEntity } from './question.entity';
import { AbstractEntity } from '../../common/abstract.entity';

@Entity('campaign')
export class CampaignEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  name: string;

  @OneToMany(() => QuestionEntity, (question) => question.campaign)
  questions: QuestionEntity[];
}
