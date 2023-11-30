import { LoginUserDto } from '../users/dto/user-login.dto';
import { RefreshUserDto } from '../users/dto/user-refresh.dto';
import { CreateUserDto } from '../users/dto/user.create.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    logIn(signInDto: LoginUserDto): Promise<import("./auth.service").LoginStatus>;
    register(createUserDto: CreateUserDto): Promise<import("./auth.service").LoginStatus>;
    refresh(characterCreationDto: RefreshUserDto): Promise<import("./auth.service").LoginStatus>;
}
