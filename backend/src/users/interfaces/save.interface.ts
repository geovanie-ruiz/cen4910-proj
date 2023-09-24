export interface Choice {
  question_id: number;
  answer_id: number;
}

export interface SaveFile {
  campaign_id: number;
  choices: Choice[];
}
