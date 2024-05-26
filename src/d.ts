export interface Info {
    readonly count: number;
    readonly pages: number;
    readonly next: string;
    readonly prev: string;
}

export interface LocationCharacter {
    readonly name: string;
    readonly url: string;
}

export interface Character {
    readonly id: number;
    readonly name: string;
    readonly status: string;
    readonly species: string;
    readonly type: string;
    readonly gender: string;
    readonly origin: LocationCharacter;
    readonly location: LocationCharacter;
    readonly image: string;
    readonly episode: string[];
    readonly url: string;
    readonly created: Date;
}

export interface APIResponse {
    readonly info: Info;
    readonly results: Character[];
}

export interface Location {
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly dimension: string;
    readonly residents: string[];
    readonly url: string;
    readonly created: Date;
}
