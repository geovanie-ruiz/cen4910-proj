import { Column, Entity, OneToMany } from 'typeorm';
import { ViewEntity } from './view.entity';
import { AbstractEntity } from '../../common/abstract.entity';

@Entity('campaign')
export class CampaignEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  name: string;

  @OneToMany(() => ViewEntity, (view) => view.campaign, {
    eager: true,
  })
  views: ViewEntity[];
}
