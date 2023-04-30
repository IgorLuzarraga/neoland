import { axiosRequest } from "../utils/axios"
import { range } from "../utils/array"

// We get from the API 150 pokemons
export const service_getPokemons = () => 
    range(1, 150)
        .map((num) => getPokemonFromAPI(num))
        .map((pokemonPromes) => 
                pokemonPromes
                    .then(prokemon => formatPokemon(prokemon))
        )

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
    })

