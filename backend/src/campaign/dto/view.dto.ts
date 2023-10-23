import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { ContentType } from '../enum/content.enum';
import { ContentExpositionDto } from './content-exposition.dto';
import { ContentChallengeDto } from './content-challenge.dto';

export class ViewDto {
  @ApiProperty({
    description: 'Identifies basic view order of view within a campaign.',
  })
  @IsNotEmpty()
  sequence_id: number;

  @ApiProperty({
    description:
      'The type of content contained in the view: exposition, challenge',
    enum: ContentType,
    enumName: 'ContentType',
  })
  @IsEnum(ContentType, { each: true })
  @IsNotEmpty()
  content_type: ContentType;

  @ApiProperty({
    description: 'The content contained in the view.',
    oneOf: [
      { $ref: getSchemaPath(ContentExpositionDto) },
      { $ref: getSchemaPath(ContentChallengeDto) },
    ],
  })
  @IsNotEmpty()
  content: ContentExpositionDto | ContentChallengeDto;
}
