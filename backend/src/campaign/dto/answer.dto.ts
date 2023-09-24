import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { StarWarsAlignment } from '../enum/alignment.enum';

export class AnswerDto {
  @ApiProperty({
    description: 'Primary identifier for a possible decision to a choice.',
  })
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: "The text for the decision's context." })
  @IsNotEmpty()
  text: string;

  @ApiProperty({
    description: 'Numerical score for the decision when selected.',
  })
  @IsNotEmpty()
  score: number;

  @ApiProperty({
    description: 'Alignment value for the decision when selected.',
    enum: ['Light Side', 'Dark Side'],
  })
  @IsNotEmpty()
  alignment: StarWarsAlignment;
}
