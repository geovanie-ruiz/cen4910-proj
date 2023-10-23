import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export type EventAction = EventChoiceDto | EventCheckDto;
export type EventType = 'choice' | 'check';

export class EventChoiceDto {
  @ApiProperty({ description: 'The ID of the choice that was selected.' })
  @IsNotEmpty()
  id: number;
}

export class EventCheckDto {
  @ApiProperty({ description: 'The ID of the choice that was selected.' })
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: 'Indicates if the check passed or failed.' })
  @IsNotEmpty()
  success: boolean;
}

export class EventDto {
  @ApiProperty({
    description: 'The sequence id of the view the event is tied to.',
  })
  @IsNotEmpty()
  sequence_id: number;

  @ApiProperty({
    description: 'The sequence id of the view the event is tied to.',
  })
  @IsNotEmpty()
  event_type: EventType;

  @ApiProperty({
    description:
      'The action associated with the event, either check or choice.',
  })
  @IsNotEmpty()
  action: EventAction;
}

export class SaveDto {
  @ApiProperty({ description: 'The user given name for the save file.' })
  @IsNotEmpty()
  filename: string;

  @ApiProperty({
    description: 'The foreign key for the campaign the save is made from.',
  })
  @IsNotEmpty()
  campaign_id: number;

  @ApiProperty({
    description: 'The foreign key for the character tied to the save file.',
  })
  @IsNotEmpty()
  character_id: number;

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
