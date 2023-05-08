import './PokemonTypesBtns.css'
import { filterPokemonByType } from '../../../utils/Pokemon/pokemonFilters'

const addListeners = (pokemonDataFromService) => {
    pokemonDataFromService
        .pokemonTypes.forEach((type) => {
        const pokemonTypeBtn = document.querySelector(`#${type}`)
    
        pokemonTypeBtn.addEventListener("click", (e) => {
            filterPokemonByType(type, pokemonDataFromService)
        })
    })
}

const printTemplate = (pokemonTypes) =>
    pokemonTypes.forEach((type) => {
        const btnClassName = `"pokemonTypeBtn ${type}"`
        
        const pokemonTypeBtn = `<button class=${btnClassName} id=${type}>${type}</button>`
        const pokemonTypesBtns = document.querySelector("#pokemonTypesBtns")
        pokemonTypesBtns.innerHTML += pokemonTypeBtn
    })

export const PokemonTypesBtns = (pokemonDataFromService) => {
   printTemplate(pokemonDataFromService.pokemonTypes)
   addListeners(pokemonDataFromService)
}

