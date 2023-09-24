import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { SaveDto } from './dto/save.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get(':id/saves')
  async getSaveFiles(@Param('id') userId: number): Promise<SaveDto[]> {
    return await this.userService.getSaveFiles(userId);
  }
}
