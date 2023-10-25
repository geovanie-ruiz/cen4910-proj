import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SaveUpdateDto {
  @ApiProperty({
    description: 'The pk of the save file to update.',
  })
  @IsNotEmpty()
  save_file_id: number;

  @ApiProperty({
    description:
      'The last sequence id the player viewed and should be resumed from.',
  })
  @IsNotEmpty()
  last_sequence_id: number;
}
