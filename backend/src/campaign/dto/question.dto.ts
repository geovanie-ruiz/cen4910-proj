import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';
import { AnswerDto } from './answer.dto';

export class QuestionDto {
  @ApiProperty({ description: 'Primary identifier for the choice.' })
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: 'The text for the choices context.' })
  @IsNotEmpty()
  text: string;

  @ApiProperty({
    description: 'The stored choices made by the player.',
    type: [AnswerDto],
  })
  @IsNotEmpty()
  @IsArray()
  answers: AnswerDto[];
}
