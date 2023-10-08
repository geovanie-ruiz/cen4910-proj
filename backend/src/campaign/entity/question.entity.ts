import { Column, Entity, OneToMany, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { CampaignEntity } from './campaign.entity';
import { AnswerEntity } from './answer.entity';

@Entity('question')
export class QuestionEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  text: string;

  @OneToMany(() => AnswerEntity, (answer) => answer.question)
  answers: AnswerEntity[];

  @ManyToOne(() => CampaignEntity, (campaign) => campaign.questions)
  campaign: CampaignEntity;
}
