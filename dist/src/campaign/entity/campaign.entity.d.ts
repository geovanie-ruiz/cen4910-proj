import { ViewEntity } from './view.entity';
import { AbstractEntity } from '../../common/abstract.entity';
import { CampaignEpilogue } from '../interfaces/epilogue.interface';
export declare class CampaignEntity extends AbstractEntity {
    name: string;
    epilogue: CampaignEpilogue;
    views: ViewEntity[];
}
