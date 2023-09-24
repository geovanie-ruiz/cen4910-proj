import { IsNotEmpty } from 'class-validator';

export class ChoiceDto {
  @IsNotEmpty()
  question_id: number;

  @IsNotEmpty()
  answer_id: number;
}

export class SaveDto {
  @IsNotEmpty()
  filename: string;

  @IsNotEmpty()
  campaign_id: number;

  @IsNotEmpty()
  choices: ChoiceDto[];
}
