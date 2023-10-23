import { Column, Entity, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { ContentType } from '../enum/content.enum';
import { CampaignEntity } from './campaign.entity';
import { ContentEntity } from './content.entity';

@Entity('view')
export class ViewEntity extends AbstractEntity {
  @Column({
    type: 'smallint',
    nullable: false,
    unique: false,
  })
  sequence_id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  content_type: ContentType;

  @OneToOne(() => ContentEntity, {
    eager: true,
  })
  @JoinColumn()
  content: ContentEntity;

  @ManyToOne(() => CampaignEntity, (campaign) => campaign.views)
  campaign: CampaignEntity;
}
