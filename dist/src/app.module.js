"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const user_entity_1 = require("./users/entity/user.entity");
const core_1 = require("@nestjs/core");
const auth_guard_1 = require("./auth/auth.guard");
const save_entity_1 = require("./users/entity/save.entity");
const campaign_module_1 = require("./campaign/campaign.module");
const campaign_entity_1 = require("./campaign/entity/campaign.entity");
const view_entity_1 = require("./campaign/entity/view.entity");
const content_entity_1 = require("./campaign/entity/content.entity");
const challenge_entity_1 = require("./campaign/entity/challenge.entity");
const action_entity_1 = require("./campaign/entity/action.entity");
const character_entity_1 = require("./users/entity/character.entity");
const token_entity_1 = require("./users/entity/token.entity");
const choice_entity_1 = require("./campaign/entity/choice.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('POSTGRES_HOST'),
                    port: configService.get('POSTGRES_PORT'),
                    username: configService.get('POSTGRES_USER'),
                    password: configService.get('POSTGRES_PASSWORD'),
                    database: configService.get('POSTGRES_DATABASE'),
                    entities: [
                        user_entity_1.UserEntity,
                        save_entity_1.UserSaveEntity,
                        campaign_entity_1.CampaignEntity,
                        view_entity_1.ViewEntity,
                        content_entity_1.ContentEntity,
                        challenge_entity_1.ChallengeEntity,
                        action_entity_1.ActionEntity,
                        character_entity_1.CharacterEntity,
                        token_entity_1.RefreshToken,
                        choice_entity_1.ChoiceEntity,
                    ],
                    synchronize: true,
                }),
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            campaign_module_1.CampaignModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map