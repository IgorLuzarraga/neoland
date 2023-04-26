import {Pokemon} from '../../types/pokemonTypes';
import { capitalize } from '../../utils/utils';
import './card.css'

type Props = {
  pokemon: Pokemon
};

const Card = ({ pokemon }: Props) => {
  const pokemonNameCapitalized = capitalize(pokemon.name)
  
  return (
    <div className='w-3/5 mx-auto h-fit my-4'>
      <div className='flex flex-col justify-center items-center rounded-xl
                      border border-solid boder-amber-300 py-8 holo-effect'
      >
        <div className='flex justify-center items-center gap-1'>
          <h1 className='text-amber-300 text-2xl mb-4 p-2
                         border-4 border-solid rounded-xl border-white'>
            {pokemonNameCapitalized}
          </h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 px-4'>
          <img 
            className='w-1/2 h-[450px] object-cover holo-effect2
                       border border-solid rounded-xl border-amber-300'
            src={pokemon.image} alt={pokemon.name} 
          />
          <div className='w-1/2 h-[450px] text-sm md:text-xl text-black holo-effect2
                          border-2 rounded-xl p-4 border-amber-300'
          >
            <h3>Number: {pokemon.number}</h3>
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
            <h4>Speed: {pokemon.speed}</h4>
            <h4>Weight: {pokemon.weight}</h4>
            <h4>Height: {pokemon.height}</h4>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Card