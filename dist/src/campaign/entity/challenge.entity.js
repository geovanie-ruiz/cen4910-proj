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
exports.ChallengeEntity = void 0;
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../common/abstract.entity");
const content_entity_1 = require("./content.entity");
const challenge_enum_1 = require("../enum/challenge.enum");
const action_entity_1 = require("./action.entity");
let ChallengeEntity = class ChallengeEntity extends abstract_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", String)
], ChallengeEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", String)
], ChallengeEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => action_entity_1.ActionEntity, (action) => action.challenge, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], ChallengeEntity.prototype, "actions", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => content_entity_1.ContentEntity, (content) => content.challenge),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", content_entity_1.ContentEntity)
], ChallengeEntity.prototype, "content", void 0);
ChallengeEntity = __decorate([
    (0, typeorm_1.Entity)('challenge')
], ChallengeEntity);
exports.ChallengeEntity = ChallengeEntity;
//# sourceMappingURL=challenge.entity.js.map