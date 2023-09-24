import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CampaignService } from './campaign.service';
import { CampaignDto } from './dto/campaign.dto';

@ApiTags('Campaign')
@Controller('campaign')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @Get('')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'A list of all the campaign builds',
    type: CampaignDto,
    isArray: true,
  })
  async getCampaigns(): Promise<CampaignDto[]> {
    return await this.campaignService.getAllCampaigns();
  }
}
