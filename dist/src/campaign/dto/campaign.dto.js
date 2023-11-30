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
exports.CampaignDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const view_dto_1 = require("./view.dto");
class CampaignDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Primary identifier for the campaign.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CampaignDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Human readable identifier for the campaign.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CampaignDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of views played out for the campaign.',
        type: [view_dto_1.ViewDto],
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CampaignDto.prototype, "views", void 0);
exports.CampaignDto = CampaignDto;
//# sourceMappingURL=campaign.dto.js.map