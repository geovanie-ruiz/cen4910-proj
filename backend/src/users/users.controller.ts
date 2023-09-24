import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { SaveDto } from './dto/save.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get(':id/saves')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'The list of save files for a user.',
    type: SaveDto,
    isArray: true,
  })
  async getSaveFiles(@Param('id') userId: number): Promise<SaveDto[]> {
    return await this.userService.getSaveFiles(userId);
  }
}
