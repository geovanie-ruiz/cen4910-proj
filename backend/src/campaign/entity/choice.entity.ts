import { Column, Entity, Unique } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';

@Entity('choice')
@Unique('composite_key', ['campaign_id', 'sequence_id', 'character_id'])
export class ChoiceEntity extends AbstractEntity {
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
  sequence_id: number;

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
  choice_made_id: number;

  @Column({
    type: 'boolean',
    nullable: true,
    unique: false,
  })
  is_success: boolean;
}
