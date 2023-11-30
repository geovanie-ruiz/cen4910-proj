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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const save_snapshot_dto_1 = require("./dto/save-snapshot.dto");
const save_dto_1 = require("./dto/save.dto");
const character_dto_1 = require("./dto/character.dto");
const save_update_dto_1 = require("./dto/save-update.dto");
const character_bio_dto_1 = require("./dto/character-bio.dto");
const character_creation_dto_1 = require("./dto/character-creation.dto");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async getSaves(req) {
        const username = req.user.username;
        return await this.userService.getSaveFiles(username);
    }
    async createSave(req, saveDto) {
        const username = req.user.username;
        await this.userService.createSaveFile(username, saveDto);
    }
    async updateSave(req, saveUpdateDto) {
        const username = req.user.username;
        await this.userService.updateSaveFile(username, saveUpdateDto.save_file_id, saveUpdateDto.last_sequence_id);
    }
    async getSave(req, saveId) {
        const username = req.user.username;
        return await this.userService.getSaveFile(username, saveId);
    }
    async getCharacters() {
        return await this.userService.getCharacterSet();
    }
    async getCharacter(characterId) {
        return await this.userService.getCharacter(characterId);
    }
    async getCharacterFull(characterId) {
        return await this.userService.getCharacterFull(characterId);
    }
    async createCharacter(characterCreationDto) {
        await this.userService.createCharacter(characterCreationDto);
    }
};
__decorate([
    (0, common_1.Get)('save/list'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'The list of save files for a user.',
        type: save_snapshot_dto_1.SaveSnapshotDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getSaves", null);
__decorate([
    (0, common_1.Post)('save/new'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'A new save entry for a user has been created.',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, save_dto_1.SaveDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createSave", null);
__decorate([
    (0, common_1.Put)('save/update'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'The save file has been updated.',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, save_update_dto_1.SaveUpdateDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateSave", null);
__decorate([
    (0, common_1.Get)('save/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'The specific save file by id for a user.',
        type: save_dto_1.SaveDto,
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getSave", null);
__decorate([
    (0, common_1.Get)('character/list'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'Subset of characters downloaded from the Star Wars API',
        type: character_bio_dto_1.CharacterBioDto,
        isArray: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getCharacters", null);
__decorate([
    (0, common_1.Get)('character/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'Retrieve a character by ID',
        type: character_dto_1.CharacterDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getCharacter", null);
__decorate([
    (0, common_1.Get)('character/bio/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'Character instance enriched with Star Wars API data',
        type: character_bio_dto_1.CharacterBioDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getCharacterFull", null);
__decorate([
    (0, common_1.Post)('character/new'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'A new character entry has been created.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [character_creation_dto_1.CharacterCreationDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createCharacter", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map