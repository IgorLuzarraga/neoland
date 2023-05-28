import { useState, useEffect } from "react";
import { getAllCharacters } from '../../service/character.service';
import Card from '../Card/Card'
import './CharacterList.css'

const CharacterList = () => {
    const [characterList, setCharacterList] = useState([])

    useEffect(() => {
        getAllCharacters()
            .then(characters => setCharacterList(characters));
    }, []);

    return (
        <div className='appContainer'>
            {showCharacters(characterList)}
        </div>
    )
}

const showCharacters = (characterList) =>
    <div className='charactersContainer'>
        {characterList.map(showCharacter)}
    </div>

const showCharacter = (character) =>
    <Card key={character.id} character={character} />

export default CharacterList