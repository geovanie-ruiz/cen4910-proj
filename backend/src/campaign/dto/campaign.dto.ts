import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';
import { QuestionDto } from './question.dto';

export class CampaignDto {
  @ApiProperty({ description: 'Primary identifier for the campaign.' })
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: 'Human readable identifier for the campaign.' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'List of choices for the user to make during the campaign.',
    type: [QuestionDto],
  })
  @IsNotEmpty()
  @IsArray()
  questions: QuestionDto[];
}
