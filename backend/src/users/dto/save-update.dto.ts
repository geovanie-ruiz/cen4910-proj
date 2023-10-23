import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';
import { EventDto } from './save.dto';

export class SaveUpdateDto {
  @ApiProperty({
    description:
      'The last sequence id the player viewed and should be resumed from.',
  })
  @IsNotEmpty()
  last_sequence_id: number;

  @ApiProperty({
    description: 'The stored choices made by the player.',
    type: [EventDto],
  })
  @IsNotEmpty()
  @IsArray()
  history: EventDto[];
}
