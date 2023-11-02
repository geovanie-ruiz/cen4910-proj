import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import * as Mocks from './tests/mock-data.mock';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            getSaveFiles: jest.fn().mockResolvedValue(Mocks.saveSnapshotDtos),
            createSaveFile: jest.fn().mockResolvedValue(Mocks.saveDto),
            updateSaveFile: jest.fn().mockResolvedValue(Mocks.saveUpdateDto),
            getSaveFile: jest.fn().mockResolvedValue(Mocks.saveDto),
            getCharacterSet: jest.fn().mockResolvedValue(Mocks.characterBiosDto),
            getCharacter: jest.fn().mockResolvedValue(Mocks.characterDto),
            getCharacterFull: jest.fn().mockResolvedValue(Mocks.characterFullDto),
            createCharacter: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should get a list of save files for a user', async () => {
    const getSaveFiles = jest.spyOn(service, 'getSaveFiles');
    const snapshots = await controller.getSaves(Mocks.req);
    expect(snapshots).toEqual(Mocks.saveSnapshotDtos);
    expect(getSaveFiles).toHaveBeenCalledWith(Mocks.req.user.username);
  });

  it('should create a save entry for a user', async () => {
    const createSave = jest.spyOn(service, 'createSaveFile');
    await controller.createSave(Mocks.req, Mocks.saveDto);
    expect(createSave).toHaveBeenCalledWith(
      Mocks.req.user.username,
      Mocks.saveDto,
    );
  });

  it('should update a save file', async () => {
    const updateSave = jest.spyOn(service, 'updateSaveFile');
    await controller.updateSave(Mocks.req, Mocks.saveUpdateDto);
    expect(updateSave).toHaveBeenCalledWith(
      Mocks.req.user.username,
      Mocks.saveUpdateDto.save_file_id,
      Mocks.saveUpdateDto.last_sequence_id,
    );
  });

  it('should retrieve the specific save file by id for a user', async () => {
    const getSaveFile = jest.spyOn(service, 'getSaveFile');
    const save = await controller.getSave(Mocks.req, 1);
    expect(save).toEqual(Mocks.saveDto);
    expect(getSaveFile).toHaveBeenCalledWith(Mocks.req.user.username, 1);
  });

  it('should retrieve a set of characters from SWAPI', async () => {
    const characters = await controller.getCharacters();
    expect(characters).toEqual(Mocks.characterBiosDto);
  });

  it('should retrieve a character by ID', async () => {
    const character = await controller.getCharacter(1);
    expect(character).toEqual(Mocks.characterDto);
  });

  it('should retrieve a character enriched with SWAPI data', async () => {
    const character = await controller.getCharacterFull(1);
    expect(character).toEqual(Mocks.characterFullDto);
  });

  it('should create a new character', async () => {
    const createCharacter = jest.spyOn(service, 'createCharacter');
    await controller.createCharacter(Mocks.createCharacterDto);
    expect(createCharacter).toHaveBeenCalledWith(Mocks.createCharacterDto);
  });
});
