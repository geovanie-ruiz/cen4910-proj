import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/user-login.dto';
import { CreateUserDto } from '../users/dto/user.create.dto';
import { RefreshUserDto } from 'src/users/dto/user-refresh.dto';
import { jwtConstants } from './constants/constants';

export interface LoginStatus {
  username: string;
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    const user = await this.usersService.findByLogin(loginUserDto);
    const payload = { sub: user.id, username: user.username };
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.usersService.createRefreshToken(
      user.username,
      accessToken,
    );

    return {
      username: user.username,
      accessToken: accessToken,
      refreshToken: refreshToken.token,
    };
  }

  async register(createUserDto: CreateUserDto): Promise<LoginStatus> {
    const user = await this.usersService.create(createUserDto);
    const payload = { sub: user.id, username: user.username };
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.usersService.createRefreshToken(
      user.username,
      accessToken,
    );

    return {
      username: user.username,
      accessToken: accessToken,
      refreshToken: refreshToken.token,
    };
  }

  async refreshToken(refreshUserDto: RefreshUserDto): Promise<LoginStatus> {
    const existingRefreshToken = await this.usersService.getRefreshToken(
      refreshUserDto.refreshToken,
    );

    try {
      await this.jwtService.verifyAsync(existingRefreshToken.token, {
        secret: jwtConstants.secret,
      });
    } catch {
      throw new HttpException(
        'Invalid token refresh request',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.usersService.getUserId(refreshUserDto.username);
    const payload = { sub: user.id, username: user.username };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      username: user.username,
      accessToken: accessToken,
      refreshToken: existingRefreshToken.token,
    };
  }
}
