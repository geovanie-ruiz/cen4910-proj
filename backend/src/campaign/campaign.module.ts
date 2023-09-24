import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignEntity } from './entity/campaign.entity';
import { QuestionEntity } from './entity/question.entity';
import { AnswerEntity } from './entity/answer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CampaignEntity, QuestionEntity, AnswerEntity]),
  ],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}
