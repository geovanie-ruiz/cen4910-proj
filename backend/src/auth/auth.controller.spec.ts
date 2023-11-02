import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import * as Mocks from './tests/mock-data.mock';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            signIn: jest.fn().mockResolvedValue(Mocks.loginStatus),
            register: jest.fn().mockResolvedValue(Mocks.loginStatus),
            refreshToken: jest.fn().mockResolvedValue(Mocks.loginStatus),
          },
        }
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should log users in', async () => {
    const loginStatus = await controller.logIn(Mocks.loginUser);
    expect(loginStatus).toEqual(Mocks.loginStatus);
  });

  it('should register new users', async () => {
    const loginStatus = await controller.register(Mocks.createUser);
    expect(loginStatus).toEqual(Mocks.loginStatus);
  });

  it('should refresh tokens', async () => {
    const loginStatus = await controller.refresh(Mocks.refreshUser);
    expect(loginStatus).toEqual(Mocks.loginStatus);
  });
});
