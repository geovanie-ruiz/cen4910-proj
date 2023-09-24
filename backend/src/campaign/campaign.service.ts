import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CampaignEntity } from './entity/campaign.entity';
import { Repository } from 'typeorm';
import { QuestionEntity } from './entity/question.entity';
import { AnswerEntity } from './entity/answer.entity';
import { CampaignDto } from './dto/campaign.dto';
import { QuestionDto } from './dto/question.dto';
import { AnswerDto } from './dto/answer.dto';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(CampaignEntity)
    private readonly campaignRepo: Repository<CampaignEntity>,
    @InjectRepository(QuestionEntity)
    private readonly questionRepo: Repository<QuestionEntity>,
    @InjectRepository(AnswerEntity)
    private readonly answerRepo: Repository<AnswerEntity>,
  ) {}

  private toCampaignDto(data: CampaignEntity[]): CampaignDto[] {
    const campaignData: CampaignDto[] = data.map((campaign) => {
      const { id, name, questions } = campaign;

      const questionsData: QuestionDto[] = questions.map((question) => {
        const { id, text, answers } = question;

        const answersData: AnswerDto[] = answers.map((answer) => {
          const { id, text, score, alignment } = answer;

          const answerDto: AnswerDto = {
            id,
            text,
            score,
            alignment,
          };

          return answerDto;
        });

        const questionDto: QuestionDto = {
          id,
          text,
          answers: answersData,
        };

        return questionDto;
      });

      const campaignDto: CampaignDto = {
        id,
        name,
        questions: questionsData,
      };

      return campaignDto;
    });

    return campaignData;
  }

  async getAllCampaigns(): Promise<CampaignDto[]> {
    const campaigns = await this.campaignRepo.find({
      relations: {
        questions: {
          answers: true,
        },
      },
    });
    return this.toCampaignDto(campaigns);
  }
}
