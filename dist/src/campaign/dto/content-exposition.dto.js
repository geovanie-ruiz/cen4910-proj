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
exports.ContentExpositionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ContentExpositionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The text for the exposition content.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ContentExpositionDto.prototype, "exposition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The next View Sequence ID to move to.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ContentExpositionDto.prototype, "next", void 0);
exports.ContentExpositionDto = ContentExpositionDto;
//# sourceMappingURL=content-exposition.dto.js.map