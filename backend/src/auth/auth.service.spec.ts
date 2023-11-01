import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as Mocks from './tests/mock-data';
import { HttpException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            findByLogin: jest.fn().mockResolvedValue(Mocks.oneUser),
            createRefreshToken: jest.fn().mockResolvedValue(Mocks.oneToken),
            create: jest.fn().mockResolvedValue(Mocks.userDto),
            getRefreshToken: jest.fn().mockResolvedValue(Mocks.oneToken),
            getUserId: jest.fn().mockResolvedValue(Mocks.oneUser),
          }
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn().mockResolvedValue('a_token_string_1'),
            verifyAsync: jest.fn().mockResolvedValue(undefined),
          }
        }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userService).toBeDefined();
    expect(jwtService).toBeDefined();
  });

  it('signs in a user', async () => {
    const signIn = await service.signIn(Mocks.loginUser);
    expect(signIn).toEqual(Mocks.loginStatus);
  });

  it('registers new users', async () => {
    const register = await service.register(Mocks.createUser);
    expect(register).toEqual(Mocks.loginStatus);
  });

  it('refreshes tokens', async () => {
    const refreshToken = await service.refreshToken(Mocks.refreshUser);
    expect(refreshToken).toEqual(Mocks.loginStatus);
  });

  it('fails to refresh tokens', async () => {
    jest.spyOn(jwtService, 'verifyAsync').mockRejectedValue(new Error('Error'));

    try {
      await service.refreshToken(Mocks.refreshUser);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toEqual('Invalid token refresh request');
    }
  });
});
