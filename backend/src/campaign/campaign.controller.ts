import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CampaignService } from './campaign.service';
import { CampaignDto } from './dto/campaign.dto';

@ApiTags('Campaign')
@Controller('campaign')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @Get('/all')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'A list of all the campaign builds',
    type: CampaignDto,
    isArray: true,
  })
  async getCampaigns(): Promise<CampaignDto[]> {
    return await this.campaignService.getAllCampaigns();
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'A campaign by ID if one is found',
    type: CampaignDto,
  })
  async getCampaignById(@Param('id') campaignId: number): Promise<CampaignDto> {
    return await this.campaignService.getCampaignById(campaignId);
  }
}
