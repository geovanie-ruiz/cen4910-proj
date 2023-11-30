import { Planet, Species, Starship, Vehicle } from './character-bio.dto';
export declare class CharacterFullDto {
    name: string;
    class: 'Brute' | 'Wizard' | 'Gambler';
    strength: number;
    intelligence: number;
    luck: number;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: Planet;
    species: Species[];
    vehicles: Vehicle[];
    starships: Starship[];
}
