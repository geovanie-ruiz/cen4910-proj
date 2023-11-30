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
exports.SaveSnapshotDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SaveSnapshotDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The pk for the save file.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SaveSnapshotDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The user given name for the save file.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SaveSnapshotDto.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name for the campaign.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SaveSnapshotDto.prototype, "campaign_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name for the save file character.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SaveSnapshotDto.prototype, "character_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The updated_at timestamp for the save file.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], SaveSnapshotDto.prototype, "last_played", void 0);
exports.SaveSnapshotDto = SaveSnapshotDto;
//# sourceMappingURL=save-snapshot.dto.js.map