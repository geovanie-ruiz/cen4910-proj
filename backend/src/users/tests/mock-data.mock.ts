import { CampaignEntity } from "src/campaign/entity/campaign.entity";
import { CharacterBioDto, Planet, Species, Starship, Vehicle } from "../dto/character-bio.dto";
import { CharacterFullDto } from "../dto/character-full.dto";
import { CharacterDto } from "../dto/character.dto";
import { SaveSnapshotDto } from "../dto/save-snapshot.dto";
import { SaveDto } from "../dto/save.dto";
import { LoginUserDto } from "../dto/user-login.dto";
import { CreateUserDto } from "../dto/user.create.dto";
import { UserDto } from "../dto/user.dto";
import { CharacterEntity } from "../entity/character.entity";
import { UserSaveEntity } from "../entity/save.entity";
import { RefreshToken } from "../entity/token.entity";
import { UserEntity } from "../entity/user.entity";

/*
	Mock Entity Tables
*/
export const userArray = [
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
] as UserEntity[];

export const saveArray = [
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
] as UserSaveEntity[];

export const tokenArray = [
	{
		username: 'a_user1',
		token: 'a_token_string_1',
	},
	{
		username: 'a_user1',
		token: 'a_token_string_2',
	}
] as RefreshToken[];

export const characterArray = [
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
] as CharacterEntity[];

/*
	Mock Entity Instance
*/
export const oneUser = {
	id: 1,
	username: 'a_user1',
	password: 'a_password1',
	email: 'email_1@inbox.com',
} as UserEntity;

export const oneSave = {
	filename: 'save2',
	campaign_id: 1,
	character_id: 2,
	last_sequence_id: 1,
	updatedAt: new Date('1/1/2001'),
} as UserSaveEntity;

export const oneToken = {
	username: 'a_user1',
	token: 'a_token_string_1',
} as RefreshToken;

export const oneCharacter = {
	name: 'A New Character',
	class: 'Gambler',
	strength: 4,
	intelligence: 4,
	luck: 10,
	bioUrl: 'swapi.com/people/9',
} as CharacterEntity;

export const oneCampaign = {
	name: 'All Along the Watchtower',
} as CampaignEntity;

/*
	Data Transfer Objects
*/
export const userDto = {
	id: 1,
	username: 'a_user1',
	email: 'email_1@inbox.com',
} as UserDto;

export const loginUser = {
	username: 'a_user1',
	password: 'a_password1',
} as LoginUserDto;

export const createUser = {
	username: 'a_user1',
	password: 'a_password1',
	email: 'email_1@inbox.com',
} as CreateUserDto;

export const saveDto = {
	filename: 'save2',
	campaign_id: 1,
	character_id: 2,
	last_sequence_id: 1,
} as SaveDto;

export const saveSnapshotDtos = [
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
] as SaveSnapshotDto[];

export const planet = {
	name: 'Tatooine',
	diameter: '10,465 km',
	hours_in_a_day: '23',
	days_in_a_year: '304',
	gravity_in_Gs: '1 standard G(s)',
	population: '200,000',
	climate: 'arid',
	terrain: 'desert',
} as Planet;

export const species_planet = {
	name: 'Coruscant',
	diameter: '12,240 km',
	hours_in_a_day: '24',
	days_in_a_year: '368',
	gravity_in_Gs: '1 standard G(s)',
	population: '1,000,000,000,000',
	climate: 'temperate',
	terrain: 'cityscape, mountains',
} as Planet;

export const species = [{
	name: 'Human',
	language: 'Galactic Basic',
	origin_world: species_planet,
	classification: 'mammal',
	designation: 'sentient',
},] as Species[];

export const vechicles = [{
	name: 'Snowspeeder',
	make: 'Incom corporation',
	model: 't-47 airspeeder',
	class: 'airspeeder',
	top_speed: '650 km/h',
},] as Vehicle[];

export const starships = [{
	name: 'X-wing',
	make: 'Incom Corporation',
	model: 'T-65 X-wing',
	class: 'Starfighter',
	hyperdrive_rating: '1.0',
},] as Starship[];

export const characterFullDto = {
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
	homeworld: planet,
	species: species,
	vehicles: vechicles,
	starships: starships,
} as CharacterFullDto;

export const characterBioDto = {
	name: 'A New Character',
	class: 'Gambler',
	height: '172',
	mass: '77',
	hair_color: 'brown',
	skin_color: 'brown',
	eye_color: 'brown',
	birth_year: '19BBY',
	gender: 'male',
	homeworld: planet,
	species: species,
	vehicles: vechicles,
	starships: starships,
	bioUrl: 'https://swapi.dev/api/people/1/',
} as CharacterBioDto;

export const characterDto = {
	name: 'A New Character',
	class: 'Gambler',
	strength: 4,
	intelligence: 4,
	luck: 10,
} as CharacterDto;

/*
	Mock SWAPI Responses
*/
export const swapi_person = {
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

export const swapi_planet = {
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

export const swapi_species = {
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

export const swapi_species_homeworld = {
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

export const swapi_vehicle = {
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

export const swapi_starship = {
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
