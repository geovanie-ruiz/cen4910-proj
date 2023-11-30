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
exports.ChoiceEntity = void 0;
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../common/abstract.entity");
let ChoiceEntity = class ChoiceEntity extends abstract_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", Number)
], ChoiceEntity.prototype, "campaign_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", Number)
], ChoiceEntity.prototype, "sequence_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", Number)
], ChoiceEntity.prototype, "character_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", Number)
], ChoiceEntity.prototype, "choice_made_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        nullable: true,
        unique: false,
    }),
    __metadata("design:type", Boolean)
], ChoiceEntity.prototype, "is_success", void 0);
ChoiceEntity = __decorate([
    (0, typeorm_1.Entity)('choice'),
    (0, typeorm_1.Unique)('composite_key', ['campaign_id', 'sequence_id', 'character_id'])
], ChoiceEntity);
exports.ChoiceEntity = ChoiceEntity;
//# sourceMappingURL=choice.entity.js.map