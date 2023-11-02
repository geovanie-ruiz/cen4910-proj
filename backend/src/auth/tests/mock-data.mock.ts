import { RefreshUserDto } from 'src/users/dto/user-refresh.dto';
import { LoginUserDto } from '../../users/dto/user-login.dto';
import { CreateUserDto } from '../../users/dto/user.create.dto';
import { UserDto } from '../../users/dto/user.dto';
import { RefreshToken } from '../../users/entity/token.entity';
import { UserEntity } from '../../users/entity/user.entity';
import { LoginStatus } from '../auth.service';

/*
	Mock Entity Tables
*/


/*
	Mock Entity Instance
*/
export const oneUser = {
	id: 1,
	username: 'a_user1',
	password: 'a_password1',
	email: 'email_1@inbox.com',
} as UserEntity;

export const oneToken = {
	username: 'a_user1',
	token: 'a_token_string_1',
} as RefreshToken;

/*
	Data Transfer Objects
*/
export const userDto = {
	id: 1,
	username: 'a_user1',
	email: 'email_1@inbox.com',
} as UserDto;

export const loginUser = {
	username: 'a_user1',
	password: 'a_password1',
} as LoginUserDto;

export const createUser = {
	username: 'a_user1',
	password: 'a_password1',
	email: 'email_1@inbox.com',
} as CreateUserDto;

export const refreshUser = {
	username: 'a_user1',
	refreshToken: 'a_token_string_1',
} as RefreshUserDto;

/*
	Mock Objects
*/
export const loginStatus = {
	username: 'a_user1',
	accessToken: 'a_token_string_1',
	refreshToken: 'a_token_string_1',
} as LoginStatus;
