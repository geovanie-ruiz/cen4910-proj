import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GameStateDto {
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
}
