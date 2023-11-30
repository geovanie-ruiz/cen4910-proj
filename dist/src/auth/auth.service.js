"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./constants/constants");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(loginUserDto) {
        const user = await this.usersService.findByLogin(loginUserDto);
        const payload = { sub: user.id, username: user.username };
        const accessToken = await this.jwtService.signAsync(payload);
        const refreshToken = await this.usersService.createRefreshToken(user.username, accessToken);
        return {
            username: user.username,
            accessToken: accessToken,
            refreshToken: refreshToken.token,
        };
    }
    async register(createUserDto) {
        const user = await this.usersService.create(createUserDto);
        const payload = { sub: user.id, username: user.username };
        const accessToken = await this.jwtService.signAsync(payload);
        const refreshToken = await this.usersService.createRefreshToken(user.username, accessToken);
        return {
            username: user.username,
            accessToken: accessToken,
            refreshToken: refreshToken.token,
        };
    }
    async refreshToken(refreshUserDto) {
        const existingRefreshToken = await this.usersService.getRefreshToken(refreshUserDto.refreshToken);
        try {
            await this.jwtService.verifyAsync(existingRefreshToken.token, {
                secret: constants_1.jwtConstants.secret,
            });
        }
        catch (_a) {
            throw new common_1.HttpException('Invalid token refresh request', common_1.HttpStatus.BAD_REQUEST);
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
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map