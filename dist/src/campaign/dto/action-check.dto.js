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
exports.ActionCheckDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ActionCheckDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID to identify the choice' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ActionCheckDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Text explaining the choice' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ActionCheckDto.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The value the player roll needs to meet or exceed',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ActionCheckDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sequence ID for the view to which a passing roll leads',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ActionCheckDto.prototype, "pass", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sequence ID for the view to which a failing roll leads',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ActionCheckDto.prototype, "fail", void 0);
exports.ActionCheckDto = ActionCheckDto;
//# sourceMappingURL=action-check.dto.js.map