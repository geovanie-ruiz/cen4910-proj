import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export type MetaAlignment = 'Good' | 'Neutral' | 'Evil';

export class MajorChoiceDto {
  @ApiProperty({
    description: 'Assessment of a player choice made.',
  })
  @IsNotEmpty()
  player_choice: string;

  @ApiProperty({
    description: 'Comparison of choices versus other player choices.',
  })
  @IsNotEmpty()
  others_choice: string;
}

export class EpilogueDto {
  @ApiProperty({
    description: 'Epilogue text for the campaign result.',
  })
  @IsNotEmpty()
  epilogue: string;

  @ApiProperty({
    description: 'The resulting alignment based on choices.',
  })
  @IsNotEmpty()
  alignment: MetaAlignment;

  @ApiProperty({
    description: 'Summary of major choices made in the campaign.',
    type: [MajorChoiceDto],
  })
  @IsArray()
  @IsNotEmpty()
  content: MajorChoiceDto[];
}
