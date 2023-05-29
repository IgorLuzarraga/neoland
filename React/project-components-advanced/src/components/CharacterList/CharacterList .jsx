import { useState, useEffect } from "react";
import { getAllCharacters } from '../../service/character.service';
import Card from '../Card/Card'
import './CharacterList.css'
import ItemList from "../ItemList/ItemList";

const CharacterList = () => {
    const [characterList, setCharacterList] = useState([])

    useEffect(() => {
        getAllCharacters()
            .then(characters => setCharacterList(characters));
    }, []);

    return (
        <div className='characterListContainer'>
            {showCharacters(characterList)}
        </div>
    )
}

const showCharacters = (characterList) =>
    <ul className='charactersContainer'>
        {characterList.map(showCharacter)}
    </ul>

const showCharacter = (character) =>
    <ItemList>
        <Card key={character.id} character={character} />
    </ItemList>

export default CharacterList

{/* <ItemList>
<p>Name: Everest Mountaine</p>
<Image imgParams={imgParams} />
<p>Status: </p>
<p>Origin</p>
</ItemList> */}