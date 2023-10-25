import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignEntity } from './entity/campaign.entity';
import { ViewEntity } from './entity/view.entity';
import { ContentEntity } from './entity/content.entity';
import { ChallengeEntity } from './entity/challenge.entity';
import { ActionEntity } from './entity/action.entity';
import { ChoiceEntity } from './entity/choice.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CampaignEntity,
      ViewEntity,
      ContentEntity,
      ChallengeEntity,
      ActionEntity,
      ChoiceEntity,
    ]),
  ],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}
