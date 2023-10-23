import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Planet {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  diameter: string;

  @ApiProperty()
  @IsNotEmpty()
  hours_in_a_day: number;

  @ApiProperty()
  @IsNotEmpty()
  days_in_a_year: string;

  @ApiProperty()
  @IsNotEmpty()
  gravity_in_Gs: string;

  @ApiProperty()
  @IsNotEmpty()
  population: string;

  @ApiProperty()
  @IsNotEmpty()
  climate: string;

  @ApiProperty()
  @IsNotEmpty()
  terrain: string;
}

export class Species {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  language: string;

  @ApiProperty()
  @IsNotEmpty()
  origin_world: Planet;

  @ApiProperty()
  @IsNotEmpty()
  classification: string;

  @ApiProperty()
  @IsNotEmpty()
  designation: string;
}

export class Vehicle {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  make: string;

  @ApiProperty()
  @IsNotEmpty()
  model: string;

  @ApiProperty()
  @IsNotEmpty()
  class: string;

  @ApiProperty()
  @IsNotEmpty()
  top_speed: string;
}

export class Starship {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  make: string;

  @ApiProperty()
  @IsNotEmpty()
  model: string;

  @ApiProperty()
  @IsNotEmpty()
  class: string;

  @ApiProperty()
  @IsNotEmpty()
  hyperdrive_rating: string;
}

export class CharacterBioDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  class: 'Brute' | 'Wizard' | 'Gambler';

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

  @ApiProperty()
  @IsNotEmpty()
  bioUrl: string;
}
