import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';

@Entity('character')
export class CharacterEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  class: string;

  @Column({
    type: 'smallint',
    nullable: false,
    unique: false,
  })
  strength: number;

  @Column({
    type: 'smallint',
    nullable: false,
    unique: false,
  })
  intelligence: number;

  @Column({
    type: 'smallint',
    nullable: false,
    unique: false,
  })
  luck: number;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: false,
  })
  bioUrl: string;
}
