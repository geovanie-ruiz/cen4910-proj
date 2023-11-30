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
exports.SaveUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SaveUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The pk of the save file to update.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SaveUpdateDto.prototype, "save_file_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The last sequence id the player viewed and should be resumed from.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SaveUpdateDto.prototype, "last_sequence_id", void 0);
exports.SaveUpdateDto = SaveUpdateDto;
//# sourceMappingURL=save-update.dto.js.map