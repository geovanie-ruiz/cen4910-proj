import { GameStateDto } from "src/users/dto/gamestate.dto";
import { CampaignDto } from "../dto/campaign.dto";
import { ChoiceMadeDto } from "../dto/choice-made.dto";
import { ChoiceDto } from "../dto/choice.dto";
import { EpilogueDto, MajorChoiceDto } from "../dto/epilogue.dto";
import { ActionEntity } from "../entity/action.entity";
import { CampaignEntity } from "../entity/campaign.entity";
import { ChallengeEntity } from "../entity/challenge.entity";
import { ChoiceEntity } from "../entity/choice.entity";
import { ContentEntity } from "../entity/content.entity";
import { ViewEntity } from "../entity/view.entity";
import { DungeonsDragonsAlignment } from "../enum/alignment.enum";
import { ChallengeType } from "../enum/challenge.enum";
import { ContentType } from "../enum/content.enum";
import { CampaignChoice, CampaignEndings, CampaignEpilogue, ChoiceOption, MajorChoice, PublicChoice, PublicChoiceSelection } from "../interfaces/epilogue.interface";

/*
	Mock objects
*/
export const campaignEnding = {
	alignment: 'Good',
	epilogue: 'A Good Ending',
} as CampaignEndings;

export const campaignEndings = [
	campaignEnding,
	{
		alignment: 'Neutral',
		epilogue: 'A Neutral Ending',
	},
	{
		alignment: 'Evil',
		epilogue: 'An Evil Ending',
	},
] as CampaignEndings[];

export const majorChoice = {
	sequence_id: 2
} as MajorChoice;

export const majorChoices = [
	majorChoice,
	{
		sequence_id: 3,
	},
] as MajorChoice[];

export const epilogue = {
	epilogue_options: campaignEndings,
	major_choices: majorChoices,
} as CampaignEpilogue;

