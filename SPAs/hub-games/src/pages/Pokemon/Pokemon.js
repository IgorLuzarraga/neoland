import './Pokemon.css'
import { service_getPokemons } from '../../services/pokemon.service'
//import { service_getPokemons } from '../../services/pokemon.service2'

const template = () => `<div class="galleryPokemon"></div>`
const templateFigure = (pokemon) => `
    <figure class='figurePokemon'>
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h2>${pokemon.name}</h2>
    </figure>
`

const addPokemonToGalley = (pokemon) => 
    document
        .querySelector('.galleryPokemon')
        .innerHTML +=  templateFigure(pokemon)

// Version 1 -- uses --> services/pokemon.service
const getPokemons = async () => {
    const pokemons = await service_getPokemons()
    pokemons.forEach(addPokemonToGalley)
}

// Version 2 -- uses --> services/pokemon.service2
const getPokemons2 =  () => {
    const pokemonsPromise = service_getPokemons()
        pokemonsPromise.forEach(promise => {
            promise
                .then(addPokemonToGalley)
                .catch(error => console.log(error))
        })
}

export const printTemplate = () => {
    document.querySelector('main').innerHTML = template()
    getPokemons()
}


