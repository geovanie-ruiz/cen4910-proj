import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';
import { ViewDto } from './view.dto';

export class CampaignDto {
  @ApiProperty({ description: 'Primary identifier for the campaign.' })
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: 'Human readable identifier for the campaign.' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'List of views played out for the campaign.',
    type: [ViewDto],
  })
  @IsNotEmpty()
  @IsArray()
  views: ViewDto[];
}
