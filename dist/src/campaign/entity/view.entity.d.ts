import { AbstractEntity } from '../../common/abstract.entity';
import { ContentType } from '../enum/content.enum';
import { CampaignEntity } from './campaign.entity';
import { ContentEntity } from './content.entity';
export declare class ViewEntity extends AbstractEntity {
    sequence_id: number;
    content_type: ContentType;
    content: ContentEntity;
    campaign: CampaignEntity;
}
