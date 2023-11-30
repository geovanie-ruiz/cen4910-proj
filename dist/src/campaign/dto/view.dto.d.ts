import { ContentType } from '../enum/content.enum';
import { ContentExpositionDto } from './content-exposition.dto';
import { ContentChallengeDto } from './content-challenge.dto';
export declare class ViewDto {
    sequence_id: number;
    content_type: ContentType;
    content: ContentExpositionDto | ContentChallengeDto;
}
