import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SaveSnapshotDto } from './dto/save-snapshot.dto';
import { SaveDto } from './dto/save.dto';
import { CharacterDto } from './dto/character.dto';
import { SaveUpdateDto } from './dto/save-update.dto';
import { CharacterBioDto } from './dto/character-bio.dto';
import { CharacterFullDto } from './dto/character-full.dto';
import { CharacterCreationDto } from './dto/character-creation.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('save/list')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'The list of save files for a user.',
    type: SaveSnapshotDto,
    isArray: true,
  })
  async getSaves(@Request() req: any): Promise<SaveSnapshotDto[]> {
    const username: string = req.user.username;
    return await this.userService.getSaveFiles(username);
  }

  @Post('save/new')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'A new save entry for a user has been created.',
  })
  async createSave(@Request() req: any, @Body() saveDto: SaveDto) {
    const username: string = req.user.username;
    await this.userService.createSaveFile(username, saveDto);
  }

  @Get('save/:id')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'The specific save file by id for a user.',
    type: SaveDto,
  })
  async getSave(
    @Request() req: any,
    @Param('id') saveId: number,
  ): Promise<SaveDto> {
    const username: string = req.user.username;
    return await this.userService.getSaveFile(username, saveId);
  }

  @Put('save/:id')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'The save file has been updated.',
  })
  async updateSave(
    @Request() req: any,
    @Param('id') saveId: number,
    @Body() saveUpdateDto: SaveUpdateDto,
  ) {
    const username: string = req.user.username;
    await this.userService.updateSaveFile(username, saveId, saveUpdateDto);
  }

  @Get('character/list')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Subset of characters downloaded from the Star Wars API',
    type: CharacterBioDto,
    isArray: true,
  })
  async getCharacters(): Promise<CharacterBioDto[]> {
    return await this.userService.getCharacterSet();
  }

  @Get('character/:id')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Retrieve a character by ID',
    type: CharacterDto,
  })
  async getCharacter(@Param('id') characterId: number): Promise<CharacterDto> {
    return await this.userService.getCharacter(characterId);
  }

  @Get('character/bio/:id')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Character instance enriched with Star Wars API data',
    type: CharacterBioDto,
  })
  async getCharacterFull(
    @Param('id') characterId: number,
  ): Promise<CharacterFullDto> {
    return await this.userService.getCharacterFull(characterId);
  }

  @Post('character/new')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'A new character entry has been created.',
  })
  async createCharacter(@Body() characterCreationDto: CharacterCreationDto) {
    await this.userService.createCharacter(characterCreationDto);
  }
}
