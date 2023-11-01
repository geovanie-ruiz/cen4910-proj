import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from '../users/dto/user-login.dto';
import { RefreshUserDto } from '../users/dto/user-refresh.dto';
import { CreateUserDto } from '../users/dto/user.create.dto';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  logIn(@Body() signInDto: LoginUserDto) {
    return this.authService.signIn(signInDto);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  refresh(@Body() characterCreationDto: RefreshUserDto) {
    return this.authService.refreshToken(characterCreationDto);
  }
}
