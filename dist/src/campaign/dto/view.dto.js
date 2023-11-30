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
exports.ViewDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const content_enum_1 = require("../enum/content.enum");
const content_exposition_dto_1 = require("./content-exposition.dto");
const content_challenge_dto_1 = require("./content-challenge.dto");
class ViewDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identifies basic view order of view within a campaign.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ViewDto.prototype, "sequence_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The type of content contained in the view: exposition, challenge',
        enum: content_enum_1.ContentType,
        enumName: 'ContentType',
    }),
    (0, class_validator_1.IsEnum)(content_enum_1.ContentType, { each: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ViewDto.prototype, "content_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The content contained in the view.',
        oneOf: [
            { $ref: (0, swagger_1.getSchemaPath)(content_exposition_dto_1.ContentExpositionDto) },
            { $ref: (0, swagger_1.getSchemaPath)(content_challenge_dto_1.ContentChallengeDto) },
        ],
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], ViewDto.prototype, "content", void 0);
exports.ViewDto = ViewDto;
//# sourceMappingURL=view.dto.js.map