import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SaveSnapshotDto {
  @ApiProperty({ description: 'The pk for the save file.' })
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: 'The user given name for the save file.' })
  @IsNotEmpty()
  filename: string;

  @ApiProperty({ description: 'The name for the campaign.' })
  @IsNotEmpty()
  campaign_name: string;

  @ApiProperty({ description: 'The name for the save file character.' })
  @IsNotEmpty()
  character_name: string;

  @ApiProperty({ description: 'The updated_at timestamp for the save file.' })
  @IsNotEmpty()
  last_played: Date;
}
