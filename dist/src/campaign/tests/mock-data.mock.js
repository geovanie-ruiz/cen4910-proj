"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDto = exports.choiceDto = exports.choicesDto = exports.gameStateDto = exports.majorChoicesDto = exports.campaignDtos = exports.campaignDto = exports.oneCampaignEpilogueDto = exports.epilogueDto = exports.checkMadeDto = exports.choiceMadeDto = exports.campaignArray = exports.viewArray = exports.contentArray = exports.playerChoicesEvil = exports.playerChoicesNeutralC = exports.playerChoicesNeutralB = exports.playerChoicesNeutralA = exports.playerChoicesGood = exports.choiceArray = exports.challengeArray = exports.actionArray = exports.oneCampaign = exports.oneView = exports.oneChoiceChallengeContent = exports.oneCheckChallengeContent = exports.oneExpositionContent = exports.oneFailure = exports.oneSuccess = exports.oneChoice = exports.oneChoiceChallenge = exports.oneCheckChallenge = exports.oneChoiceAction = exports.oneCheckAction = exports.publicChoices = exports.publicCheckSelectionsPlayerFailure = exports.publicCheckSelectionsPlayerSuccess = exports.publicChoiceSelectionsOthers = exports.publicChoiceSelectionsAlso = exports.choiceOptions = exports.optionFailure = exports.optionSuccess = exports.optionPersonal = exports.campaignChoices = exports.oneCampaignChoices = exports.epilogue = exports.majorChoices = exports.majorChoice = exports.campaignEndings = exports.campaignEnding = void 0;
const alignment_enum_1 = require("../enum/alignment.enum");
const challenge_enum_1 = require("../enum/challenge.enum");
const content_enum_1 = require("../enum/content.enum");
exports.campaignEnding = {
    alignment: 'Good',
    epilogue: 'A Good Ending',
};
exports.campaignEndings = [
    exports.campaignEnding,
    {
        alignment: 'Neutral',
        epilogue: 'A Neutral Ending',
    },
    {
        alignment: 'Evil',
        epilogue: 'An Evil Ending',
    },
];
exports.majorChoice = {
    sequence_id: 2
};
exports.majorChoices = [
    exports.majorChoice,
    {
        sequence_id: 3,
    },
];
exports.epilogue = {
    epilogue_options: exports.campaignEndings,
    major_choices: exports.majorChoices,
};
exports.oneCampaignChoices = [
    {
        sequence_id: 2,
        options: [
            {
                choice_id: 1,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.ChaoticGood,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Other Choice',
                personal_fail: '',
                personal_success: '',
                others_fail: '',
                others_success: '',
            },
        ],
    },
    {
        sequence_id: 3,
        options: [
            {
                choice_id: 1,
                alignment: null,
                personal_choice: '',
                others_choice_template: '',
                personal_fail: 'You Failed A Check',
                personal_success: 'You Passed A Check',
                others_fail: 'Other Players Failed A Check',
                others_success: 'Other Players Passed A Check',
            },
        ],
    },
    {
        sequence_id: 4,
        options: [
            {
                choice_id: 1,
                alignment: null,
                personal_choice: '',
                others_choice_template: '',
                personal_fail: 'You Failed A Check',
                personal_success: 'You Passed A Check',
                others_fail: 'Other Players Failed A Check',
                others_success: 'Other Players Passed A Check',
            },
        ],
    },
];
exports.campaignChoices = [
    {
        sequence_id: 1,
        options: [
            {
                choice_id: 1,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulGood,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
            {
                choice_id: 2,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulNeutral,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
            {
                choice_id: 3,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulEvil,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
        ],
    },
    {
        sequence_id: 2,
        options: [
            {
                choice_id: 1,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulGood,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
            {
                choice_id: 2,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulNeutral,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
            {
                choice_id: 3,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulEvil,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
        ],
    },
    {
        sequence_id: 3,
        options: [
            {
                choice_id: 1,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulGood,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
            {
                choice_id: 2,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulNeutral,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
            {
                choice_id: 3,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulEvil,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
        ],
    },
    {
        sequence_id: 4,
        options: [
            {
                choice_id: 1,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulGood,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
            {
                choice_id: 2,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulNeutral,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
            {
                choice_id: 3,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulEvil,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
        ],
    },
    {
        sequence_id: 5,
        options: [
            {
                choice_id: 1,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulGood,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
            {
                choice_id: 2,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulNeutral,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
            {
                choice_id: 3,
                alignment: alignment_enum_1.DungeonsDragonsAlignment.LawfulEvil,
                personal_choice: 'A Personal Choice',
                others_choice_template: 'Others Choice',
                personal_fail: 'A Personal Fail',
                personal_success: 'A Personal Success',
                others_fail: 'Others Fail',
                others_success: 'Others Success',
            },
        ],
    }
];
exports.optionPersonal = {
    choice_id: 1,
    alignment: alignment_enum_1.DungeonsDragonsAlignment.TrueNeutral,
    personal_choice: 'A Personal Choice',
};
exports.optionSuccess = {
    choice_id: 1,
    alignment: alignment_enum_1.DungeonsDragonsAlignment.TrueNeutral,
    personal_choice: '',
    personal_success: 'A Personal Success',
};
exports.optionFailure = {
    choice_id: 1,
    alignment: alignment_enum_1.DungeonsDragonsAlignment.TrueNeutral,
    personal_choice: null,
    personal_fail: 'A Personal Failure',
};
exports.choiceOptions = [
    {
        others_choice_template: 'Also Chosen',
    },
    {
        others_choice_template: 'Others Chose',
    },
    {
        others_choice_template: null,
        others_fail: '1 Fail',
        others_success: '1 Success',
    },
    {
        others_choice_template: '',
        others_fail: '2 Fail',
        others_success: '2 Success',
    },
];
exports.publicChoiceSelectionsAlso = [
    {
        choice_id: 1,
        total_choice_selections: 6,
        total_succcesses: 5,
        total_failures: 5,
        is_player_choice: true,
        is_player_success: false,
    },
];
exports.publicChoiceSelectionsOthers = [
    {
        choice_id: 2,
        total_choice_selections: 6,
        total_succcesses: 5,
        total_failures: 5,
        is_player_choice: false,
        is_player_success: false,
    },
];
exports.publicCheckSelectionsPlayerSuccess = [
    {
        choice_id: 3,
        total_choice_selections: 6,
        total_succcesses: 5,
        total_failures: 5,
        is_player_choice: true,
        is_player_success: true,
    },
];
exports.publicCheckSelectionsPlayerFailure = [
    {
        choice_id: 4,
        total_choice_selections: 6,
        total_succcesses: 5,
        total_failures: 5,
        is_player_choice: true,
        is_player_success: false,
    },
];
exports.publicChoices = [
    {
        sequence_id: 1,
        total_selections: 5,
        selection_details: [
            {
                choice_id: 1,
                is_player_choice: false,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
            {
                choice_id: 2,
                is_player_choice: false,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
            {
                choice_id: 3,
                is_player_choice: true,
                is_player_success: null,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
        ],
    },
    {
        sequence_id: 2,
        total_selections: 5,
        selection_details: [
            {
                choice_id: 1,
                is_player_choice: false,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
            {
                choice_id: 2,
                is_player_choice: false,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
            {
                choice_id: 3,
                is_player_choice: true,
                is_player_success: true,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
        ],
    },
    {
        sequence_id: 3,
        total_selections: 5,
        selection_details: [
            {
                choice_id: 1,
                is_player_choice: false,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
            {
                choice_id: 2,
                is_player_choice: false,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
            {
                choice_id: 3,
                is_player_choice: true,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
        ],
    },
    {
        sequence_id: 4,
        total_selections: 5,
        selection_details: [
            {
                choice_id: 1,
                is_player_choice: false,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
            {
                choice_id: 2,
                is_player_choice: false,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
            {
                choice_id: 3,
                is_player_choice: true,
                is_player_success: true,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
        ],
    },
    {
        sequence_id: 5,
        total_selections: 5,
        selection_details: [
            {
                choice_id: 1,
                is_player_choice: false,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
            {
                choice_id: 2,
                is_player_choice: false,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
            {
                choice_id: 3,
                is_player_choice: true,
                is_player_success: false,
                total_choice_selections: 5,
                total_failures: 5,
                total_succcesses: 5,
            },
        ],
    },
];
exports.oneCheckAction = {
    choice_id: 1,
    label: 'A Check',
    alignment: null,
    next: null,
    personal_choice_label: '',
    others_choice_label: '',
    score: 5,
    pass: 1,
    fail: 2,
    personal_fail: 'You Failed A Check',
    personal_success: 'You Passed A Check',
    others_fail: 'Other Players Failed A Check',
    others_success: 'Other Players Passed A Check',
};
exports.oneChoiceAction = {
    choice_id: 1,
    label: 'A Choice',
    alignment: alignment_enum_1.DungeonsDragonsAlignment.ChaoticGood,
    next: 1,
    personal_choice_label: 'A Personal Choice',
    others_choice_label: 'Other Choice',
    pass: null,
    fail: null,
    personal_fail: '',
    others_fail: '',
    others_success: '',
};
exports.oneCheckChallenge = {
    text: 'A Check',
    type: challenge_enum_1.ChallengeType.Check,
    actions: [
        exports.oneCheckAction,
    ]
};
exports.oneChoiceChallenge = {
    text: 'A Choice',
    type: challenge_enum_1.ChallengeType.Choice,
    actions: [
        exports.oneChoiceAction,
    ]
};
exports.oneChoice = {
    campaign_id: 1,
    sequence_id: 1,
    character_id: 1,
    choice_made_id: 1,
};
exports.oneSuccess = {
    campaign_id: 1,
    sequence_id: 1,
    character_id: 1,
    choice_made_id: 1,
    is_success: true,
};
exports.oneFailure = {
    campaign_id: 1,
    sequence_id: 1,
    character_id: 1,
    choice_made_id: 1,
    is_success: false,
};
exports.oneExpositionContent = {
    exposition: 'Exposition text',
    next: 1,
};
exports.oneCheckChallengeContent = {
    exposition: null,
    next: null,
    challenge: exports.oneCheckChallenge,
};
exports.oneChoiceChallengeContent = {
    exposition: null,
    next: null,
    challenge: exports.oneChoiceChallenge,
};
exports.oneView = {
    sequence_id: 1,
    content_type: content_enum_1.ContentType.Exposition,
    content: exports.oneExpositionContent,
};
exports.oneCampaign = {
    id: 1,
    name: 'All Along the Watchtower',
    epilogue: exports.epilogue,
    views: [
        exports.oneView,
        {
            sequence_id: 2,
            content_type: content_enum_1.ContentType.Challenge,
            content: exports.oneChoiceChallengeContent,
        },
        {
            sequence_id: 3,
            content_type: content_enum_1.ContentType.Challenge,
            content: exports.oneCheckChallengeContent,
        },
        {
            sequence_id: 4,
            content_type: content_enum_1.ContentType.Challenge,
            content: exports.oneCheckChallengeContent,
        },
    ],
};
exports.actionArray = [
    exports.oneChoiceAction,
    exports.oneCheckAction,
];
exports.challengeArray = [
    exports.oneCheckChallenge,
    exports.oneChoiceChallenge,
];
exports.choiceArray = [
    {
        campaign_id: 1,
        sequence_id: 1,
        character_id: 1,
        choice_made_id: 1,
    },
    {
        campaign_id: 1,
        sequence_id: 2,
        character_id: 1,
        choice_made_id: 1,
        is_success: true,
    },
    {
        campaign_id: 1,
        sequence_id: 3,
        character_id: 1,
        choice_made_id: 1,
        is_success: false,
    },
];
exports.playerChoicesGood = [
    {
        campaign_id: 1,
        sequence_id: 1,
        character_id: 1,
        choice_made_id: 1,
    },
    {
        campaign_id: 1,
        sequence_id: 2,
        character_id: 1,
        choice_made_id: 1,
    },
    {
        campaign_id: 1,
        sequence_id: 3,
        character_id: 1,
        choice_made_id: 1,
    },
    {
        campaign_id: 1,
        sequence_id: 4,
        character_id: 1,
        choice_made_id: 1,
    },
    {
        campaign_id: 1,
        sequence_id: 5,
        character_id: 1,
        choice_made_id: 1,
    }
];
exports.playerChoicesNeutralA = [
    {
        campaign_id: 1,
        sequence_id: 1,
        character_id: 1,
        choice_made_id: 2,
    },
    {
        campaign_id: 1,
        sequence_id: 2,
        character_id: 1,
        choice_made_id: 2,
    },
    {
        campaign_id: 1,
        sequence_id: 3,
        character_id: 1,
        choice_made_id: 2,
    },
    {
        campaign_id: 1,
        sequence_id: 4,
        character_id: 1,
        choice_made_id: 2,
    },
    {
        campaign_id: 1,
        sequence_id: 5,
        character_id: 1,
        choice_made_id: 2,
    }
];
exports.playerChoicesNeutralB = [
    {
        campaign_id: 1,
        sequence_id: 1,
        character_id: 1,
        choice_made_id: 1,
    },
    {
        campaign_id: 1,
        sequence_id: 2,
        character_id: 1,
        choice_made_id: 1,
    },
    {
        campaign_id: 1,
        sequence_id: 3,
        character_id: 1,
        choice_made_id: 2,
    },
    {
        campaign_id: 1,
        sequence_id: 4,
        character_id: 1,
        choice_made_id: 3,
    },
    {
        campaign_id: 1,
        sequence_id: 5,
        character_id: 1,
        choice_made_id: 3,
    }
];
exports.playerChoicesNeutralC = [
    {
        campaign_id: 1,
        sequence_id: 1,
        character_id: 1,
        choice_made_id: 2,
    },
    {
        campaign_id: 1,
        sequence_id: 2,
        character_id: 1,
        choice_made_id: 2,
    },
    {
        campaign_id: 1,
        sequence_id: 3,
        character_id: 1,
        choice_made_id: 2,
    },
    {
        campaign_id: 1,
        sequence_id: 4,
        character_id: 1,
        choice_made_id: 2,
    },
    {
        campaign_id: 1,
        sequence_id: 5,
        character_id: 1,
        choice_made_id: 2,
    }
];
exports.playerChoicesEvil = [
    {
        campaign_id: 1,
        sequence_id: 1,
        character_id: 1,
        choice_made_id: 3,
        is_success: null,
    },
    {
        campaign_id: 1,
        sequence_id: 2,
        character_id: 1,
        choice_made_id: 3,
        is_success: true,
    },
    {
        campaign_id: 1,
        sequence_id: 3,
        character_id: 1,
        choice_made_id: 3,
        is_success: false,
    },
    {
        campaign_id: 1,
        sequence_id: 4,
        character_id: 1,
        choice_made_id: 3,
        is_success: true,
    },
    {
        campaign_id: 1,
        sequence_id: 5,
        character_id: 1,
        choice_made_id: 3,
        is_success: false
    }
];
exports.contentArray = [
    exports.oneExpositionContent,
    exports.oneCheckChallengeContent,
];
exports.viewArray = [
    exports.oneView,
    {
        sequence_id: 2,
        content_type: content_enum_1.ContentType.Challenge,
        content: exports.oneCheckChallengeContent,
        campaign: exports.oneCampaign,
    },
];
exports.campaignArray = [
    exports.oneCampaign,
    {
        id: 2,
        name: 'All Along the Watchtower',
        epilogue: exports.epilogue,
        views: exports.viewArray,
    },
];
exports.choiceMadeDto = {
    campaign_id: 1,
    sequence_id: 1,
    character_id: 1,
    choice_made_id: 1,
};
exports.checkMadeDto = {
    campaign_id: 1,
    sequence_id: 1,
    character_id: 1,
    choice_made_id: 1,
    is_success: true,
};
exports.epilogueDto = {
    epilogue: 'A Good Ending',
    alignment: 'Good',
    content: [
        {
            player_choice: 'A Personal Choice',
            others_choice: '100% of other players also Other Choice'
        },
        {
            player_choice: 'You Failed A Check',
            others_choice: '125% of other players Other Players Failed A Check'
        },
    ],
};
exports.oneCampaignEpilogueDto = {
    epilogue: 'A Good Ending',
    alignment: 'Good',
    content: [
        {
            player_choice: 'A Personal Choice',
            others_choice: '125% of other players Other Choice'
        },
        {
            player_choice: 'You Failed A Check',
            others_choice: '100% of other players Other Players Passed A Check'
        },
    ],
};
exports.campaignDto = {
    id: 1,
    name: 'All Along the Watchtower',
    views: [
        {
            sequence_id: 1,
            content_type: content_enum_1.ContentType.Exposition,
            content: {
                exposition: 'Exposition text',
                next: 1,
            },
        },
        {
            sequence_id: 2,
            content_type: content_enum_1.ContentType.Challenge,
            content: {
                challenge: {
                    text: 'A Choice',
                    type: challenge_enum_1.ChallengeType.Choice,
                    actions: [
                        {
                            id: 1,
                            label: 'A Choice',
                            alignment: alignment_enum_1.DungeonsDragonsAlignment.ChaoticGood,
                            next: 1,
                        },
                    ],
                }
            }
        },
        {
            sequence_id: 3,
            content_type: content_enum_1.ContentType.Challenge,
            content: {
                challenge: {
                    text: 'A Check',
                    type: challenge_enum_1.ChallengeType.Check,
                    actions: [
                        {
                            id: 1,
                            label: 'A Check',
                            pass: 1,
                            fail: 2,
                            score: 5,
                        },
                    ],
                }
            }
        },
        {
            sequence_id: 4,
            content_type: content_enum_1.ContentType.Challenge,
            content: {
                challenge: {
                    text: 'A Check',
                    type: challenge_enum_1.ChallengeType.Check,
                    actions: [
                        {
                            id: 1,
                            label: 'A Check',
                            pass: 1,
                            fail: 2,
                            score: 5,
                        },
                    ],
                }
            }
        },
    ],
};
exports.campaignDtos = [
    exports.campaignDto,
    {
        id: 2,
        name: 'All Along the Watchtower',
        views: [
            {
                sequence_id: 1,
                content_type: content_enum_1.ContentType.Exposition,
                content: {
                    exposition: 'Exposition text',
                    next: 1,
                },
            },
            {
                sequence_id: 2,
                content_type: content_enum_1.ContentType.Challenge,
                content: {
                    challenge: {
                        type: challenge_enum_1.ChallengeType.Check,
                        text: 'A Check',
                        actions: [
                            {
                                id: 1,
                                label: 'A Check',
                                score: 5,
                                pass: 1,
                                fail: 2,
                            },
                        ],
                    },
                },
            },
        ],
    },
];
exports.majorChoicesDto = [
    {
        player_choice: 'A Personal Choice',
        others_choice: '125% of other players Others Choice',
    },
    {
        player_choice: 'A Personal Choice',
        others_choice: '125% of other players Others Choice',
    },
];
exports.gameStateDto = {
    campaign_id: 1,
    character_id: 1,
};
exports.choicesDto = [
    {
        choice_made_id: 1,
    },
    {
        choice_made_id: 1,
        is_success: true,
    },
    {
        choice_made_id: 1,
        is_success: false,
    },
];
exports.choiceDto = {
    choice_made_id: 1,
};
exports.checkDto = {
    choice_made_id: 1,
    is_success: true,
};
//# sourceMappingURL=mock-data.mock.js.map