import { useState } from 'react';
import Axios from 'axios'
import '../../App.css'

const Title = () => {
  const [pokemonName, setPokemonName] = useState("");
  
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (res) => {
        console.log(res.data);
      }
    )
  }

  return (
    <div className="flex flex-col items-center text-gray-200 
                  bg-cyan-500 w-full h-[19rem]">  
        <h1 className='my-2 text-3xl'>Pokédex</h1>
        <input 
            className="w-[200px] h-8 rounded-lg border-1 border-solid 
                       border-cyan-600 text-[16px] pl-[10px]"
            type="text" 
            onChange={(event) => 
              setPokemonName(event.target.value)}
        />
        <button
            className='w-44 h-10 m-5 rounded-xl text-xl pl-3
                       text-gray-200 bg-blue-700'
            onClick={searchPokemon}
        >
            Search Pokémon
        </button>
    </div>
  )
}


export default Title