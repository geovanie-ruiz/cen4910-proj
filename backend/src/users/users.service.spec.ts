import { HttpModule, HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AxiosError, AxiosResponse } from 'axios';
import * as bcrypt from 'bcrypt';
import { of, throwError } from 'rxjs';
import { Repository } from 'typeorm';
import { CampaignService } from '../campaign/campaign.service';
import { CharacterBioDto } from './dto/character-bio.dto';
import { CharacterCreationDto } from './dto/character-creation.dto';
import { CharacterFullDto } from './dto/character-full.dto';
import { CharacterEntity } from './entity/character.entity';
import { UserSaveEntity } from './entity/save.entity';
import { RefreshToken } from './entity/token.entity';
import { UserEntity } from './entity/user.entity';
import * as Mocks from './tests/mock-data.mock';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpService: HttpService;
  let campaignService: CampaignService;
  let userEntityRepository: Repository<UserEntity>;
  let userSaveEntityRepository: Repository<UserSaveEntity>;
  let characterEntityRepository: Repository<CharacterEntity>;
  let refreshTokenRepository: Repository<RefreshToken>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        UsersService,
        {
          provide: CampaignService,
          useValue: {
            getCampaignById: jest.fn().mockResolvedValue(Mocks.oneCampaign),
          }
        },
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(Mocks.userArray),
            findOne: jest.fn().mockResolvedValue(Mocks.oneUser),
            create: jest.fn().mockReturnValue(Mocks.oneUser),
            save: jest.fn().mockResolvedValue(Mocks.oneUser),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(UserSaveEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(Mocks.saveArray),
            findOne: jest.fn().mockResolvedValue(Mocks.oneSave),
            create: jest.fn().mockReturnValue(Mocks.oneSave),
            save: jest.fn().mockResolvedValue(Mocks.oneSave),
            update: jest.fn(),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(CharacterEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(Mocks.characterArray),
            findOne: jest.fn().mockResolvedValue(Mocks.oneCharacter),
            create: jest.fn().mockReturnValue(Mocks.oneCharacter),
            save: jest.fn().mockResolvedValue(Mocks.oneCharacter),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(RefreshToken),
          useValue: {
            find: jest.fn().mockResolvedValue(Mocks.tokenArray),
            findOne: jest.fn().mockResolvedValue(Mocks.oneToken),
            create: jest.fn().mockReturnValue(Mocks.oneToken),
            save: jest.fn().mockResolvedValue(Mocks.oneToken),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    httpService = module.get<HttpService>(HttpService);
    campaignService = module.get<CampaignService>(CampaignService);
    userEntityRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
    userSaveEntityRepository = module.get<Repository<UserSaveEntity>>(
      getRepositoryToken(UserSaveEntity),
    );
    characterEntityRepository = module.get<Repository<CharacterEntity>>(
      getRepositoryToken(CharacterEntity),
    );
    refreshTokenRepository = module.get<Repository<RefreshToken>>(
      getRepositoryToken(RefreshToken),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(httpService).toBeDefined();
    expect(campaignService).toBeDefined();

    expect(userEntityRepository).toBeDefined();
    expect(userSaveEntityRepository).toBeDefined();
    expect(characterEntityRepository).toBeDefined();
    expect(refreshTokenRepository).toBeDefined();
  });

  it('converts user entity to user dto', async () => {
    const userEntity = await userEntityRepository.findOne({ where: { username: 'a_user1' } });
    const userDto = service.toUserDto(userEntity);
    expect(userDto).toEqual(Mocks.userDto);
  });

  it('converts save entity to save dto', async () => {
    const save = service.toSaveDto(Mocks.oneSave);
    expect(save).toEqual(Mocks.saveDto);
  });

  it('converts character entity to character dto', async () => {
    const character = service.toCharacterDto(Mocks.oneCharacter);
    expect(character).toEqual(Mocks.characterDto);
  });

  it('converts swapi planet to dto', async () => {
    const planet = service.toPlanetDto(Mocks.swapi_planet);
    expect(planet).toEqual(Mocks.planet);
    expect(service.toPlanetDto(null)).toEqual(undefined);
  });

  it('converts swapi species to dto', async () => {
    jest.spyOn(service, 'toPlanetDto').mockReturnValue(Mocks.species_planet);
    const species = service.toSpeciesDto([Mocks.swapi_species,]);
    expect(species).toEqual(Mocks.species);
    expect(service.toSpeciesDto(null)).toEqual([]);
  });

  it('converts swapi vehicles to dto', async () => {
    const vehicles = service.toVehiclesDto([Mocks.swapi_vehicle,]);
    expect(vehicles).toEqual(Mocks.vechicles);
    expect(service.toVehiclesDto(null)).toEqual([]);
  });

  it('converts swapi spaceships to dto', async () => {
    const spaceships = service.toStarshipsDto([Mocks.swapi_starship,]);
    expect(spaceships).toEqual(Mocks.starships);
    expect(service.toStarshipsDto(null)).toEqual([]);
  });

  it('converts swapi person to dto', async () => {
    jest.spyOn(service, 'getAClass').mockReturnValue('Gambler');
    jest.spyOn(service, 'toPlanetDto').mockReturnValue(Mocks.planet);
    jest.spyOn(service, 'toSpeciesDto').mockReturnValue(Mocks.species);
    jest.spyOn(service, 'toVehiclesDto').mockReturnValue(Mocks.vechicles);
    jest.spyOn(service, 'toStarshipsDto').mockReturnValue(Mocks.starships);
    const character = service.toCharacterBioDto(Mocks.swapi_person);
    expect(character).toEqual(Mocks.characterBioDto);
  });

  it('gets a random class', async () => {
    jest.spyOn(global.Math, 'random')
      .mockReturnValueOnce(0)     // 0
      .mockReturnValueOnce(0.5)   // 1
      .mockReturnValueOnce(0.99)     // 2

    expect(service.getAClass()).toEqual('Brute');
    expect(service.getAClass()).toEqual('Wizard');
    expect(service.getAClass()).toEqual('Gambler');
  });

  it('gets a set of three unique IDs', async () => {
    jest.spyOn(global.Math, 'random')
      .mockReturnValueOnce(0)     // 1
      .mockReturnValueOnce(0.5)   // 42
      .mockReturnValueOnce(0.99)     // 82

    const ids = service.getRandomUniqueCharacterIds();
    expect(ids).toEqual([1, 42, 82]);
  });

  it('makes stat builds by class', async () => {
    expect(service.getStatsByClass('Brute')).toEqual({
      strength: 10,
      intelligence: 2,
      luck: 6,
    });

    expect(service.getStatsByClass('Wizard')).toEqual({
      strength: 2,
      intelligence: 10,
      luck: 6,
    });

    expect(service.getStatsByClass('Gambler')).toEqual({
      strength: 4,
      intelligence: 4,
      luck: 10,
    });
  });

  it('compares passwords', async () => {
    const compare = jest.spyOn(bcrypt, 'compare');
    let result = await service.comparePasswords('password', 'hash');
    expect(compare).toHaveBeenCalled();
    expect(result).toBeFalsy();

    jest.spyOn(bcrypt, 'compare')
      .mockImplementationOnce(() => Promise.resolve(true))

    result = await service.comparePasswords('password', 'hash');
    expect(compare).toHaveBeenCalledTimes(2);
    expect(result).toBeTruthy();
  });

  it('creates refresh tokens', async () => {
    const tokenRepoDelete = jest.spyOn(refreshTokenRepository, 'delete');
    const token = await service.createRefreshToken('a_user1', 'token');

    expect(tokenRepoDelete).toHaveBeenCalled();
    expect(token).toEqual(Mocks.oneToken);
  });

  it('retrieves refresh tokens', async () => {
    const token = await service.getRefreshToken('token');
    expect(token).toEqual(Mocks.oneToken);
  });

  it('fails to retrieve refresh tokens', async () => {
    jest.spyOn(refreshTokenRepository, 'findOne').mockResolvedValue(null);

    try {
      await service.getRefreshToken('token');
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Access token not found');
    }
  });

  it('retrieves a user', async () => {
    const user = await service.getUserId('username');
    expect(user).toEqual(Mocks.oneUser);
  });

  it('fails to retrieve a user', async () => {
    jest.spyOn(userEntityRepository, 'findOne').mockResolvedValue(null);

    try {
      await service.getUserId('username');
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('User not found');
    }
  });

  it('retrieves a user by login', async () => {
    jest.spyOn(service, 'comparePasswords')
      .mockImplementation(async (pw, hash) => pw === hash);
    const foundUser = await service.findByLogin(Mocks.loginUser);
    expect(foundUser).toEqual(Mocks.userDto);
  });

  it('fails to retrieve a user by login', async () => {
    jest.spyOn(userEntityRepository, 'findOne').mockResolvedValueOnce(null);
    jest.spyOn(service, 'comparePasswords').mockResolvedValue(false);

    try {
      await service.findByLogin(Mocks.loginUser);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('User not found');
    }

    try {
      await service.findByLogin(Mocks.loginUser);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Invalid credentials');
    }
  });

  it('creates new users', async () => {
    jest.spyOn(userEntityRepository, 'findOne').mockResolvedValue(null);
    const user = await service.create(Mocks.createUser);
    expect(user).toEqual(Mocks.userDto);
  });

  it('fails to create a user', async () => {
    try {
      await service.create(Mocks.createUser);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('User already exists');
    }
  });

  it('retrieves a save file', async () => {
    const save = await service.getSaveFile('user', 1);
    expect(save).toEqual(Mocks.saveDto);
  });

  it('fails to retrieve a save file', async () => {
    jest.spyOn(userSaveEntityRepository, 'findOne').mockResolvedValue(null);

    try {
      await service.getSaveFile('user', 1);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Save file not found');
    }
  });

  it('retrieves save file snapshots', async () => {
    const saves = await service.getSaveFiles('user');
    expect(saves).toEqual(Mocks.saveSnapshotDtos);
  });

  it('fails to retrieve save file snapshots', async () => {
    jest.spyOn(userSaveEntityRepository, 'find').mockResolvedValue([]);
    try {
      await service.getSaveFiles('user');
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('User has no save files.');
    }
  });

  it('creates a save file', async () => {
    const create = jest.spyOn(userSaveEntityRepository, 'create');
    const save = jest.spyOn(userSaveEntityRepository, 'save');

    jest.spyOn(userSaveEntityRepository, 'findOne').mockResolvedValue(null);

    await service.createSaveFile('username', Mocks.saveDto);

    expect(create).toHaveBeenCalled();
    expect(create).toHaveBeenCalledWith({
      filename: Mocks.saveDto.filename,
      campaign_id: Mocks.saveDto.campaign_id,
      character_id: Mocks.saveDto.character_id,
      last_sequence_id: Mocks.saveDto.last_sequence_id,
      user: Mocks.oneUser,
    });
    expect(create).toReturnWith(Mocks.oneSave);

    expect(save).toHaveBeenCalled();
    expect(save).toHaveBeenCalledWith(Mocks.oneSave);
  });

  it('fails to create a save file', async () => {
    jest.spyOn(userEntityRepository, 'findOne').mockResolvedValueOnce(null);

    try {
      await service.createSaveFile('username', Mocks.saveDto);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('User not found');
    }

    try {
      await service.createSaveFile('username', Mocks.saveDto);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Save file name must be unique.');
    }
  });

  it('updates a save file', async () => {
    const update = jest.spyOn(userSaveEntityRepository, 'update');
    await service.updateSaveFile('username', 1, 1);
    expect(update).toHaveBeenCalled();
    expect(update).toHaveBeenCalledWith(1, { last_sequence_id: 1 });
  });

  it('fails to update a save file', async () => {
    jest.spyOn(userSaveEntityRepository, 'findOne').mockResolvedValue(null);

    try {
      await service.updateSaveFile('username', 1, 1);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Save file not found');
    }
  });

  it('gets a character by Id', async () => {
    const character = await service.getCharacter(1);
    expect(character).toEqual(Mocks.characterDto);
  });

  it('fails to get a character by Id', async () => {
    jest.spyOn(characterEntityRepository, 'findOne').mockResolvedValue(null);

    try {
      await service.getCharacter(1);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Character not found');
    }
  });

  it('gets Star Wars API data', async () => {
    const response: AxiosResponse<any> = {
      data: Mocks.swapi_person,
      headers: {},
      status: 200,
      statusText: 'OK',
      config: undefined
    };

    const error: AxiosResponse<any> = {
      data: { error: 'Mock error' },
      headers: {},
      status: 500,
      statusText: '',
      config: undefined
    };

    jest.spyOn(httpService, 'get')
      .mockImplementationOnce(() => of(response))
      .mockImplementationOnce(() => of(error))

    let a_person = await service.getSwapiData('');
    expect(a_person).toEqual(Mocks.swapi_person);

    try {
      await service.getSwapiData('');
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR);
      expect(error.message).toEqual('Swapi Error: Mock error');
    }
  });

  it('fails to get Star Wars API data', async () => {
    const axiosError: AxiosError<any> = {
      isAxiosError: true,
      name: 'Mock Error',
      message: 'Mock Error',
      toJSON() {
        return {};
      },
      response: {
        status: 500,
        statusText: '',
        config: undefined,
        headers: undefined,
        data: 'Mock Error',
      },
    };

    jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => axiosError));
    const log = jest.spyOn(console, 'log').mockImplementation(() => { });

    try {
      await service.getSwapiData('');
    } catch (error) {
      expect(log).toHaveBeenCalled();
      expect(error).toBeInstanceOf(HttpException);
      expect(error.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR);
      expect(error.message).toEqual('Swapi Error: Mock Error');
    }
  });

  it('normalizes characters to bio dtos', async () => {
    jest.spyOn(service, 'getSwapiData')
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_planet))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_species))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_species_homeworld))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_vehicle))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_starship))
    jest.spyOn(service, 'getAClass').mockReturnValue('Gambler');

    const normalBios = await service.normalizeToCharacterBioDto([Mocks.swapi_person,]);

    expect(normalBios).toEqual([Mocks.characterBioDto,]);
  });

  it('gets a set of starting characters', async () => {
    jest.spyOn(service, 'getRandomUniqueCharacterIds').mockReturnValue([1, 2, 3]);
    jest.spyOn(service, 'getSwapiData')
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_person))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_person))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_person))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_planet))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_species))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_species_homeworld))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_vehicle))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_starship))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_planet))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_species))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_species_homeworld))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_vehicle))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_starship))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_planet))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_species))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_species_homeworld))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_vehicle))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_starship));
    jest.spyOn(service, 'getAClass').mockReturnValue('Gambler');

    const bios: CharacterBioDto[] = await service.getCharacterSet();

    expect(bios).toEqual([Mocks.characterBioDto, Mocks.characterBioDto, Mocks.characterBioDto]);
  });

  it('converts character entity to full character dto', async () => {
    // arrange
    jest.spyOn(service, 'getSwapiData')
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_person))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_planet))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_species))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_species_homeworld))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_vehicle))
      .mockImplementationOnce(() => Promise.resolve(Mocks.swapi_starship));

    // act
    const characterEntity = await characterEntityRepository.findOne({});
    const characterFull: CharacterFullDto = await service.toCharacterFullDto(characterEntity);

    // assert
    expect(characterFull).toEqual(Mocks.characterFullDto);
  });

  it('retrieves a full character sheet', async () => {
    // arrange
    jest.spyOn(service, 'toCharacterFullDto').mockResolvedValue(Mocks.characterFullDto);

    // act
    const characterFull: CharacterFullDto = await service.getCharacterFull(1);

    // assert
    expect(characterFull).toEqual(Mocks.characterFullDto);
  });

  it('fails to retrieve a full character sheet', async () => {
    jest.spyOn(characterEntityRepository, 'findOne').mockResolvedValue(null);

    try {
      await service.getCharacterFull(1);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Character not found');
    }
  });

  it('creates a character', async () => {
    const characterCreationDto: CharacterCreationDto = {
      name: 'A New Character',
      class: 'Gambler',
      bioUrl: 'swapi.com/people/9',
    };

    jest.spyOn(characterEntityRepository, 'save').mockResolvedValue(Mocks.oneCharacter);

    await service.createCharacter(characterCreationDto);

    expect(characterEntityRepository.save).toBeCalled();
    expect(characterEntityRepository.save).toBeCalledWith(Mocks.oneCharacter);
  });
});
