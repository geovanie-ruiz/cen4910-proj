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
exports.ChoiceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ChoiceDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID to identify the choice within a view.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ChoiceDto.prototype, "choice_made_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'True if a check roll succeeded, Null if no check occurred.',
    }),
    __metadata("design:type", Boolean)
], ChoiceDto.prototype, "is_success", void 0);
exports.ChoiceDto = ChoiceDto;
//# sourceMappingURL=choice.dto.js.map