import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';
import { CreateUserDto } from './dto/user.create.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { compare } from 'bcrypt';
import { UserSaveEntity } from './entity/save.entity';
import { ChoiceDto, SaveDto } from './dto/save.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    @InjectRepository(UserSaveEntity)
    private readonly userSaveRepo: Repository<UserSaveEntity>,
  ) {}

  toUserDto(data: UserEntity): UserDto {
    const { id, username, email } = data;
    const userDto: UserDto = {
      id,
      username,
      email,
    };
    return userDto;
  }

  toSaveDtoList(data: UserSaveEntity[]): SaveDto[] {
    const saveData: SaveDto[] = data.map((save) => {
      const { campaign_id, choices } = save.save_data;

      const choicesDto: ChoiceDto[] = choices.map((choice) => {
        const { question_id, answer_id } = choice;
        const choiceDto: ChoiceDto = {
          question_id,
          answer_id,
        };
        return choiceDto;
      });

      const saveDataDto: SaveDto = {
        filename: save.filename,
        campaign_id,
        choices: choicesDto,
      };

      return saveDataDto;
    });

    return saveData;
  }

  async comparePasswords(password: string, hash: string) {
    return await compare(password, hash);
  }

  async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepo.findOne({ where: { username } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    const areEqual = await this.comparePasswords(password, user.password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return this.toUserDto(user);
  }

  async create(userDto: CreateUserDto): Promise<UserDto> {
    const { username, password, email } = userDto;

    const userInDb = await this.userRepo.findOne({ where: { username } });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: UserEntity = this.userRepo.create({
      username,
      password,
      email,
    });

    await this.userRepo.save(user);
    return this.toUserDto(user);
  }

  async getSaveFiles(userId: number): Promise<SaveDto[]> {
    const user = await this.userRepo.findOne({ where: { id: userId } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    const saveData = await this.userSaveRepo.find({
      where: { user: { id: userId } },
    });

    return this.toSaveDtoList(saveData);
  }
}
