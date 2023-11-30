"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.req = exports.swapi_starship = exports.swapi_vehicle = exports.swapi_species_homeworld = exports.swapi_species = exports.swapi_planet = exports.swapi_person = exports.createCharacterDto = exports.characterDto = exports.characterBiosDto = exports.characterBioDto = exports.characterFullDto = exports.starships = exports.vechicles = exports.species = exports.species_planet = exports.planet = exports.saveSnapshotDtos = exports.saveUpdateDto = exports.saveDto = exports.createUser = exports.loginUser = exports.userDto = exports.oneCampaign = exports.oneCharacter = exports.oneToken = exports.oneSave = exports.oneUser = exports.characterArray = exports.tokenArray = exports.saveArray = exports.userArray = void 0;
exports.userArray = [
    {
        id: 1,
        username: 'a_user1',
        password: 'a_password1',
        email: 'email_1@inbox.com',
    },
    {
        id: 2,
        username: 'a_user2',
        password: 'a_password2',
        email: 'email_2@inbox.com',
    },
];
exports.saveArray = [
    {
        id: 1,
        filename: 'save1',
        campaign_id: 1,
        character_id: 1,
        last_sequence_id: 1,
        updatedAt: new Date('1/1/2001'),
    },
    {
        id: 2,
        filename: 'save2',
        campaign_id: 1,
        character_id: 2,
        last_sequence_id: 1,
        updatedAt: new Date('1/1/2001'),
    },
];
exports.tokenArray = [
    {
        username: 'a_user1',
        token: 'a_token_string_1',
    },
    {
        username: 'a_user1',
        token: 'a_token_string_2',
    }
];
exports.characterArray = [
    {
        name: 'Character Name',
        class: 'Gambler',
        strength: 5,
        intelligence: 5,
        luck: 5,
        bioUrl: 'http://swapi.api/people/1',
    },
    {
        name: 'Another Character',
        class: 'Brute',
        strength: 5,
        intelligence: 5,
        luck: 5,
        bioUrl: 'http://swapi.api/people/2',
    }
];
exports.oneUser = {
    id: 1,
    username: 'a_user1',
    password: 'a_password1',
    email: 'email_1@inbox.com',
};
exports.oneSave = {
    filename: 'save2',
    campaign_id: 1,
    character_id: 2,
    last_sequence_id: 1,
    updatedAt: new Date('1/1/2001'),
};
exports.oneToken = {
    username: 'a_user1',
    token: 'a_token_string_1',
};
exports.oneCharacter = {
    name: 'A New Character',
    class: 'Gambler',
    strength: 4,
    intelligence: 4,
    luck: 10,
    bioUrl: 'swapi.com/people/9',
};
exports.oneCampaign = {
    name: 'All Along the Watchtower',
};
exports.userDto = {
    id: 1,
    username: 'a_user1',
    email: 'email_1@inbox.com',
};
exports.loginUser = {
    username: 'a_user1',
    password: 'a_password1',
};
exports.createUser = {
    username: 'a_user1',
    password: 'a_password1',
    email: 'email_1@inbox.com',
};
exports.saveDto = {
    filename: 'save2',
    campaign_id: 1,
    character_id: 2,
    last_sequence_id: 1,
};
exports.saveUpdateDto = {
    save_file_id: 1,
    last_sequence_id: 1,
};
exports.saveSnapshotDtos = [
    {
        id: 1,
        filename: 'save1',
        campaign_name: 'All Along the Watchtower',
        character_name: 'A New Character',
        last_played: new Date('1/1/2001'),
    },
    {
        id: 2,
        filename: 'save2',
        campaign_name: 'All Along the Watchtower',
        character_name: 'A New Character',
        last_played: new Date('1/1/2001'),
    }
];
exports.planet = {
    name: 'Tatooine',
    diameter: '10,465 km',
    hours_in_a_day: '23',
    days_in_a_year: '304',
    gravity_in_Gs: '1 standard G(s)',
    population: '200,000',
    climate: 'arid',
    terrain: 'desert',
};
exports.species_planet = {
    name: 'Coruscant',
    diameter: '12,240 km',
    hours_in_a_day: '24',
    days_in_a_year: '368',
    gravity_in_Gs: '1 standard G(s)',
    population: '1,000,000,000,000',
    climate: 'temperate',
    terrain: 'cityscape, mountains',
};
exports.species = [{
        name: 'Human',
        language: 'Galactic Basic',
        origin_world: exports.species_planet,
        classification: 'mammal',
        designation: 'sentient',
    },];
