import {Pokemon} from '../../types/pokemonTypes';

type Props = {
    pokemon: Pokemon,
}

const Card = ({pokemon}: Props) => {
  return (
    <div className='w-3/5 mx-auto h-fit'>
    <div className='flex flex-col justify-center items-center rounded-xl
                    text-2xl text-white bg-gray-600 py-2'
    >
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
        <h3>Number: #{pokemon.number}</h3>
        <h3>Species: {pokemon.species}</h3>
        <h3>Type: {pokemon.type}</h3>
        <h4>Hp: {pokemon.hp}</h4>
        <h4>Attack: {pokemon.attack}</h4>
        <h4>Defense: {pokemon.defense}</h4>
        <h4>Speed: {pokemon.speed}</h4>
        </div>
    </div>
  )
}

export default Card