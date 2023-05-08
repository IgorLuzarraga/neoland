export const pokemonTypes = (data) => {
    const typesOfPokemons = new Set()

    data.forEach((element) => {
      element.type.forEach((singleType) => {
        typesOfPokemons.add(singleType.type.name)
      })
    })
  
    return typesOfPokemons
  }
  