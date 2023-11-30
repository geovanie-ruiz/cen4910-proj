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
exports.ActionEntity = void 0;
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../common/abstract.entity");
const challenge_entity_1 = require("./challenge.entity");
const alignment_enum_1 = require("../enum/alignment.enum");
let ActionEntity = class ActionEntity extends abstract_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", Number)
], ActionEntity.prototype, "choice_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", String)
], ActionEntity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
        unique: false,
    }),
    __metadata("design:type", String)
], ActionEntity.prototype, "alignment", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: true,
        unique: false,
    }),
    __metadata("design:type", Number)
], ActionEntity.prototype, "next", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: false,
        default: '',
    }),
    __metadata("design:type", String)
], ActionEntity.prototype, "personal_choice_label", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: false,
        default: '',
    }),
    __metadata("design:type", String)
], ActionEntity.prototype, "others_choice_label", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: true,
        unique: false,
    }),
    __metadata("design:type", Number)
], ActionEntity.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: true,
        unique: false,
    }),
    __metadata("design:type", Number)
], ActionEntity.prototype, "pass", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: true,
        unique: false,
    }),
    __metadata("design:type", Number)
], ActionEntity.prototype, "fail", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: false,
        default: '',
    }),
    __metadata("design:type", String)
], ActionEntity.prototype, "personal_fail", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: false,
        default: '',
    }),
    __metadata("design:type", String)
], ActionEntity.prototype, "personal_success", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: false,
        default: '',
    }),
    __metadata("design:type", String)
], ActionEntity.prototype, "others_fail", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: false,
        default: '',
    }),
    __metadata("design:type", String)
], ActionEntity.prototype, "others_success", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => challenge_entity_1.ChallengeEntity, (challenge) => challenge.actions),
    __metadata("design:type", challenge_entity_1.ChallengeEntity)
], ActionEntity.prototype, "challenge", void 0);
ActionEntity = __decorate([
    (0, typeorm_1.Entity)('action')
], ActionEntity);
exports.ActionEntity = ActionEntity;
//# sourceMappingURL=action.entity.js.map