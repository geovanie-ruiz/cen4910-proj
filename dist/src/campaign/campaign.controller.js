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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const gamestate_dto_1 = require("../users/dto/gamestate.dto");
const campaign_service_1 = require("./campaign.service");
const campaign_dto_1 = require("./dto/campaign.dto");
const choice_made_dto_1 = require("./dto/choice-made.dto");
const choice_dto_1 = require("./dto/choice.dto");
const epilogue_dto_1 = require("./dto/epilogue.dto");
let CampaignController = class CampaignController {
    constructor(campaignService) {
        this.campaignService = campaignService;
    }
    async getCampaigns() {
        return await this.campaignService.getAllCampaigns();
    }
    async getCampaignEnding(gameState) {
        return await this.campaignService.getCampaignEnding(gameState);
    }
    async getCampaignById(campaignId) {
        return await this.campaignService.getCampaignById(campaignId);
    }
    async createChoiceRecord(playerChoice) {
        return await this.campaignService.createChoiceRecord(playerChoice);
    }
    async getChoiceById(campaignId, sequenceId, characterId) {
        return await this.campaignService.getChoiceById(campaignId, sequenceId, characterId);
    }
    async getChoicesByCampaign(campaignId, characterId) {
        return await this.campaignService.getChoicesByCampaign(campaignId, characterId);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'A list of all the campaign builds',
        type: campaign_dto_1.CampaignDto,
        isArray: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "getCampaigns", null);
__decorate([
    (0, common_1.Post)('/ending'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'Returns the campaign ending based on gameplay results.',
        type: epilogue_dto_1.EpilogueDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gamestate_dto_1.GameStateDto]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "getCampaignEnding", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'A campaign by ID if one is found',
        type: campaign_dto_1.CampaignDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "getCampaignById", null);
__decorate([
    (0, common_1.Post)('/choice/set'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: "Updated or created a character's choice.",
        type: choice_made_dto_1.ChoiceMadeDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [choice_made_dto_1.ChoiceMadeDto]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "createChoiceRecord", null);
__decorate([
    (0, common_1.Get)('/choice/:cid/:sid/:chid'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'Get a choice by composite identifier',
        type: choice_dto_1.ChoiceDto,
    }),
    __param(0, (0, common_1.Param)('cid')),
    __param(1, (0, common_1.Param)('sid')),
    __param(2, (0, common_1.Param)('chid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "getChoiceById", null);
__decorate([
    (0, common_1.Get)('/choice/:cid/:chid'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'Get choices for a character for a campaign',
        type: choice_dto_1.ChoiceDto,
        isArray: true,
    }),
    __param(0, (0, common_1.Param)('cid')),
    __param(1, (0, common_1.Param)('chid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "getChoicesByCampaign", null);
CampaignController = __decorate([
    (0, swagger_1.ApiTags)('Campaign'),
    (0, common_1.Controller)('campaign'),
    __metadata("design:paramtypes", [campaign_service_1.CampaignService])
], CampaignController);
exports.CampaignController = CampaignController;
//# sourceMappingURL=campaign.controller.js.map