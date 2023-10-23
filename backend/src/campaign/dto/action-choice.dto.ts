import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ActionChoiceDto {
  @ApiProperty({ description: 'ID to identify the choice' })
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: 'Text explaining the choice' })
  @IsNotEmpty()
  label: string;

  @ApiProperty({
    description: 'D&D Style alignment associated with the choice',
  })
  @IsNotEmpty()
  alignment: string;

  @ApiProperty({
    description: 'Sequence ID for the view to which this choice leads',
  })
  @IsNotEmpty()
  next: number;
}
