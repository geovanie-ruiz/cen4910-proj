import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ContentExpositionDto {
  @ApiProperty({ description: 'The text for the exposition content.' })
  @IsNotEmpty()
  exposition: string;

  @ApiProperty({
    description: 'The next View Sequence ID to move to.',
  })
  @IsNotEmpty()
  next: number;
}
