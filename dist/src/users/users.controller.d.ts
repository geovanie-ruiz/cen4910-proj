import { UsersService } from './users.service';
import { SaveSnapshotDto } from './dto/save-snapshot.dto';
import { SaveDto } from './dto/save.dto';
import { CharacterDto } from './dto/character.dto';
import { SaveUpdateDto } from './dto/save-update.dto';
import { CharacterBioDto } from './dto/character-bio.dto';
import { CharacterFullDto } from './dto/character-full.dto';
import { CharacterCreationDto } from './dto/character-creation.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getSaves(req: any): Promise<SaveSnapshotDto[]>;
    createSave(req: any, saveDto: SaveDto): Promise<void>;
    updateSave(req: any, saveUpdateDto: SaveUpdateDto): Promise<void>;
    getSave(req: any, saveId: number): Promise<SaveDto>;
    getCharacters(): Promise<CharacterBioDto[]>;
    getCharacter(characterId: number): Promise<CharacterDto>;
    getCharacterFull(characterId: number): Promise<CharacterFullDto>;
    createCharacter(characterCreationDto: CharacterCreationDto): Promise<void>;
}