export const oneCampaignChoices = [
	{
		sequence_id: 2,
		options: [
			{
				choice_id: 1,
				alignment: DungeonsDragonsAlignment.ChaoticGood,
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
] as CampaignChoice[];

export const campaignChoices = [
	{
		sequence_id: 1,
		options: [
			{
				choice_id: 1,
				alignment: DungeonsDragonsAlignment.LawfulGood,
				personal_choice: 'A Personal Choice',
				others_choice_template: 'Others Choice',
				personal_fail: 'A Personal Fail',
				personal_success: 'A Personal Success',
				others_fail: 'Others Fail',
				others_success: 'Others Success',
			},
			{
				choice_id: 2,
				alignment: DungeonsDragonsAlignment.LawfulNeutral,
				personal_choice: 'A Personal Choice',
				others_choice_template: 'Others Choice',
				personal_fail: 'A Personal Fail',
				personal_success: 'A Personal Success',
				others_fail: 'Others Fail',
				others_success: 'Others Success',
			},
			{
				choice_id: 3,
				alignment: DungeonsDragonsAlignment.LawfulEvil,
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
				alignment: DungeonsDragonsAlignment.LawfulGood,
				personal_choice: 'A Personal Choice',
				others_choice_template: 'Others Choice',
				personal_fail: 'A Personal Fail',
				personal_success: 'A Personal Success',
				others_fail: 'Others Fail',
				others_success: 'Others Success',
			},
			{
				choice_id: 2,
				alignment: DungeonsDragonsAlignment.LawfulNeutral,
				personal_choice: 'A Personal Choice',
				others_choice_template: 'Others Choice',
				personal_fail: 'A Personal Fail',
				personal_success: 'A Personal Success',
				others_fail: 'Others Fail',
				others_success: 'Others Success',
			},
			{
				choice_id: 3,
				alignment: DungeonsDragonsAlignment.LawfulEvil,
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
				alignment: DungeonsDragonsAlignment.LawfulGood,
				personal_choice: 'A Personal Choice',
				others_choice_template: 'Others Choice',
				personal_fail: 'A Personal Fail',
				personal_success: 'A Personal Success',
				others_fail: 'Others Fail',
				others_success: 'Others Success',
			},
			{
				choice_id: 2,
				alignment: DungeonsDragonsAlignment.LawfulNeutral,
				personal_choice: 'A Personal Choice',
				others_choice_template: 'Others Choice',
				personal_fail: 'A Personal Fail',
				personal_success: 'A Personal Success',
				others_fail: 'Others Fail',
				others_success: 'Others Success',
			},
			{
				choice_id: 3,
				alignment: DungeonsDragonsAlignment.LawfulEvil,
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
				alignment: DungeonsDragonsAlignment.LawfulGood,
				personal_choice: 'A Personal Choice',
				others_choice_template: 'Others Choice',
				personal_fail: 'A Personal Fail',
				personal_success: 'A Personal Success',
				others_fail: 'Others Fail',
				others_success: 'Others Success',
			},
			{
				choice_id: 2,
				alignment: DungeonsDragonsAlignment.LawfulNeutral,
				personal_choice: 'A Personal Choice',
				others_choice_template: 'Others Choice',
				personal_fail: 'A Personal Fail',
				personal_success: 'A Personal Success',
				others_fail: 'Others Fail',
				others_success: 'Others Success',
			},
			{
				choice_id: 3,
				alignment: DungeonsDragonsAlignment.LawfulEvil,
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
				alignment: DungeonsDragonsAlignment.LawfulGood,
				personal_choice: 'A Personal Choice',
				others_choice_template: 'Others Choice',
				personal_fail: 'A Personal Fail',
				personal_success: 'A Personal Success',
				others_fail: 'Others Fail',
				others_success: 'Others Success',
			},
			{
				choice_id: 2,
				alignment: DungeonsDragonsAlignment.LawfulNeutral,
				personal_choice: 'A Personal Choice',
				others_choice_template: 'Others Choice',
				personal_fail: 'A Personal Fail',
				personal_success: 'A Personal Success',
				others_fail: 'Others Fail',
				others_success: 'Others Success',
			},
			{
				choice_id: 3,
				alignment: DungeonsDragonsAlignment.LawfulEvil,
				personal_choice: 'A Personal Choice',
				others_choice_template: 'Others Choice',
				personal_fail: 'A Personal Fail',
				personal_success: 'A Personal Success',
				others_fail: 'Others Fail',
				others_success: 'Others Success',
			},
		],
	}
] as CampaignChoice[];

export const optionPersonal = {
	choice_id: 1,
	alignment: DungeonsDragonsAlignment.TrueNeutral,
	personal_choice: 'A Personal Choice',
} as ChoiceOption;

export const optionSuccess = {
	choice_id: 1,
	alignment: DungeonsDragonsAlignment.TrueNeutral,
	personal_choice: '',
	personal_success: 'A Personal Success',
} as ChoiceOption;

export const optionFailure = {
	choice_id: 1,
	alignment: DungeonsDragonsAlignment.TrueNeutral,
	personal_choice: null,
	personal_fail: 'A Personal Failure',
} as ChoiceOption;

export const choiceOptions = [
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
] as ChoiceOption[];

export const publicChoiceSelectionsAlso = [
	{
		choice_id: 1,
		total_choice_selections: 6,
		total_succcesses: 5,
		total_failures: 5,
		is_player_choice: true,
		is_player_success: false,
	},
] as PublicChoiceSelection[];

export const publicChoiceSelectionsOthers = [
	{
		choice_id: 2,
		total_choice_selections: 6,
		total_succcesses: 5,
		total_failures: 5,
		is_player_choice: false,
		is_player_success: false,
	},
] as PublicChoiceSelection[];

export const publicCheckSelectionsPlayerSuccess = [
	{
		choice_id: 3,
		total_choice_selections: 6,
		total_succcesses: 5,
		total_failures: 5,
		is_player_choice: true,
		is_player_success: true,
	},
] as PublicChoiceSelection[];

export const publicCheckSelectionsPlayerFailure = [
	{
		choice_id: 4,
		total_choice_selections: 6,
		total_succcesses: 5,
		total_failures: 5,
		is_player_choice: true,
		is_player_success: false,
	},
] as PublicChoiceSelection[];

export const publicChoices = [
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
] as PublicChoice[];

/*
	Mock Entity Instance
*/
export const oneCheckAction = {
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
} as ActionEntity;
export const oneChoiceAction = {
	choice_id: 1,
	label: 'A Choice',
	alignment: DungeonsDragonsAlignment.ChaoticGood,
	next: 1,
	personal_choice_label: 'A Personal Choice',
	others_choice_label: 'Other Choice',
	pass: null,
	fail: null,
	personal_fail: '',
	others_fail: '',
	others_success: '',
} as ActionEntity;
export const oneCheckChallenge = {
	text: 'A Check',
	type: ChallengeType.Check,
	actions: [
		oneCheckAction,
	]
} as ChallengeEntity;
export const oneChoiceChallenge = {
	text: 'A Choice',
	type: ChallengeType.Choice,
	actions: [
		oneChoiceAction,
	]
} as ChallengeEntity;
export const oneChoice = {
	campaign_id: 1,
	sequence_id: 1,
	character_id: 1,
	choice_made_id: 1,
} as ChoiceEntity;
export const oneSuccess = {
	campaign_id: 1,
	sequence_id: 1,
	character_id: 1,
	choice_made_id: 1,
	is_success: true,
} as ChoiceEntity;
export const oneFailure = {
	campaign_id: 1,
	sequence_id: 1,
	character_id: 1,
	choice_made_id: 1,
	is_success: false,
} as ChoiceEntity;
export const oneExpositionContent = {
	exposition: 'Exposition text',
	next: 1,
} as ContentEntity;
export const oneCheckChallengeContent = {
	exposition: null,
	next: null,
	challenge: oneCheckChallenge,
} as ContentEntity;
export const oneChoiceChallengeContent = {
	exposition: null,
	next: null,
	challenge: oneChoiceChallenge,
} as ContentEntity;
export const oneView = {
	sequence_id: 1,
	content_type: ContentType.Exposition,
	content: oneExpositionContent,
} as ViewEntity;
export const oneCampaign = {
	id: 1,
	name: 'All Along the Watchtower',
	epilogue: epilogue,
	views: [
		oneView,
		{
			sequence_id: 2,
			content_type: ContentType.Challenge,
			content: oneChoiceChallengeContent,
		},
		{
			sequence_id: 3,
			content_type: ContentType.Challenge,
			content: oneCheckChallengeContent,
		},
		{
			sequence_id: 4,
			content_type: ContentType.Challenge,
			content: oneCheckChallengeContent,
		},
	],
} as CampaignEntity;

/*
	Mock Entity Tables
*/
export const actionArray = [
	oneChoiceAction,
	oneCheckAction,
] as ActionEntity[];

export const challengeArray = [
	oneCheckChallenge,
	oneChoiceChallenge,
] as ChallengeEntity[];

export const choiceArray = [
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
] as ChoiceEntity[];

export const playerChoicesGood = [
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
] as ChoiceEntity[];

export const playerChoicesNeutralA = [
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
] as ChoiceEntity[];

export const playerChoicesNeutralB = [
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
] as ChoiceEntity[];

export const playerChoicesNeutralC = [
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
] as ChoiceEntity[];

export const playerChoicesEvil = [
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
] as ChoiceEntity[];

export const contentArray = [
	oneExpositionContent,
	oneCheckChallengeContent,
] as ContentEntity[];

export const viewArray = [
	oneView,
	{
		sequence_id: 2,
		content_type: ContentType.Challenge,
		content: oneCheckChallengeContent,
		campaign: oneCampaign,
	},
] as ViewEntity[];

export const campaignArray = [
	oneCampaign,
	{
		id: 2,
		name: 'All Along the Watchtower',
		epilogue: epilogue,
		views: viewArray,
	},
] as CampaignEntity[];

/*
	Data Transfer Objects
*/
export const choiceMadeDto = {
	campaign_id: 1,
	sequence_id: 1,
	character_id: 1,
	choice_made_id: 1,
} as ChoiceMadeDto;

export const checkMadeDto = {
	campaign_id: 1,
	sequence_id: 1,
	character_id: 1,
	choice_made_id: 1,
	is_success: true,
} as ChoiceMadeDto;

export const epilogueDto = {
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
} as EpilogueDto;

export const oneCampaignEpilogueDto = {
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
} as EpilogueDto;

export const campaignDto = {
	id: 1,
	name: 'All Along the Watchtower',
	views: [
		{
			sequence_id: 1,
			content_type: ContentType.Exposition,
			content: {
				exposition: 'Exposition text',
				next: 1,
			},
		},
		{
			sequence_id: 2,
			content_type: ContentType.Challenge,
			content: {
				challenge: {
					text: 'A Choice',
					type: ChallengeType.Choice,
					actions: [
						{
							id: 1,
							label: 'A Choice',
							alignment: DungeonsDragonsAlignment.ChaoticGood,
							next: 1,
						},
					],
				}
			}
		},
		{
			sequence_id: 3,
			content_type: ContentType.Challenge,
			content: {
				challenge: {
					text: 'A Check',
					type: ChallengeType.Check,
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
			content_type: ContentType.Challenge,
			content: {
				challenge: {
					text: 'A Check',
					type: ChallengeType.Check,
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
} as CampaignDto;

export const campaignDtos = [
	campaignDto,
	{
		id: 2,
		name: 'All Along the Watchtower',
		views: [
			{
				sequence_id: 1,
				content_type: ContentType.Exposition,
				content: {
					exposition: 'Exposition text',
					next: 1,
				},
			},
			{
				sequence_id: 2,
				content_type: ContentType.Challenge,
				content: {
					challenge: {
						type: ChallengeType.Check,
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
] as CampaignDto[];

export const majorChoicesDto = [
	{
		player_choice: 'A Personal Choice',
		others_choice: '125% of other players Others Choice',
	},
	{
		player_choice: 'A Personal Choice',
		others_choice: '125% of other players Others Choice',
	},
] as MajorChoiceDto[];

export const gameStateDto = {
	campaign_id: 1,
	character_id: 1,
} as GameStateDto;

export const choicesDto = [
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
] as ChoiceDto[];

export const choiceDto = {
	choice_made_id: 1,
} as ChoiceDto;

export const checkDto = {
	choice_made_id: 1,
	is_success: true,
} as ChoiceDto;