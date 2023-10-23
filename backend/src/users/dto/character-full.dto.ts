import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Planet, Species, Starship, Vehicle } from './character-bio.dto';

export class CharacterFullDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  class: 'Brute' | 'Wizard' | 'Gambler';

  @ApiProperty()
  @IsNotEmpty()
  strength: number;

  @ApiProperty()
  @IsNotEmpty()
  intelligence: number;

  @ApiProperty()
  @IsNotEmpty()
  luck: number;

  @ApiProperty()
  @IsNotEmpty()
  height: string;

  @ApiProperty()
  @IsNotEmpty()
  mass: string;

  @ApiProperty()
  @IsNotEmpty()
  hair_color: string;

  @ApiProperty()
  @IsNotEmpty()
  skin_color: string;

  @ApiProperty()
  @IsNotEmpty()
  eye_color: string;

  @ApiProperty()
  @IsNotEmpty()
  birth_year: string;

  @ApiProperty()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsNotEmpty()
  homeworld: Planet;

  @ApiProperty()
  @IsNotEmpty()
  species: Species[];

  @ApiProperty()
  @IsNotEmpty()
  vehicles: Vehicle[];

  @ApiProperty()
  @IsNotEmpty()
  starships: Starship[];
}
