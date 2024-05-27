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
    readonly origin: LocationCharacter;
    readonly image: string;
}

export interface Location {
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly dimension: string;
}

export interface APIResponse {
    readonly info: Info;
    readonly results: Character[] | Location[];
}

export interface FavoritesCharacters {
    readonly character_id: number;
}

export interface FavoritesLocations {
    readonly location_id: number;
}

export interface SupabaseUser {
    id: string;
    email?: string;
  }

export interface SupabaseSession {
    user: SupabaseUser | null;
    access_token: string | null;
    expires_at: string | null;
  }

export interface FavoriteCharacter {
    readonly id: number;
    readonly name: string;
    readonly status: string;
    readonly species: string;
    readonly type: string;
    readonly gender: string;
    readonly origin: Location;
    readonly location: Location;
    readonly image: string;
    readonly episode: string[];
    readonly url: string;
    readonly created: Date;
}

export interface FavoriteLocation {
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly dimension: string;
    readonly residents: string[];
    readonly url: string;
    readonly created: Date;
}
