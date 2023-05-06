import './Pokemon.css'
import { service_getPokemons } from '../../services/pokemon.service'
//import { service_getPokemons } from '../../services/pokemon.service2'
import {Loading} from "../../components/Loading/Loading"

const template = () => `
    <div class="spinner"></div>
    <div id="containerPokemonSearcher"></div>
    <div class="galleryPokemon"></div>
    `
const templateFigure = (pokemon) => `
    <figure class='figurePokemon'>
        <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon"/>
        <h2>${pokemon.name}</h2>
    </figure>
`

const templatePokemonSearcher = () => `
    <div id='pokemonSearcher'>
        <span>Pokemon by name:</span>
        <div id="input-btn">
            <input id="inputSearcher"></input>
            <button id="btnSearcher">Search</button>
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

const byName = name => pokemon =>
    pokemon
        .name
        .toLowerCase()
        .includes(name.toLowerCase())

const filterPokemonByName = async (name) => {
    document.querySelector('.galleryPokemon').innerHTML = ""
    const pokemons = await service_getPokemons()
    pokemons
        .filter(byName(name))
        .forEach(addPokemonToGalley)
}

const addListeners = (pokemonTypes) => {
    document
        .querySelector('#btnSearcher')
        .addEventListener('click', () => {
            filterPokemonByName(document.querySelector('#inputSearcher').value)
        })

    pokemonTypes.forEach((type) => {
        const buttonType = document.querySelector(`.${type}`)
    
        buttonType.addEventListener("click", (e) => {
            filterPokemonByType(type, "type")
        })
    })
}

const printPokemonTypesBtns = (pokemonTypes) => 
    pokemonTypes.forEach((type) => {
      const idCustom = `button${type[0].toUpperCase() + type.slice(1)}`;
      const buttonType = `<button class="buttonFilter ${type}" id=>${type}</button>`;
      const filterButton = document.getElementById("filterButton");
      filterButton.innerHTML += buttonType;
    })

export const printTemplate = () => {
    // insert the page's Html
    document.querySelector('main').innerHTML = template()

    // Render a spinner before fetch
    addSpinner()

    // Delay of 2 seconds to let us a litle bit of time to see the spinner shown
    // Remove it to go faster
    setTimeout(() => {
        addPokemonSearcher()

        // fetch the pokemons
        getPokemons()

        // remove spinner after fetch
        removeSpinner()

        addListeners()
    }, 2000)
    

    
}


