import './Pokemon.css'
import { service_getPokemons } from '../../services/pokemon.service'
import {Loading} from "../../components/Loading/Loading"
import { PokemonTypesBtns } from '../../components/Pokemon/PokemonTypesBtns/PokemonTypesBtns'
import { filterPokemonByName } from '../../utils/Pokemon/pokemonFilters'
import { AddPokemonsToGallery } from '../../components/Pokemon/PokemonsGallery/PokemonsGallery'

let pokemonDataFromService = {
    pokemons: [],
    pokemonTypes: []
}

const template = () => `
    <div class="spinner"></div>
    <div id="pokemonTypesBtns"></div>
    <div id="containerPokemonSearcher"></div>
    <div class="galleryPokemon"></div>
    `

const templatePokemonSearcher = () => `
    <div id='pokemonSearcher'>
        <span>Search Pokemon by name:</span>
        <div id="input-btn">
            <input id="inputSearcher"></input>
        </div>
    </div>
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

const addPokemonSearcher = () => 
    document
        .querySelector("#containerPokemonSearcher")
        .innerHTML = templatePokemonSearcher()

// Version 1 -- uses --> services/pokemon.service
const getPokemons = async () => {
    pokemonDataFromService = await service_getPokemons()
    AddPokemonsToGallery(pokemonDataFromService.pokemons)
}

//const addListeners = (pokemonTypes) => {
const addListeners = (pokemonDataFromService) => {
    document
        .querySelector('#inputSearcher')
        .addEventListener('input', () => {
            const nameToFilter = document.querySelector('#inputSearcher').value 
            filterPokemonByName(nameToFilter, pokemonDataFromService)
    })
}

export const printTemplate = () => {
    // insert the page's Html
    document.querySelector('main').innerHTML = template()

    // Render a spinner before fetch
    addSpinner()

    // fetch the pokemons
    getPokemons()

    // Delay of 2 seconds to let us a litle bit of time to see the spinner shown
    // Remove it to go faster
    setTimeout(() => {
        addPokemonSearcher()

        // fetch the pokemons
        //getPokemons()

        // remove spinner after fetch
        removeSpinner()

        PokemonTypesBtns(pokemonDataFromService)

        addListeners(pokemonDataFromService)
    }, 2000)
    

    
}


