import { axiosRequest } from "../utils/axios"
import { range } from "../utils/array"
import { pokemonTypes } from "../utils/pokemonsTypes"

// We get from the API 150 pokemons
export const service_getPokemons = () => 
    range(1, 150)
        .map((num) => getPokemonFromAPI(num))
        .map((pokemonPromes) => 
                pokemonPromes
                    .then(pokemon => {
                            const pokemonFormated = formatPokemon(pokemon)
                            const type = pokemonTypes(pokemonFormated)

                            return {
                                pokemonTypes: type,
                                pokemons: pokemonFormated,
                            }
                        })
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
        type: pokemon.types,
    })

