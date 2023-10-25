import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ChoiceDto {
  @ApiProperty({ description: 'ID to identify the choice within a view.' })
  @IsNotEmpty()
  choice_made_id: number;

  @ApiProperty({
    description: 'True if a check roll succeeded, Null if no check occurred.',
  })
  is_success: boolean | null;
}
