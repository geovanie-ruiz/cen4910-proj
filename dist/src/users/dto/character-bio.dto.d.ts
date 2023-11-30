export declare class Planet {
    name: string;
    diameter: string;
    hours_in_a_day: string;
    days_in_a_year: string;
    gravity_in_Gs: string;
    population: string;
    climate: string;
    terrain: string;
}
export declare class Species {
    name: string;
    language: string;
    origin_world: Planet;
    classification: string;
    designation: string;
}
export declare class Vehicle {
    name: string;
    make: string;
    model: string;
    class: string;
    top_speed: string;
}
export declare class Starship {
    name: string;
    make: string;
    model: string;
    class: string;
    hyperdrive_rating: string;
}
export declare class CharacterBioDto {
    name: string;
    class: 'Brute' | 'Wizard' | 'Gambler';
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
    bioUrl: string;
}
