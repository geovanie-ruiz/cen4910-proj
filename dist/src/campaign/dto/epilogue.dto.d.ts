export type MetaAlignment = 'Good' | 'Neutral' | 'Evil';
export declare class MajorChoiceDto {
    player_choice: string;
    others_choice: string;
}
export declare class EpilogueDto {
    epilogue: string;
    alignment: MetaAlignment;
    content: MajorChoiceDto[];
}
