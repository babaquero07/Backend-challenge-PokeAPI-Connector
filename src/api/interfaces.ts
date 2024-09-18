export interface OnePokemon {
  name: string;
  url: string;
}

export interface PokemonsResponse {
  results: OnePokemon[];
}

export interface Pokemon {
  name: string;
  types: TypeElement[];
}

export interface TypeElement {
  slot: number;
  type: TypeType;
}

export interface TypeType {
  name: string;
  url: string;
}

export interface PokemonResponse {
  name: string;
  types: TypeElement[];
}

export interface PokemonAndTypesResponse {
  name: string;
  types: TypeElement[];
}

export interface TypeElement {
  slot: number;
  type: TypeType;
}

export interface TypeType {
  name: string;
  url: string;
  names: Name[];
}

export interface Name {
  language: Language;
  name: string;
}

export interface Language {
  name: string;
  url: string;
}
