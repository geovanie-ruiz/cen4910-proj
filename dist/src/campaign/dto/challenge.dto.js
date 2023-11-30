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
exports.ChallengeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const challenge_enum_1 = require("../enum/challenge.enum");
const action_check_dto_1 = require("./action-check.dto");
const action_choice_dto_1 = require("./action-choice.dto");
class ChallengeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The text for the challenge content.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChallengeDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The type of challenge: choice, check',
        enum: challenge_enum_1.ChallengeType,
        enumName: 'ChallengeType',
    }),
    (0, class_validator_1.IsEnum)(challenge_enum_1.ChallengeType, { each: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChallengeDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The actions contained in the challenge.',
        type: 'array',
        items: {
            oneOf: [
                { $ref: (0, swagger_1.getSchemaPath)(action_check_dto_1.ActionCheckDto) },
                { $ref: (0, swagger_1.getSchemaPath)(action_choice_dto_1.ActionChoiceDto) },
            ],
        },
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], ChallengeDto.prototype, "actions", void 0);
exports.ChallengeDto = ChallengeDto;
//# sourceMappingURL=challenge.dto.js.map