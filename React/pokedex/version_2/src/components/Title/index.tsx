/* eslint-disable prettier/prettier */
import { Pokemon, PokemonFromServer } from '../../types/pokemonTypes';
import Card from '../Card';
import Error from '../Error';

import { useGetPokemonByNameQuery } from '../../services/pokeApi' 
import { useState } from 'react';
import { ServerResponse } from '../../types/serverTypes';
import Loading from '../Loading';

const initialPokemon: Pokemon = {
  name: "",
  number: -1,
  species: "",
  image: "",
  hp: -1,
  attack: -1,
  defense: -1,
  speed: -1,
  type: "",
}

const createPokemon = (pokemonData: PokemonFromServer | undefined): Pokemon => {
  if (!pokemonData) return initialPokemon

  return {
      name: pokemonData.name,
      number: pokemonData.id,
      species: pokemonData.species.name,
      image: pokemonData.sprites.front_default,
      hp: pokemonData.stats[0].base_stat,
      attack: pokemonData.stats[1].base_stat,
      defense: pokemonData.stats[2].base_stat,
      speed: pokemonData.stats[5].base_stat,
      type: pokemonData.types[0].type.name,
  }
}

const ShowPokemon = ({data, isError, isLoading}: ServerResponse) => {
  if (isLoading) {
    <Loading />
  } else if (isError) {
    return <Error />
  } else if (data) { 
    return (<Card pokemon={createPokemon(data)} />)
  } else return (<></>)
}

const Title = () => {
  const [pokemonName, setPokemonName] = useState("pikachu");
  const [userInput, setUserInput] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false)
  
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading } = useGetPokemonByNameQuery(pokemonName)

  const searchPokemon = () => {
    setPokemonName(userInput)
    setPokemonChosen(true)
  }
  
  return (
    <div className='bg-cyan-500 w-full h-fit'>
      <div className="flex flex-col items-center text-gray-200"> 
          <h1 className='my-2 text-3xl'>Pokédex</h1>
          <input 
              className="w-[200px] h-8 rounded-lg border-1 border-solid 
                        border-cyan-600 text-[16px] pl-[10px]
                        text-black"
              type="text" 
              onChange={(event) => {
                setUserInput(event.target.value.toLowerCase())
              }}
          />
          <button
              className='w-44 h-10 m-5 rounded-xl text-xl pl-3
                        text-gray-200  bg-blue-700'
              onClick={searchPokemon}
          >
              Search Pokémon
          </button>
      </div>
      <>
        {!pokemonChosen ? 
          <div className='w-full flex justify-center bg-cyan-500'>
            <div className='w-3/5 h-20 flex justify-center items-center
                          text-2xl text-white bg-gray-600
                          border border-solid border-black rounded-xl'>
              <h1> Please choose a Pokémon </h1>
            </div>
          </div>
          : 
          <div className='mx-auto flex justify-center items-center'>
            <ShowPokemon data={data} isError={isError} isLoading={isLoading} />
          </div>
        }
      </>
  </div>
  )
}

export default Title