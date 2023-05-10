import './CardPokemon.css'

export const CardPokemon = (pokemon) => {
    const figureClassName = `"figurePokemon ${pokemon.type[0].type.name}"`
    const pokemonTypeName = `${pokemon.type[0].type.name}`
    const pokemonWeight = `${pokemon.weight/10} kg`
    const pokemonHeight = `${pokemon.height/10} m`
    return( `
        <figure class=${figureClassName}>
            <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon"/>
            <h4>${pokemon.name}</h4>
            <h4>${pokemonTypeName}</h4>
            <h4>${pokemonWeight}</h4>
            <h4>${pokemonHeight}</h4>
        </figure>
    `)
} 