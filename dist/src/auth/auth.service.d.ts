import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/user-login.dto';
import { CreateUserDto } from '../users/dto/user.create.dto';
import { RefreshUserDto } from '../users/dto/user-refresh.dto';
export interface LoginStatus {
    username: string;
    accessToken: string;
    refreshToken: string;
}
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(loginUserDto: LoginUserDto): Promise<LoginStatus>;
    register(createUserDto: CreateUserDto): Promise<LoginStatus>;
    refreshToken(refreshUserDto: RefreshUserDto): Promise<LoginStatus>;
}
