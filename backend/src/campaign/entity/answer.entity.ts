import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { StarWarsAlignment } from '../enum/alignment.enum';
import { QuestionEntity } from './question.entity';

@Entity('answer')
export class AnswerEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  text: string;

  @Column({
    type: 'smallint',
    nullable: false,
    unique: false,
  })
  score: number;

  @Column({
    type: 'varchar',
    nullable: true,
    unique: false,
  })
  alignment: StarWarsAlignment;

  @ManyToOne(() => QuestionEntity, (question) => question.answers)
  question: QuestionEntity;
}
