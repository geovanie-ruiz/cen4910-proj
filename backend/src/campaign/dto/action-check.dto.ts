import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ActionCheckDto {
  @ApiProperty({ description: 'ID to identify the choice' })
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: 'Text explaining the choice' })
  @IsNotEmpty()
  label: string;

  @ApiProperty({
    description: 'The value the player roll needs to meet or exceed',
  })
  @IsNotEmpty()
  score: number;

  @ApiProperty({
    description: 'Sequence ID for the view to which a passing roll leads',
  })
  @IsNotEmpty()
  pass: number;

  @ApiProperty({
    description: 'Sequence ID for the view to which a failing roll leads',
  })
  @IsNotEmpty()
  fail: number;
}
