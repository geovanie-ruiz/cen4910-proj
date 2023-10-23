import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CharacterCreationDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  class: 'Brute' | 'Wizard' | 'Gambler';

  @ApiProperty()
  @IsNotEmpty()
  bioUrl: string;
}
