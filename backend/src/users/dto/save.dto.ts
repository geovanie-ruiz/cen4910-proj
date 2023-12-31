import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

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
    description: 'The foreign key for the character tied to the save file.',
  })
  @IsNotEmpty()
  character_id: number;

  @ApiProperty({
    description:
      'The last sequence id the player viewed and should be resumed from.',
  })
  @IsNotEmpty()
  last_sequence_id: number;
}
