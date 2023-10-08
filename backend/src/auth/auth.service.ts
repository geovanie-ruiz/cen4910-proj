import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/user-login.dto';
import { CreateUserDto } from '../users/dto/user.create.dto';

export interface LoginStatus {
  username: string;
  accessToken: any;
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
    return {
      username: user.username,
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async register(createUserDto: CreateUserDto): Promise<LoginStatus> {
    const user = await this.usersService.create(createUserDto);
    const payload = { sub: user.id, username: user.username };
    return {
      username: user.username,
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
