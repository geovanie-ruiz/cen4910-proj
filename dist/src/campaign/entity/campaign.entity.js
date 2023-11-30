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
exports.CampaignEntity = void 0;
const typeorm_1 = require("typeorm");
const view_entity_1 = require("./view.entity");
const abstract_entity_1 = require("../../common/abstract.entity");
let CampaignEntity = class CampaignEntity extends abstract_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], CampaignEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", Object)
], CampaignEntity.prototype, "epilogue", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => view_entity_1.ViewEntity, (view) => view.campaign, {
        eager: true,
    }),
    __metadata("design:type", Array)
], CampaignEntity.prototype, "views", void 0);
CampaignEntity = __decorate([
    (0, typeorm_1.Entity)('campaign')
], CampaignEntity);
exports.CampaignEntity = CampaignEntity;
//# sourceMappingURL=campaign.entity.js.map