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
exports.CampaignService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const campaign_entity_1 = require("./entity/campaign.entity");
const choice_entity_1 = require("./entity/choice.entity");
const alignment_enum_1 = require("./enum/alignment.enum");
const challenge_enum_1 = require("./enum/challenge.enum");
const content_enum_1 = require("./enum/content.enum");
let CampaignService = class CampaignService {
    constructor(campaignRepo, choiceRepo) {
        this.campaignRepo = campaignRepo;
        this.choiceRepo = choiceRepo;
    }
    normalizeToCampaignDto(data) {
        return data.map((campaign) => this.toCampaignDto(campaign));
    }
    toCampaignDto(data) {
        const { id, name, views } = data;
        const viewsData = views.map((view) => {
            const { sequence_id, content_type, content } = view;
            let contentData;
            if (content_type === content_enum_1.ContentType.Exposition) {
                contentData = {
                    exposition: content.exposition,
                    next: content.next,
                };
            }
            else if (content_type === content_enum_1.ContentType.Challenge) {
                const actionData = content.challenge.actions.map((action) => {
                    let actionDto;
                    if (content.challenge.type === challenge_enum_1.ChallengeType.Check) {
                        actionDto = {
                            id: action.choice_id,
                            label: action.label,
                            score: action.score,
                            pass: action.pass,
                            fail: action.fail,
                        };
                    }
                    else if (content.challenge.type === challenge_enum_1.ChallengeType.Choice) {
                        actionDto = {
                            id: action.choice_id,
                            label: action.label,
                            alignment: action.alignment.toString(),
                            next: action.next,
                        };
                    }
                    return actionDto;
                });
                const challenge = {
                    text: content.challenge.text,
                    type: content.challenge.type,
                    actions: actionData,
                };
                contentData = {
                    challenge,
                };
            }
            const viewDto = {
                sequence_id: sequence_id,
                content_type,
                content: contentData,
            };
            return viewDto;
        });
        const campaignDto = {
            id,
            name,
            views: viewsData,
        };
        return campaignDto;
    }
    async getAllCampaigns() {
        const campaigns = await this.campaignRepo.find({
            relations: {
                views: {
                    content: {
                        challenge: {
                            actions: true,
                        },
                    },
                },
            },
        });
        return this.normalizeToCampaignDto(campaigns);
    }
    async getCampaignById(id) {
        const campaign = await this.campaignRepo.findOne({
            where: {
                id: id,
            },
            relations: {
                views: {
                    content: {
                        challenge: {
                            actions: true,
                        },
                    },
                },
            },
        });
        if (!campaign) {
            throw new common_1.HttpException('Campaign not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.toCampaignDto(campaign);
    }
    toAlignmentText(good, neutral, evil) {
        const moralChoicesMade = good + evil > 0;
        const moralChoicesBalanced = good - evil === 0;
        if (moralChoicesMade && moralChoicesBalanced)
            return 'Neutral';
        switch (Math.max(good, neutral, evil)) {
            case good:
                return 'Good';
            case neutral:
                return 'Neutral';
            case evil:
                return 'Evil';
        }
    }
    toAlignment(alignments) {
        const goodScore = alignments.filter((alignment) => [
            alignment_enum_1.DungeonsDragonsAlignment.LawfulGood,
            alignment_enum_1.DungeonsDragonsAlignment.NeutralGood,
            alignment_enum_1.DungeonsDragonsAlignment.ChaoticGood,
        ].includes(alignment)).length;
        const neutralScore = alignments.filter((alignment) => [
            alignment_enum_1.DungeonsDragonsAlignment.LawfulNeutral,
            alignment_enum_1.DungeonsDragonsAlignment.TrueNeutral,
            alignment_enum_1.DungeonsDragonsAlignment.ChaoticNeutral,
        ].includes(alignment)).length;
        const evilScore = alignments.filter((alignment) => [
            alignment_enum_1.DungeonsDragonsAlignment.LawfulEvil,
            alignment_enum_1.DungeonsDragonsAlignment.NeutralEvil,
            alignment_enum_1.DungeonsDragonsAlignment.ChaoticEvil,
        ].includes(alignment)).length;
        return this.toAlignmentText(goodScore, neutralScore, evilScore);
    }
    calculateAlignment(choices, campaignChoices) {
        const alignments = [];
        for (let i = 0; i < campaignChoices.length; i++) {
            const alignment = campaignChoices[i].options.find((option) => option.choice_id === choices[i].choice_made_id).alignment;
            alignment && alignments.push(alignment);
        }
        return this.toAlignment(alignments);
    }
    calculateEpilogue(alignment, endings) {
        const ending = endings.find((ending) => ending.alignment === alignment);
        return ending.epilogue;
    }
    generatePlayerChoiceLabel(choice, option) {
        if (option.personal_choice == null || option.personal_choice == '') {
            if (choice.is_success) {
                return option.personal_success;
            }
            else {
                return option.personal_fail;
            }
        }
        return option.personal_choice;
    }
    generatePublicChoiceLabel(total_population, public_choices, choice_options) {
        const public_choice = public_choices[0];
        const campaign_choice = choice_options[public_choice.choice_id - 1];
        let also = '';
        let other_choice_selections = public_choice.total_choice_selections;
        if (public_choice.is_player_choice) {
            also = ' also';
            other_choice_selections -= 1;
        }
        const other_population = total_population - 1;
        const choice_percent = Math.round((other_choice_selections / other_population) * 100);
        const fake_choice_type_check = campaign_choice.others_choice_template == null ||
            campaign_choice.others_choice_template == '';
        if (fake_choice_type_check) {
            if (public_choice.is_player_success) {
                const check_percent = Math.round((public_choice.total_failures / other_choice_selections) * 100);
                return `${check_percent}% of other players ${campaign_choice.others_fail}`;
            }
            else {
                const check_percent = Math.round((public_choice.total_succcesses / other_choice_selections) * 100);
                return `${check_percent}% of other players ${campaign_choice.others_success}`;
            }
        }
        else {
            return `${choice_percent}% of other players${also} ${campaign_choice.others_choice_template}`;
        }
    }
    caclulateContent(majorChoices, choices, publicChoices, campaignChoices) {
        const majorChoicesDto = majorChoices.map((majorChoice) => {
            const player_choice = choices.find((choice) => choice.sequence_id === majorChoice.sequence_id);
            const public_choice = publicChoices.find((publicChoice) => publicChoice.sequence_id === majorChoice.sequence_id);
            const campaign_choice = campaignChoices.find((campaignChoice) => campaignChoice.sequence_id === majorChoice.sequence_id);
            const player_choice_idx = player_choice.choice_made_id - 1;
            const player_choice_label = this.generatePlayerChoiceLabel(player_choice, campaign_choice.options[player_choice_idx]);
            const other_choice_label = this.generatePublicChoiceLabel(public_choice.total_selections, public_choice.selection_details, campaign_choice.options);
            return {
                player_choice: player_choice_label,
                others_choice: other_choice_label,
            };
        });
        return majorChoicesDto;
    }
    toEpilogueDto(data, campaignChoices, choices, publicChoices) {
        const alignment = this.calculateAlignment(choices, campaignChoices);
        const epilogue = this.calculateEpilogue(alignment, data.epilogue.epilogue_options);
        const content = this.caclulateContent(data.epilogue.major_choices, choices, publicChoices, campaignChoices);
        return {
            epilogue,
            alignment,
            content,
        };
    }
    async getPublicChoices(campaign_id, playerChoices, campaignChoices) {
        const choices = [];
        for (let i = 0; i < campaignChoices.length; i++) {
            const sequence_id = campaignChoices[i].sequence_id;
            const total_choices = campaignChoices[i].options.length;
            const playerChoice = playerChoices[i];
            const total_selections = await this.choiceRepo.count({
                where: {
                    campaign_id: campaign_id,
                    sequence_id: sequence_id,
                },
            });
            const selection_details = [];
            for (let choice_id = 1; choice_id <= total_choices; choice_id++) {
                const total_choice_selections = await this.choiceRepo.count({
                    where: {
                        campaign_id: campaign_id,
                        sequence_id: sequence_id,
                        choice_made_id: choice_id,
                    },
                });
                const total_succcesses = await this.choiceRepo.count({
                    where: {
                        campaign_id: campaign_id,
                        sequence_id: sequence_id,
                        choice_made_id: choice_id,
                        is_success: true,
                    },
                });
                const total_failures = await this.choiceRepo.count({
                    where: {
                        campaign_id: campaign_id,
                        sequence_id: sequence_id,
                        choice_made_id: choice_id,
                        is_success: false,
                    },
                });
                const is_player_choice = playerChoice.choice_made_id === choice_id;
                const is_player_success = is_player_choice && playerChoice.is_success;
                const selection = {
                    choice_id,
                    total_choice_selections,
                    total_succcesses,
                    total_failures,
                    is_player_choice,
                    is_player_success,
                };
                selection_details.push(selection);
            }
            const choice = {
                sequence_id: sequence_id,
                total_selections,
                selection_details: selection_details.sort((a, b) => b.total_choice_selections - a.total_choice_selections),
            };
            choices.push(choice);
        }
        return choices;
    }
    async getCampaignEnding({ campaign_id, character_id, }) {
        const campaign = await this.campaignRepo.findOne({
            where: {
                id: campaign_id,
            },
            relations: {
                views: {
                    content: {
                        challenge: {
                            actions: true,
                        },
                    },
                },
            },
        });
        if (!campaign) {
            throw new common_1.HttpException('Invalid Campaign ID', common_1.HttpStatus.BAD_REQUEST);
        }
        const campaignChoices = campaign.views
            .filter((view) => view.content_type === content_enum_1.ContentType.Challenge)
            .map((view) => {
            const actions = view.content.challenge.actions;
            const options = actions.map((action) => {
                return {
                    choice_id: action.choice_id,
                    alignment: action === null || action === void 0 ? void 0 : action.alignment,
                    personal_choice: action === null || action === void 0 ? void 0 : action.personal_choice_label,
                    others_choice_template: action === null || action === void 0 ? void 0 : action.others_choice_label,
                    personal_fail: action === null || action === void 0 ? void 0 : action.personal_fail,
                    personal_success: action === null || action === void 0 ? void 0 : action.personal_success,
                    others_fail: action === null || action === void 0 ? void 0 : action.others_fail,
                    others_success: action === null || action === void 0 ? void 0 : action.others_success,
                };
            });
            return {
                sequence_id: view.sequence_id,
                options,
            };
        })
            .sort((a, b) => a.sequence_id - b.sequence_id);
        const playerChoices = await this.choiceRepo.find({
            where: { campaign_id: campaign.id, character_id: character_id },
            order: { sequence_id: 'ASC' },
        });
        if (playerChoices.length <= 0) {
            throw new common_1.HttpException('No choices made within the campaign.', common_1.HttpStatus.BAD_REQUEST);
        }
        if (campaignChoices.length !== playerChoices.length) {
            throw new common_1.HttpException('Campaign not yet complete.', common_1.HttpStatus.BAD_REQUEST);
        }
        const publicChoices = await this.getPublicChoices(campaign_id, playerChoices, campaignChoices);
        return this.toEpilogueDto(campaign, campaignChoices, playerChoices, publicChoices);
    }
    async createChoiceRecord(playerChoice) {
        const choiceMade = this.choiceRepo.create({
            campaign_id: playerChoice.campaign_id,
            sequence_id: playerChoice.sequence_id,
            character_id: playerChoice.character_id,
            choice_made_id: playerChoice.choice_made_id,
        });
        if (playerChoice.is_success !== null) {
            choiceMade.is_success = playerChoice.is_success;
        }
        await this.choiceRepo.upsert(choiceMade, {
            conflictPaths: ['campaign_id', 'sequence_id', 'character_id'],
            skipUpdateIfNoValuesChanged: true,
        });
    }
    async getChoiceById(campaign, sequence, character) {
        const choiceMade = await this.choiceRepo.findOne({
            where: {
                campaign_id: campaign,
                sequence_id: sequence,
                character_id: character,
            },
        });
        if (!choiceMade) {
            throw new common_1.HttpException('Choice does not exist.', common_1.HttpStatus.BAD_REQUEST);
        }
        return choiceMade;
    }
    toChoicesDto(choices) {
        return choices.map((choice) => {
            if ((choice === null || choice === void 0 ? void 0 : choice.is_success) || choice.is_success !== undefined) {
                return {
                    choice_made_id: choice.choice_made_id,
                    is_success: choice.is_success,
                };
            }
            else {
                return { choice_made_id: choice.choice_made_id, };
            }
        });
    }
    async getChoicesByCampaign(campaign, character) {
        const choicesMade = await this.choiceRepo.find({
            where: {
                campaign_id: campaign,
                character_id: character,
            },
            order: {
                sequence_id: 'ASC',
            },
        });
        if (choicesMade.length <= 0) {
            throw new common_1.HttpException('Choices do not exist.', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.toChoicesDto(choicesMade);
    }
};
CampaignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(campaign_entity_1.CampaignEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(choice_entity_1.ChoiceEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CampaignService);
exports.CampaignService = CampaignService;
//# sourceMappingURL=campaign.service.js.map