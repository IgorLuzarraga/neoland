import './Pokemon.css'
import { service_getPokemons } from '../../services/pokemon.service'
//import { service_getPokemons } from '../../services/pokemon.service2'
import {Loading} from "../../components/Loading/Loading"

const template = () => `
    <div class="spinner"></div>
    <div class="galleryPokemon"></div>
    `
const templateFigure = (pokemon) => `
    <figure class='figurePokemon'>
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h2>${pokemon.name}</h2>
    </figure>
`

const addSpinner = () => {
    // Render a spinner
    const spinnerContainer = document.querySelector(".spinner")
    spinnerContainer.innerHTML = Loading()
}

const removeSpinner = () => {
    const spinnerContainer = document.querySelector(".spinner")
    spinnerContainer.innerHTML = ""
}

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
    // insert the page's Html
    document.querySelector('main').innerHTML = template()

    // Render a spinner before fetch
    addSpinner()

    // Delay of 2 seconds to check if the spinner is shown
    // Remove it to go faster
    setTimeout(() => {
        // fetch the pokemons
        getPokemons()

        // remove spinner after fetch
        removeSpinner()
    }, 2000)
    

    
}


