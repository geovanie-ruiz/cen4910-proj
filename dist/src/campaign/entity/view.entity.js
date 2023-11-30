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
exports.ViewEntity = void 0;
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../common/abstract.entity");
const content_enum_1 = require("../enum/content.enum");
const campaign_entity_1 = require("./campaign.entity");
const content_entity_1 = require("./content.entity");
let ViewEntity = class ViewEntity extends abstract_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'smallint',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", Number)
], ViewEntity.prototype, "sequence_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        unique: false,
    }),
    __metadata("design:type", String)
], ViewEntity.prototype, "content_type", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => content_entity_1.ContentEntity, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", content_entity_1.ContentEntity)
], ViewEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => campaign_entity_1.CampaignEntity, (campaign) => campaign.views),
    __metadata("design:type", campaign_entity_1.CampaignEntity)
], ViewEntity.prototype, "campaign", void 0);
ViewEntity = __decorate([
    (0, typeorm_1.Entity)('view')
], ViewEntity);
exports.ViewEntity = ViewEntity;
//# sourceMappingURL=view.entity.js.map