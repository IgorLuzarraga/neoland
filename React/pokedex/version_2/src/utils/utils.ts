import { Pokemon, PokemonFromServer } from "../types/pokemonTypes"


const initialPokemon: Pokemon = {
    name: '',
    number: -1,
    species: "",
    image: "",
    hp: -1,
    attack: -1,
    defense: -1,
    speed: -1,
    type: "",
}

export const createPokemon = (pokemonData: PokemonFromServer | undefined): Pokemon => {
    if (!pokemonData) return initialPokemon
  
    return {
        name: pokemonData.name,
        number: pokemonData.id,
        species: pokemonData.species.name,
        image: pokemonData.sprites.front_default,
        hp: pokemonData.stats[0].base_stat,
        attack: pokemonData.stats[1].base_stat,
        defense: pokemonData.stats[2].base_stat,
        speed: pokemonData.stats[5].base_stat,
        type: pokemonData.types[0].type.name,
    }
}
