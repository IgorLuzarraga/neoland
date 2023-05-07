import { axiosRequest } from "../utils/axios"
import { pokemonTypes } from "../utils/pokemonsTypes";

// We get from the API 150 pokemons
export const service_getPokemons = async () => {
  const pokemons = []
  for (let i = 1; i < 151; i++) {
    pokemons.push(await getPokemonFromAPI(i))
  }

  const pokemonsFormated = formatPokemons(pokemons)
  const type = pokemonTypes(pokemonsFormated)

  return {
    pokemonTypes: type,
    pokemons: pokemonsFormated,
  }
}

const getPokemonFromAPI = async (id) => {
    const optionsRequest = {
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${id}`
    }
    return await axiosRequest(optionsRequest)
}

const formatPokemon = pokemon => 
    ({
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types,
    })

const formatPokemons = (pokemons) => pokemons.map(formatPokemon)
