import { MetaAlignment } from '../dto/epilogue.dto';
import { DungeonsDragonsAlignment } from '../enum/alignment.enum';

export interface PublicChoiceSelection {
  choice_id: number;
  total_choice_selections: number;
  total_succcesses: number;
  total_failures: number;
  is_player_choice: boolean;
  is_player_success: boolean;
}

export interface PublicChoice {
  sequence_id: number;
  total_selections: number;
  selection_details: PublicChoiceSelection[];
}

export interface PlayerChoice {
  sequence_id: number;
  choice_id: number;
}

export interface ChoiceOption {
  choice_id: number;
  alignment: DungeonsDragonsAlignment;
  personal_choice: string;
  others_choice_template: string;
  personal_fail: string;
  personal_success: string;
  others_fail: string;
  others_success: string;
}

export interface CampaignChoice {
  sequence_id: number;
  options: ChoiceOption[];
}

export interface CampaignEndings {
  alignment: MetaAlignment;
  epilogue: string;
}

export interface MajorChoice {
  sequence_id: number;
}

export interface CampaignEpilogue {
  epilogue_options: CampaignEndings[];
  major_choices: MajorChoice[];
}