exports.vechicles = [{
        name: 'Snowspeeder',
        make: 'Incom corporation',
        model: 't-47 airspeeder',
        class: 'airspeeder',
        top_speed: '650 km/h',
    },];
exports.starships = [{
        name: 'X-wing',
        make: 'Incom Corporation',
        model: 'T-65 X-wing',
        class: 'Starfighter',
        hyperdrive_rating: '1.0',
    },];
exports.characterFullDto = {
    name: 'A New Character',
    class: 'Gambler',
    strength: 4,
    intelligence: 4,
    luck: 10,
    height: '172',
    mass: '77',
    hair_color: 'brown',
    skin_color: 'brown',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: exports.planet,
    species: exports.species,
    vehicles: exports.vechicles,
    starships: exports.starships,
};
exports.characterBioDto = {
    name: 'A New Character',
    class: 'Gambler',
    height: '172',
    mass: '77',
    hair_color: 'brown',
    skin_color: 'brown',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: exports.planet,
    species: exports.species,
    vehicles: exports.vechicles,
    starships: exports.starships,
    bioUrl: 'https://swapi.dev/api/people/1/',
};
exports.characterBiosDto = [
    exports.characterBioDto,
];
exports.characterDto = {
    name: 'A New Character',
    class: 'Gambler',
    strength: 4,
    intelligence: 4,
    luck: 10,
};
exports.createCharacterDto = {
    name: 'A New Character',
    class: 'Gambler',
    bioUrl: 'https://swapi.dev/api/people/1/',
};
exports.swapi_person = {
    "name": "A New Character",
    "height": "172",
    "mass": "77",
    "hair_color": "brown",
    "skin_color": "brown",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "species": [
        "https://swapi.dev/api/species/1/"
    ],
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/",
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/",
    ],
    "url": "https://swapi.dev/api/people/1/"
};
exports.swapi_planet = {
    "name": "Tatooine",
    "rotation_period": "23",
    "orbital_period": "304",
    "diameter": "10465",
    "climate": "arid",
    "gravity": "1 standard",
    "terrain": "desert",
    "surface_water": "1",
    "population": "200000",
    "url": "https://swapi.dev/api/planets/1/"
};
exports.swapi_species = {
    "name": "Human",
    "classification": "mammal",
    "designation": "sentient",
    "average_height": "180",
    "skin_colors": "caucasian, black, asian, hispanic",
    "hair_colors": "blonde, brown, black, red",
    "eye_colors": "brown, blue, green, hazel, grey, amber",
    "average_lifespan": "120",
    "homeworld": "https://swapi.dev/api/planets/9/",
    "language": "Galactic Basic",
    "url": "https://swapi.dev/api/species/1/"
};
exports.swapi_species_homeworld = {
    "name": "Coruscant",
    "rotation_period": "24",
    "orbital_period": "368",
    "diameter": "12240",
    "climate": "temperate",
    "gravity": "1 standard",
    "terrain": "cityscape, mountains",
    "surface_water": "unknown",
    "population": "1000000000000",
    "url": "https://swapi.dev/api/planets/9/"
};
exports.swapi_vehicle = {
    "name": "Snowspeeder",
    "model": "t-47 airspeeder",
    "manufacturer": "Incom corporation",
    "cost_in_credits": "unknown",
    "length": "4.5",
    "max_atmosphering_speed": "650",
    "crew": "2",
    "passengers": "0",
    "cargo_capacity": "10",
    "consumables": "none",
    "vehicle_class": "airspeeder",
    "url": "https://swapi.dev/api/vehicles/14/"
};
exports.swapi_starship = {
    "name": "X-wing",
    "model": "T-65 X-wing",
    "manufacturer": "Incom Corporation",
    "cost_in_credits": "149999",
    "length": "12.5",
    "max_atmosphering_speed": "1050",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "110",
    "consumables": "1 week",
    "hyperdrive_rating": "1.0",
    "MGLT": "100",
    "starship_class": "Starfighter",
    "url": "https://swapi.dev/api/starships/12/"
};
exports.req = {
    user: {
        username: 'username',
    },
};
//# sourceMappingURL=mock-data.mock.js.map