import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CampaignService } from './campaign.service';
import { CampaignDto } from './dto/campaign.dto';
import { EpilogueDto } from './dto/epilogue.dto';
import { GameStateDto } from 'src/users/dto/gamestate.dto';
import { ChoiceMadeDto } from './dto/choice-made.dto';
import { ChoiceDto } from './dto/choice.dto';

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

  @Post('/ending')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Returns the campaign ending based on gameplay results.',
    type: EpilogueDto,
  })
  async getCampaignEnding(
    @Body() gameState: GameStateDto,
  ): Promise<EpilogueDto> {
    return await this.campaignService.getCampaignEnding(gameState);
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

  @Post('/choice/set')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: "Updated or created a character's choice.",
    type: ChoiceMadeDto,
  })
  async createChoiceRecord(@Body() playerChoice: ChoiceMadeDto) {
    return await this.campaignService.createChoiceRecord(playerChoice);
  }

  @Get('/choice/:cid/:sid/:chid')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Get a choice by composite identifier',
    type: ChoiceDto,
  })
  async getChoiceById(
    @Param('cid') campaignId: number,
    @Param('sid') sequenceId: number,
    @Param('chid') characterId: number,
  ): Promise<ChoiceDto> {
    return await this.campaignService.getChoiceById(
      campaignId,
      sequenceId,
      characterId,
    );
  }

  @Get('/choice/:cid/:chid')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Get choices for a character for a campaign',
    type: ChoiceDto,
    isArray: true,
  })
  async getChoicesByCampaign(
    @Param('cid') campaignId: number,
    @Param('chid') characterId: number,
  ): Promise<ChoiceDto[]> {
    return await this.campaignService.getChoicesByCampaign(
      campaignId,
      characterId,
    );
  }
}
