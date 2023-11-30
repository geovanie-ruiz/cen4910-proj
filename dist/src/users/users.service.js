"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt_1 = require("bcrypt");
const rxjs_1 = require("rxjs");
const typeorm_2 = require("typeorm");
const campaign_service_1 = require("../campaign/campaign.service");
const character_entity_1 = require("./entity/character.entity");
const save_entity_1 = require("./entity/save.entity");
const token_entity_1 = require("./entity/token.entity");
const user_entity_1 = require("./entity/user.entity");
const numFormatter = Intl.NumberFormat('en-US');
let UsersService = class UsersService {
    constructor(userRepo, userSaveRepo, characterRepo, tokenRepo, httpService, campaignService) {
        this.userRepo = userRepo;
        this.userSaveRepo = userSaveRepo;
        this.characterRepo = characterRepo;
        this.tokenRepo = tokenRepo;
        this.httpService = httpService;
        this.campaignService = campaignService;
    }
    toUserDto(data) {
        const { id, username, email } = data;
        const userDto = {
            id,
            username,
            email,
        };
        return userDto;
    }
    toSaveDto(data) {
        return {
            filename: data.filename,
            campaign_id: data.campaign_id,
            character_id: data.character_id,
            last_sequence_id: data.last_sequence_id,
        };
    }
    toCharacterDto(data) {
        return {
            name: data.name,
            class: data.class,
            strength: data.strength,
            intelligence: data.intelligence,
            luck: data.luck,
        };
    }
    toPlanetDto(planetData) {
        if (!planetData)
            return;
        return {
            name: planetData.name,
            diameter: `${numFormatter.format(planetData.diameter)} km`,
            hours_in_a_day: planetData.rotation_period,
            days_in_a_year: planetData.orbital_period,
            gravity_in_Gs: `${planetData.gravity} G(s)`,
            population: numFormatter.format(planetData.population),
            climate: planetData.climate,
            terrain: planetData.terrain,
        };
    }
    toSpeciesDto(speciesData) {
        if (!speciesData)
            return [];
        return speciesData.map((species) => {
            return {
                name: species.name,
                language: species.language,
                origin_world: this.toPlanetDto(species.homeworld_resolved),
                classification: species.classification,
                designation: species.designation,
            };
        });
    }
    toVehiclesDto(vehicleData) {
        if (!vehicleData)
            return [];
        return vehicleData.map((vehicle) => {
            return {
                name: vehicle.name,
                make: vehicle.manufacturer,
                model: vehicle.model,
                class: vehicle.vehicle_class,
                top_speed: `${vehicle.max_atmosphering_speed} km/h`,
            };
        });
    }
    toStarshipsDto(starshipData) {
        if (!starshipData)
            return [];
        return starshipData.map((starship) => {
            return {
                name: starship.name,
                make: starship.manufacturer,
                model: starship.model,
                class: starship.starship_class,
                hyperdrive_rating: starship.hyperdrive_rating,
            };
        });
    }
    toCharacterBioDto(data) {
        const characterBioDto = {
            name: data.name,
            class: this.getAClass(),
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color,
            birth_year: data.birth_year,
            gender: data.gender,
            homeworld: this.toPlanetDto(data.homeworld_resolved),
            species: this.toSpeciesDto(data.species_resolved),
            vehicles: this.toVehiclesDto(data.vehicles_resolved),
            starships: this.toStarshipsDto(data.starships_resolved),
            bioUrl: data.url,
        };
        return characterBioDto;
    }
    getAClass() {
        const classes = ['Brute', 'Wizard', 'Gambler'];
        const random_index = Math.floor(Math.random() * 3);
        return classes[random_index];
    }
    getRandomUniqueCharacterIds() {
        const CHARACTER_ID_MAX = 82;
        const swapi_ids = new Set();
        while (swapi_ids.size !== 3) {
            swapi_ids.add(Math.floor(Math.random() * CHARACTER_ID_MAX) + 1);
        }
        return Array.from(swapi_ids.values());
    }
    getStatsByClass(characterClass) {
        if (characterClass === 'Brute') {
            return {
                strength: 10,
                intelligence: 2,
                luck: 6,
            };
        }
        if (characterClass === 'Wizard') {
            return {
                strength: 2,
                intelligence: 10,
                luck: 6,
            };
        }
        if (characterClass === 'Gambler') {
            return {
                strength: 4,
                intelligence: 4,
                luck: 10,
            };
        }
    }
    async comparePasswords(password, hash) {
        return await (0, bcrypt_1.compare)(password, hash);
    }
    async createRefreshToken(user, token) {
        await this.tokenRepo.delete({
            username: user,
        });
        const refreshToken = this.tokenRepo.create({
            username: user,
            token,
        });
        return await this.tokenRepo.save(refreshToken);
    }
    async getRefreshToken(token) {
        const tokenData = await this.tokenRepo.findOne({ where: { token } });
        if (!tokenData) {
            throw new common_1.HttpException('Access token not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return tokenData;
    }
    async getUserId(username) {
        const user = await this.userRepo.findOne({ where: { username } });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return user;
    }
    async findByLogin({ username, password }) {
        const user = await this.userRepo.findOne({ where: { username } });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        }
        const areEqual = await this.comparePasswords(password, user.password);
        if (!areEqual) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
        return this.toUserDto(user);
    }
    async create(userDto) {
        const { username, password, email } = userDto;
        const userInDb = await this.userRepo.findOne({ where: { username } });
        if (userInDb) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = this.userRepo.create({
            username,
            password,
            email,
        });
        const savedUser = await this.userRepo.save(user);
        return this.toUserDto(savedUser);
    }
    async getSaveFile(user, saveId) {
        const saveData = await this.userSaveRepo.findOne({
            where: { id: saveId, user: { username: user } },
        });
        if (!saveData) {
            throw new common_1.HttpException('Save file not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.toSaveDto(saveData);
    }
    async getSaveFiles(user) {
        const saveData = await this.userSaveRepo.find({
            where: { user: { username: user } },
        });
        if (saveData.length <= 0) {
            throw new common_1.HttpException('User has no save files.', common_1.HttpStatus.BAD_REQUEST);
        }
        const saveFiles = [];
        for (const saveFile of saveData) {
            const campaign = await this.campaignService.getCampaignById(saveFile.campaign_id);
            const character = await this.characterRepo.findOne({
                where: { id: saveFile.character_id },
            });
            saveFiles.push({
                id: saveFile.id,
                filename: saveFile.filename,
                campaign_name: campaign.name,
                character_name: character.name,
                last_played: saveFile.updatedAt,
            });
        }
        return saveFiles;
    }
    async createSaveFile(username, saveDto) {
        const user = await this.userRepo.findOne({ where: { username } });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        }
        const save = await this.userSaveRepo.findOne({
            where: { filename: saveDto.filename, user: { username: user.username } },
        });
        if (save) {
            throw new common_1.HttpException('Save file name must be unique.', common_1.HttpStatus.BAD_REQUEST);
        }
        const userSave = this.userSaveRepo.create({
            filename: saveDto.filename,
            campaign_id: saveDto.campaign_id,
            character_id: saveDto.character_id,
            last_sequence_id: saveDto.last_sequence_id,
            user: user,
        });
        await this.userSaveRepo.save(userSave);
    }
    async updateSaveFile(user, saveId, last_sequence_id) {
        const saveData = await this.userSaveRepo.findOne({
            where: { id: saveId, user: { username: user } },
        });
        if (!saveData) {
            throw new common_1.HttpException('Save file not found', common_1.HttpStatus.BAD_REQUEST);
        }
        await this.userSaveRepo.update(saveId, {
            last_sequence_id: last_sequence_id,
        });
    }
    async getCharacter(id) {
        const characterData = await this.characterRepo.findOne({
            where: { id: id },
        });
        if (!characterData) {
            throw new common_1.HttpException('Character not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.toCharacterDto(characterData);
    }
    async getSwapiData(url) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url).pipe((0, rxjs_1.catchError)((error) => {
            console.log(error);
            throw new common_1.HttpException(`Swapi Error: ${error.response.data}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        })));
        return data;
    }
    async normalizeToCharacterBioDto(characters) {
        for (let i = 0; i < characters.length; i++) {
            const character = characters[i];
            character.homeworld_resolved = await this.getSwapiData(character.homeworld);
            character.species_resolved = await Promise.all(character.species.map((species) => this.getSwapiData(species)));
            for (let j = 0; j < character.species_resolved.length; j++) {
                const homeworld = character.species_resolved[j].homeworld;
                character.species_resolved[j].homeworld_resolved = await this.getSwapiData(homeworld);
            }
            character.vehicles_resolved = await Promise.all(character.vehicles.map((vehicle) => this.getSwapiData(vehicle)));
            character.starships_resolved = await Promise.all(character.starships.map((starship) => this.getSwapiData(starship)));
        }
        return characters.map((character) => this.toCharacterBioDto(character));
    }
    async getCharacterSet() {
        const swapi_promises = this.getRandomUniqueCharacterIds().map((id) => this.getSwapiData(`https://swapi.dev/api/people/${id}`));
        const swapi_data = await Promise.all(swapi_promises);
        return await this.normalizeToCharacterBioDto(swapi_data);
    }
    async toCharacterFullDto(data) {
        const character_data = await this.getSwapiData(data.bioUrl);
        character_data.homeworld_resolved = await this.getSwapiData(character_data.homeworld);
        character_data.species_resolved = await Promise.all(character_data.species.map((species) => this.getSwapiData(species)));
        for (let i = 0; i < character_data.species_resolved.length; i++) {
            const homeworld = character_data.species_resolved[i].homeworld;
            character_data.species_resolved[i].homeworld_resolved = await this.getSwapiData(homeworld);
        }
        character_data.vehicles_resolved = await Promise.all(character_data.vehicles.map((vehicle) => this.getSwapiData(vehicle)));
        character_data.starships_resolved = await Promise.all(character_data.starships.map((starship) => this.getSwapiData(starship)));
        const character_class = data.class;
        const characterFull = {
            name: data.name,
            class: character_class,
            strength: data.strength,
            intelligence: data.intelligence,
            luck: data.luck,
            height: character_data.height,
            mass: character_data.mass,
            hair_color: character_data.hair_color,
            skin_color: character_data.skin_color,
            eye_color: character_data.eye_color,
            birth_year: character_data.birth_year,
            gender: character_data.gender,
            homeworld: this.toPlanetDto(character_data.homeworld_resolved),
            species: this.toSpeciesDto(character_data.species_resolved),
            vehicles: this.toVehiclesDto(character_data.vehicles_resolved),
            starships: this.toStarshipsDto(character_data.starships_resolved),
        };
        return characterFull;
    }
    async getCharacterFull(characterId) {
        const characterData = await this.characterRepo.findOne({
            where: { id: characterId },
        });
        if (!characterData) {
            throw new common_1.HttpException('Character not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.toCharacterFullDto(characterData);
    }
    async createCharacter(characterCreation) {
        const { strength, intelligence, luck } = this.getStatsByClass(characterCreation.class);
        const character = this.characterRepo.create({
            name: characterCreation.name,
            class: characterCreation.class,
            strength: strength,
            intelligence: intelligence,
            luck: luck,
            bioUrl: characterCreation.bioUrl,
        });
        await this.characterRepo.save(character);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(save_entity_1.UserSaveEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(character_entity_1.CharacterEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(token_entity_1.RefreshToken)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        axios_1.HttpService,
        campaign_service_1.CampaignService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map