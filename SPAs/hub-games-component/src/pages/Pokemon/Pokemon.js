import './Pokemon.css'
import { CardPokemon } from '../../components/Pokemon/CardPokemon/CardPokemon'
import { service_getPokemons } from '../../services/pokemon.service'
//import { service_getPokemons } from '../../services/pokemon.service2'
import {Loading} from "../../components/Loading/Loading"

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

// const templateFigure = (pokemon) => {
//     const figureClassName = `"figurePokemon ${pokemon.type[0].type.name}"`
//     const pokemonTypeName = `${pokemon.type[0].type.name}`
//     const pokemonWeight = `${pokemon.weight/10} kg`
//     const pokemonHeight = `${pokemon.height/10} m`
//     return( `
//         <figure class=${figureClassName}>
//             <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon"/>
//             <h3>${pokemon.name}</h3>
//             <h3>${pokemonTypeName}</h3>
//             <h3>${pokemonWeight}</h3>
//             <h3>${pokemonHeight}</h3>
//         </figure>
//     `)
// } 

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


const cleanGallery = () => 
    document
        .querySelector('.galleryPokemon')
        .innerHTML = ''

// const addPokemonToGallery = (pokemon) => 
//     document
//         .querySelector('.galleryPokemon')
//         .innerHTML +=  templateFigure(pokemon)

const addPokemonToGallery = (pokemon) => 
    document
        .querySelector('.galleryPokemon')
        .innerHTML +=  CardPokemon(pokemon)


const addPokemonsToGallery = (pokemons) => {
    cleanGallery()
    pokemons.forEach(addPokemonToGallery)
}

// Version 1 -- uses --> services/pokemon.service
const getPokemons = async () => {
    pokemonDataFromService = await service_getPokemons()
    addPokemonsToGallery(pokemonDataFromService.pokemons)
}

// Version 2 -- uses --> services/pokemon.service2
const getPokemons2 =  () => {
    const pokemonsPromise = service_getPokemons()
        pokemonsPromise.forEach(promise => {
            promise
                .then((pokemonData) => {
                    pokemonDataFromService.pokemons.push(pokemonData.pokemons) 
                    pokemonDataFromService.pokemonTypes.push(pokemonData.pokemonTypes) 
                    addPokemonToGallery(pokemonData.pokemon)
                })
                .catch(error => console.log(error))
        })
}

// ----------------------------- Filters (Start) ----------------------
const byName = name => pokemon =>
    pokemon
        .name
        .toLowerCase()
        .includes(name.toLowerCase())

const filterPokemonByName = async (name) => {
    document.querySelector('.galleryPokemon').innerHTML = ""
    pokemonDataFromService.pokemons
        .filter(byName(name))
        .forEach(addPokemonToGallery)
}

// Note: There are (in each pokemon) two kind of types
// called type 0 and type 1
const filterPokemonByType = (type) => {
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
    addPokemonsToGallery(pokemonsFilterdByType_1);
    } else {
    addPokemonsToGallery(pokemonsFilterdByType_0);
    }
}

// ----------------------------- Filters (End) ----------------------

const addListeners = (pokemonTypes) => {
    document
        .querySelector('#inputSearcher')
        .addEventListener('input', () => {
            filterPokemonByName(document.querySelector('#inputSearcher').value)
    })

    pokemonTypes.forEach((type) => {
        const pokemonTypeBtn = document.querySelector(`#${type}`)
    
        pokemonTypeBtn.addEventListener("click", (e) => {
            filterPokemonByType(type)
        })
    })
}

const printPokemonTypesBtns = (pokemonTypes) =>
    pokemonTypes.forEach((type) => {
      const btnClassName = `"pokemonTypeBtn ${type}"`
      
      const pokemonTypeBtn = `<button class=${btnClassName} id=${type}>${type}</button>`
      const pokemonTypesBtns = document.querySelector("#pokemonTypesBtns")
      pokemonTypesBtns.innerHTML += pokemonTypeBtn
    })

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

        printPokemonTypesBtns(pokemonDataFromService.pokemonTypes)

        addListeners(pokemonDataFromService.pokemonTypes)
    }, 2000)
    

    
}


