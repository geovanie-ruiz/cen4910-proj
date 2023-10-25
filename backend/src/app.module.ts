import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/entity/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { UserSaveEntity } from './users/entity/save.entity';
import { CampaignModule } from './campaign/campaign.module';
import { CampaignEntity } from './campaign/entity/campaign.entity';
import { ViewEntity } from './campaign/entity/view.entity';
import { ContentEntity } from './campaign/entity/content.entity';
import { ChallengeEntity } from './campaign/entity/challenge.entity';
import { ActionEntity } from './campaign/entity/action.entity';
import { CharacterEntity } from './users/entity/character.entity';
import { RefreshToken } from './users/entity/token.entity';
import { ChoiceEntity } from './campaign/entity/choice.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        entities: [
          UserEntity,
          UserSaveEntity,
          CampaignEntity,
          ViewEntity,
          ContentEntity,
          ChallengeEntity,
          ActionEntity,
          CharacterEntity,
          RefreshToken,
          ChoiceEntity,
        ],
        synchronize: true,
      }),
    }),
    AuthModule,
    UsersModule,
    CampaignModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
