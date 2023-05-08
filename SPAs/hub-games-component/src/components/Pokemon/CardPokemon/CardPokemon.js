import './CardPokemon.css'

export const CardPokemon = (pokemon) => {
    const figureClassName = `"figurePokemon ${pokemon.type[0].type.name}"`
    const pokemonTypeName = `${pokemon.type[0].type.name}`
    const pokemonWeight = `${pokemon.weight/10} kg`
    const pokemonHeight = `${pokemon.height/10} m`
    return( `
        <figure class=${figureClassName}>
            <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon"/>
            <h3>${pokemon.name}</h3>
            <h3>${pokemonTypeName}</h3>
            <h3>${pokemonWeight}</h3>
            <h3>${pokemonHeight}</h3>
        </figure>
    `)
} 