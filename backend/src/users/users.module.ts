import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSaveEntity } from './entity/save.entity';
import { UsersController } from './users.controller';
import { CharacterEntity } from './entity/character.entity';
import { HttpModule } from '@nestjs/axios';
import { RefreshToken } from './entity/token.entity';
import { CampaignModule } from 'src/campaign/campaign.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UserSaveEntity,
      CharacterEntity,
      RefreshToken,
    ]),
    HttpModule,
    CampaignModule,
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
