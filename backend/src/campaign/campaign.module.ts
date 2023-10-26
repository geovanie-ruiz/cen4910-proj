import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { ActionEntity } from './entity/action.entity';
import { CampaignEntity } from './entity/campaign.entity';
import { ChallengeEntity } from './entity/challenge.entity';
import { ChoiceEntity } from './entity/choice.entity';
import { ContentEntity } from './entity/content.entity';
import { ViewEntity } from './entity/view.entity';

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
  exports: [CampaignService],
})
export class CampaignModule {}
