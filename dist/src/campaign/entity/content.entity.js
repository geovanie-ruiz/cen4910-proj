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
exports.ContentEntity = void 0;
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../common/abstract.entity");
const view_entity_1 = require("./view.entity");
const challenge_entity_1 = require("./challenge.entity");
let ContentEntity = class ContentEntity extends abstract_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
        unique: false,
    }),
    __metadata("design:type", String)
], ContentEntity.prototype, "exposition", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: true,
        unique: false,
    }),
    __metadata("design:type", Number)
], ContentEntity.prototype, "next", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => challenge_entity_1.ChallengeEntity, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", challenge_entity_1.ChallengeEntity)
], ContentEntity.prototype, "challenge", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => view_entity_1.ViewEntity, (view) => view.content),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", view_entity_1.ViewEntity)
], ContentEntity.prototype, "view", void 0);
ContentEntity = __decorate([
    (0, typeorm_1.Entity)('content')
], ContentEntity);
exports.ContentEntity = ContentEntity;
//# sourceMappingURL=content.entity.js.map