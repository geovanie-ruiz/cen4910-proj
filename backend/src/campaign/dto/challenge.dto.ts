import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { ChallengeType } from '../enum/challenge.enum';
import { ActionCheckDto } from './action-check.dto';
import { ActionChoiceDto } from './action-choice.dto';

export type Action = ActionCheckDto | ActionChoiceDto;

export class ChallengeDto {
  @ApiProperty({ description: 'The text for the challenge content.' })
  @IsNotEmpty()
  text: string;

  @ApiProperty({
    description: 'The type of challenge: choice, check',
    enum: ChallengeType,
    enumName: 'ChallengeType',
  })
  @IsEnum(ChallengeType, { each: true })
  @IsNotEmpty()
  type: ChallengeType;

  @ApiProperty({
    description: 'The actions contained in the challenge.',
    type: 'array',
    items: {
      oneOf: [
        { $ref: getSchemaPath(ActionCheckDto) },
        { $ref: getSchemaPath(ActionChoiceDto) },
      ],
    },
  })
  @IsNotEmpty()
  actions: Action[];
}
