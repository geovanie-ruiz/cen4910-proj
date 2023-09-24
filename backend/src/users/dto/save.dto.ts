import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class ChoiceDto {
  @ApiProperty()
  @IsNotEmpty()
  question_id: number;

  @ApiProperty()
  @IsNotEmpty()
  answer_id: number;
}

export class SaveDto {
  @ApiProperty({ description: 'The user given name for the save file.' })
  @IsNotEmpty()
  filename: string;

  @ApiProperty({
    description: 'The foreign key for the campaign the save is made from.',
  })
  @IsNotEmpty()
  campaign_id: number;

  @ApiProperty({
    description: 'The stored choices made by the player.',
    type: [ChoiceDto],
  })
  @IsNotEmpty()
  @IsArray()
  choices: ChoiceDto[];
}
