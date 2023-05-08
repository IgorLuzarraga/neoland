import './PokemonsGallery.css'
import { CardPokemon } from '../CardPokemon/CardPokemon'

const cleanGallery = () => 
    document
        .querySelector('.galleryPokemon')
        .innerHTML = ''

export const AddPokemonToGallery = (pokemon) => 
    document
        .querySelector('.galleryPokemon')
        .innerHTML +=  CardPokemon(pokemon)


export const AddPokemonsToGallery = (pokemons) => {
    cleanGallery()
    pokemons.forEach(AddPokemonToGallery)
}
