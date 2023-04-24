export type Pokemon = {
    name: string,
    number: number,
    species: string,
    image: string,
    hp: number,
    attack: number,
    defense: number,
    speed: number,
    type: string,
}

export type PokemonFromServer = {
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];
    base_experience: number;
    height: number;
    id: number;
    name: string;
    species: {
      name: string;
      url: string;
    };
    sprites: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
      other: {
        dream_world: {
          front_default: string | null;
          front_female: string | null;
        };
        'official-artwork': {
          front_default: string | null;
        };
      };
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    weight: number;
}
  
