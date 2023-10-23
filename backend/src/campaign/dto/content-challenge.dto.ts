import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ChallengeDto } from './challenge.dto';

export class ContentChallengeDto {
  @ApiProperty({
    description: 'The content contained in the view.',
    type: ChallengeDto,
  })
  @IsNotEmpty()
  challenge: ChallengeDto;
}
