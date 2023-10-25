import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ChoiceMadeDto {
  @ApiProperty({
    description: 'ID of the campaign within which the view exists.',
  })
  @IsNotEmpty()
  campaign_id: number;

  @ApiProperty({
    description: 'ID of the view within which the choice exists.',
  })
  @IsNotEmpty()
  sequence_id: number;

  @ApiProperty({
    description: 'ID of the character participating in the campaign.',
  })
  @IsNotEmpty()
  character_id: number;

  @ApiProperty({ description: 'ID to identify the choice within a view.' })
  @IsNotEmpty()
  choice_made_id: number;

  @ApiProperty({
    description: 'True if a check roll succeeded, Null if no check occurred.',
  })
  is_success: boolean | null;
}
