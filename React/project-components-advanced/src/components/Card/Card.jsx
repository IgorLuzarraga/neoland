
import './Card.css'

export const Card = ({ character }) =>
    <div className='characterInfo'>
        <div className='characterData'>
            <p>id: {character.id}</p>
            <p>name: {character.name}</p>
            <p>status: {character.status}</p>
            <p>origin: {character.origin.name}</p>
        </div>
        <img
            src={character.image}
            alt={`character's ${character.name} pic`}
        />
    </div>

export default Card;