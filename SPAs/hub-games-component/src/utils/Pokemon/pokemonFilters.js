import { AddPokemonToGallery, AddPokemonsToGallery } from "../../components/Pokemon/PokemonsGallery/PokemonsGallery"

const byName = name => pokemon =>
    pokemon
        .name
        .toLowerCase()
        .includes(name.toLowerCase())

export const filterPokemonByName = async (name, pokemonDataFromService) => {
    document.querySelector('.galleryPokemon').innerHTML = ""

    console.log('name: ', name)
    console.log('filterPokemonByName: ', pokemonDataFromService)

    pokemonDataFromService.pokemons
        .filter(byName(name))
        .forEach(AddPokemonToGallery)
}

// Note: There are (in each pokemon) two kind of types
// called type 0 and type 1
export const filterPokemonByType = (type, pokemonDataFromService) => {
    const pokemonsFilterdByType_0 = 
        pokemonDataFromService.pokemons.filter((pokemon) => 
            pokemon.type[0].type.name
                .toLowerCase()
                .includes(type.toLowerCase())
    )

    if (pokemonsFilterdByType_0.length === 0) {
    // We didn't find any pokemon type 0, so we filter
    // again, this time for type 1
    const pokemonsFilterdByType_1 = 
        pokemonDataFromService.pokemons.filter((pokemon) =>
            pokemon.type[1]?.type.name
                .toLowerCase()
                .includes(type.toLowerCase())
    )
        AddPokemonsToGallery(pokemonsFilterdByType_1)
    } else {
        AddPokemonsToGallery(pokemonsFilterdByType_0)
    }
}

