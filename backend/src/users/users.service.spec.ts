import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserEntity } from './entity/user.entity';
import { UserSaveEntity } from './entity/save.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const userArray = [
  {
    id: 1,
    username: 'a_user1',
    password: 'a_password1',
    email: 'email_1@inbox.com',
  },
  {
    id: 2,
    username: 'a_user2',
    password: 'a_password2',
    email: 'email_2@inbox.com',
  },
];

const saveArray = [
  {
    userId: 1,
    filename: 'save1',
    save_data: {
      campaign_id: 1,
      choices: [
        {
          question_id: 1,
          answer_id: 2,
        },
      ],
    },
  },
  {
    userId: 1,
    filename: 'save2',
    save_data: {
      campaign_id: 2,
      choices: [
        {
          question_id: 1,
          answer_id: 3,
        },
        {
          question_id: 2,
          answer_id: 1,
        },
      ],
    },
  },
];

const oneUser = {
  id: 1,
  username: 'a_user1',
  password: 'a_password1',
  email: 'email_1@inbox.com',
};

const oneSave = {
  userId: 1,
  filename: 'save2',
  save_data: {
    campaign_id: 2,
    choices: [
      {
        question_id: 1,
        answer_id: 3,
      },
      {
        question_id: 2,
        answer_id: 1,
      },
    ],
  },
};

describe('UsersService', () => {
  let service: UsersService;
  let userEntityRepository: Repository<UserEntity>;
  let UserSaveEntityRepository: Repository<UserSaveEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(userArray),
            findOne: jest.fn().mockResolvedValue(oneUser),
            save: jest.fn().mockResolvedValue(oneUser),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(UserSaveEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(saveArray),
            findOne: jest.fn().mockResolvedValue(oneSave),
            save: jest.fn().mockResolvedValue(oneSave),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userEntityRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
    UserSaveEntityRepository = module.get<Repository<UserSaveEntity>>(
      getRepositoryToken(UserSaveEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userEntityRepository).toBeDefined();
    expect(UserSaveEntityRepository).toBeDefined();
  });
});
