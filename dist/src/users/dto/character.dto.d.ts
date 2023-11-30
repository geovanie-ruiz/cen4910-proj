export type ClassName = 'Brute' | 'Wizard' | 'Gambler';
export declare class CharacterDto {
    name: string;
    class: ClassName;
    strength: number;
    intelligence: number;
    luck: number;
}
