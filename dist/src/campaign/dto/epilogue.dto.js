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
exports.EpilogueDto = exports.MajorChoiceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class MajorChoiceDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Assessment of a player choice made.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MajorChoiceDto.prototype, "player_choice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Comparison of choices versus other player choices.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MajorChoiceDto.prototype, "others_choice", void 0);
exports.MajorChoiceDto = MajorChoiceDto;
class EpilogueDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Epilogue text for the campaign result.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EpilogueDto.prototype, "epilogue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The resulting alignment based on choices.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EpilogueDto.prototype, "alignment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Summary of major choices made in the campaign.',
        type: [MajorChoiceDto],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], EpilogueDto.prototype, "content", void 0);
exports.EpilogueDto = EpilogueDto;
//# sourceMappingURL=epilogue.dto.js.map