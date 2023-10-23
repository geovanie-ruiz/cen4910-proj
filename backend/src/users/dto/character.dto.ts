import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export type ClassName = 'Brute' | 'Wizard' | 'Gambler';

export class CharacterDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  class: ClassName;

  @ApiProperty()
  @IsNotEmpty()
  strength: number;

  @ApiProperty()
  @IsNotEmpty()
  intelligence: number;

  @ApiProperty()
  @IsNotEmpty()
  luck: number;
}
