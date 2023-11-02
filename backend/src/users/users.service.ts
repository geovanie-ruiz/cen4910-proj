import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosError } from 'axios';
import { compare } from 'bcrypt';
import { catchError, firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { CampaignService } from '../campaign/campaign.service';
import {
  CharacterBioDto,
  Planet,
  Species,
  Starship,
  Vehicle,
} from './dto/character-bio.dto';
import { CharacterCreationDto } from './dto/character-creation.dto';
import { CharacterFullDto } from './dto/character-full.dto';
import { CharacterDto, ClassName } from './dto/character.dto';
import { SaveSnapshotDto } from './dto/save-snapshot.dto';
import { SaveDto } from './dto/save.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { CreateUserDto } from './dto/user.create.dto';
import { UserDto } from './dto/user.dto';
import { CharacterEntity } from './entity/character.entity';
import { UserSaveEntity } from './entity/save.entity';
import { RefreshToken } from './entity/token.entity';
import { UserEntity } from './entity/user.entity';
import { ClassStats } from './interfaces/class.interface';

const numFormatter = Intl.NumberFormat('en-US');

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    @InjectRepository(UserSaveEntity)
    private readonly userSaveRepo: Repository<UserSaveEntity>,
    @InjectRepository(CharacterEntity)
    private readonly characterRepo: Repository<CharacterEntity>,
    @InjectRepository(RefreshToken)
    private readonly tokenRepo: Repository<RefreshToken>,
    private readonly httpService: HttpService,
    private readonly campaignService: CampaignService,
  ) { }

  toUserDto(data: UserEntity): UserDto {
    const { id, username, email } = data;
    const userDto: UserDto = {
      id,
      username,
      email,
    };
    return userDto;
  }

  toSaveDto(data: UserSaveEntity): SaveDto {
    return {
      filename: data.filename,
      campaign_id: data.campaign_id,
      character_id: data.character_id,
      last_sequence_id: data.last_sequence_id,
    };
  }

  toCharacterDto(data: CharacterEntity): CharacterDto {
    return {
      name: data.name,
      class: data.class as ClassName,
      strength: data.strength,
      intelligence: data.intelligence,
      luck: data.luck,
    };
  }

  toPlanetDto(planetData: any): Planet {
    if (!planetData) return;
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

  toSpeciesDto(speciesData: any[]): Species[] {
    if (!speciesData) return [];
    return speciesData.map((species: any): Species => {
      return {
        name: species.name,
        language: species.language,
        origin_world: this.toPlanetDto(species.homeworld_resolved),
        classification: species.classification,
        designation: species.designation,
      };
    });
  }

  toVehiclesDto(vehicleData: any[]): Vehicle[] {
    if (!vehicleData) return [];
    return vehicleData.map((vehicle: any): Vehicle => {
      return {
        name: vehicle.name,
        make: vehicle.manufacturer,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        top_speed: `${vehicle.max_atmosphering_speed} km/h`,
      };
    });
  }

  toStarshipsDto(starshipData: any[]): Starship[] {
    if (!starshipData) return [];
    return starshipData.map((starship: any): Starship => {
      return {
        name: starship.name,
        make: starship.manufacturer,
        model: starship.model,
        class: starship.starship_class,
        hyperdrive_rating: starship.hyperdrive_rating,
      };
    });
  }

  toCharacterBioDto(data: any): CharacterBioDto {
    const characterBioDto: CharacterBioDto = {
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

  getAClass(): ClassName {
    const classes: ClassName[] = ['Brute', 'Wizard', 'Gambler'];
    const random_index = Math.floor(Math.random() * 3);
    return classes[random_index];
  }

  getRandomUniqueCharacterIds(): number[] {
    const CHARACTER_ID_MAX = 82;
    const swapi_ids = new Set<number>();
    while (swapi_ids.size !== 3) {
      swapi_ids.add(Math.floor(Math.random() * CHARACTER_ID_MAX) + 1);
    }
    return Array.from(swapi_ids.values());
  }

  getStatsByClass(characterClass: ClassName): ClassStats {
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

  async comparePasswords(password: string, hash: string) {
    return await compare(password, hash);
  }

  async createRefreshToken(user: string, token: string) {
    await this.tokenRepo.delete({
      username: user,
    });

    const refreshToken: RefreshToken = this.tokenRepo.create({
      username: user,
      token,
    });
    return await this.tokenRepo.save(refreshToken);
  }

  async getRefreshToken(token: string): Promise<RefreshToken> {
    const tokenData = await this.tokenRepo.findOne({ where: { token } });

    if (!tokenData) {
      throw new HttpException('Access token not found', HttpStatus.BAD_REQUEST);
    }

    return tokenData;
  }

  async getUserId(username: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { username } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepo.findOne({ where: { username } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    const areEqual = await this.comparePasswords(password, user.password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return this.toUserDto(user);
  }

  async create(userDto: CreateUserDto): Promise<UserDto> {
    const { username, password, email } = userDto;

    const userInDb = await this.userRepo.findOne({ where: { username } });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: UserEntity = this.userRepo.create({
      username,
      password,
      email,
    });

    const savedUser = await this.userRepo.save(user);
    return this.toUserDto(savedUser);
  }

  async getSaveFile(user: string, saveId: number): Promise<SaveDto> {
    const saveData = await this.userSaveRepo.findOne({
      where: { id: saveId, user: { username: user } },
    });

    if (!saveData) {
      throw new HttpException('Save file not found', HttpStatus.BAD_REQUEST);
    }

    return this.toSaveDto(saveData);
  }

  async getSaveFiles(user: string): Promise<SaveSnapshotDto[]> {
    const saveData = await this.userSaveRepo.find({
      where: { user: { username: user } },
    });

    if (saveData.length <= 0) {
      throw new HttpException(
        'User has no save files.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const saveFiles: SaveSnapshotDto[] = [];
    for (const saveFile of saveData) {
      const campaign = await this.campaignService.getCampaignById(
        saveFile.campaign_id,
      );
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

  async createSaveFile(username: string, saveDto: SaveDto) {
    const user = await this.userRepo.findOne({ where: { username } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    const save = await this.userSaveRepo.findOne({
      where: { filename: saveDto.filename, user: { username: user.username } },
    });

    if (save) {
      throw new HttpException(
        'Save file name must be unique.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userSave: UserSaveEntity = this.userSaveRepo.create({
      filename: saveDto.filename,
      campaign_id: saveDto.campaign_id,
      character_id: saveDto.character_id,
      last_sequence_id: saveDto.last_sequence_id,
      user: user,
    });

    await this.userSaveRepo.save(userSave);
  }

  async updateSaveFile(user: string, saveId: number, last_sequence_id: number) {
    const saveData = await this.userSaveRepo.findOne({
      where: { id: saveId, user: { username: user } },
    });

    if (!saveData) {
      throw new HttpException('Save file not found', HttpStatus.BAD_REQUEST);
    }

    await this.userSaveRepo.update(saveId, {
      last_sequence_id: last_sequence_id,
    });
  }

  async getCharacter(id: number): Promise<CharacterDto> {
    const characterData = await this.characterRepo.findOne({
      where: { id: id },
    });

    if (!characterData) {
      throw new HttpException('Character not found', HttpStatus.BAD_REQUEST);
    }

    return this.toCharacterDto(characterData);
  }

  async getSwapiData(url: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(url).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw new HttpException(
            `Swapi Error: ${error.response.data}`,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }),
      ),
    );
    return data;
  }

  async normalizeToCharacterBioDto(
    characters: any[],
  ): Promise<CharacterBioDto[]> {
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];

      character.homeworld_resolved = await this.getSwapiData(
        character.homeworld,
      );

      character.species_resolved = await Promise.all(
        character.species.map((species: string) =>
          this.getSwapiData(species)
        ),
      );

      for (let j = 0; j < character.species_resolved.length; j++) {
        const homeworld = character.species_resolved[j].homeworld;
        character.species_resolved[j].homeworld_resolved = await this.getSwapiData(homeworld);
      }

      character.vehicles_resolved = await Promise.all(
        character.vehicles.map((vehicle: string) =>
          this.getSwapiData(vehicle)
        ),
      );

      character.starships_resolved = await Promise.all(
        character.starships.map((starship: string) =>
          this.getSwapiData(starship),
        ),
      );
    }

    return characters.map((character) => this.toCharacterBioDto(character));
  }

  async getCharacterSet(): Promise<CharacterBioDto[]> {
    const swapi_promises: Promise<any>[] =
      this.getRandomUniqueCharacterIds().map((id) =>
        this.getSwapiData(`https://swapi.dev/api/people/${id}`),
      );
    const swapi_data: any[] = await Promise.all(swapi_promises);
    return await this.normalizeToCharacterBioDto(swapi_data);
  }

  async toCharacterFullDto(data: CharacterEntity): Promise<CharacterFullDto> {
    const character_data = await this.getSwapiData(data.bioUrl);

    character_data.homeworld_resolved = await this.getSwapiData(
      character_data.homeworld,
    );

    character_data.species_resolved = await Promise.all(
      character_data.species.map((species: string) =>
        this.getSwapiData(species),
      ),
    );

    for (let i = 0; i < character_data.species_resolved.length; i++) {
      const homeworld = character_data.species_resolved[i].homeworld;
      character_data.species_resolved[i].homeworld_resolved = await this.getSwapiData(homeworld);
    }

    character_data.vehicles_resolved = await Promise.all(
      character_data.vehicles.map((vehicle: string) =>
        this.getSwapiData(vehicle),
      ),
    );

    character_data.starships_resolved = await Promise.all(
      character_data.starships.map((starship: string) =>
        this.getSwapiData(starship),
      ),
    );

    const character_class = data.class as ClassName;
    const characterFull: CharacterFullDto = {
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

  async getCharacterFull(characterId: number): Promise<CharacterFullDto> {
    const characterData = await this.characterRepo.findOne({
      where: { id: characterId },
    });

    if (!characterData) {
      throw new HttpException('Character not found', HttpStatus.BAD_REQUEST);
    }

    return this.toCharacterFullDto(characterData);
  }

  async createCharacter(characterCreation: CharacterCreationDto) {
    const { strength, intelligence, luck } = this.getStatsByClass(
      characterCreation.class,
    );

    const character: CharacterEntity = this.characterRepo.create({
      name: characterCreation.name,
      class: characterCreation.class,
      strength: strength,
      intelligence: intelligence,
      luck: luck,
      bioUrl: characterCreation.bioUrl,
    });

    await this.characterRepo.save(character);
  }
}
