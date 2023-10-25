import { Column, Entity, OneToMany } from 'typeorm';
import { ViewEntity } from './view.entity';
import { AbstractEntity } from '../../common/abstract.entity';
import { CampaignEpilogue } from '../interfaces/epilogue.interface';

@Entity('campaign')
export class CampaignEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    type: 'jsonb',
    nullable: false,
    unique: false,
  })
  epilogue: CampaignEpilogue;

  @OneToMany(() => ViewEntity, (view) => view.campaign, {
    eager: true,
  })
  views: ViewEntity[];
}
