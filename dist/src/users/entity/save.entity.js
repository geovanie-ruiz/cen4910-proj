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
exports.UserSaveEntity = void 0;
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../common/abstract.entity");
const user_entity_1 = require("./user.entity");
let UserSaveEntity = class UserSaveEntity extends abstract_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", String)
], UserSaveEntity.prototype, "filename", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", Number)
], UserSaveEntity.prototype, "campaign_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", Number)
], UserSaveEntity.prototype, "character_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", Number)
], UserSaveEntity.prototype, "last_sequence_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.saves),
    __metadata("design:type", user_entity_1.UserEntity)
], UserSaveEntity.prototype, "user", void 0);
UserSaveEntity = __decorate([
    (0, typeorm_1.Entity)('user_save'),
    (0, typeorm_1.Unique)(['user', 'filename'])
], UserSaveEntity);
exports.UserSaveEntity = UserSaveEntity;
//# sourceMappingURL=save.entity.js.map