export type Action = Choice | Check;
export type ActionType = 'choice' | 'check';

export interface Choice {
  id: number;
}

export interface Check {
  id: number;
  success: boolean;
}

export interface Event {
  sequence_id: number;
  action_type: ActionType;
  action: Action;
}

export interface SaveFile {
  campaign_id: number;
  character_id: number;
  last_sequence_id: number;
  history: Event[];
}
