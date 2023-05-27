import './App.css'
import { useState, useEffect } from "react";
import { getAllCharacters } from './service/character.service';

const App = () => {
  const [characterList, setCharacterList] = useState([])

  // useEffect(() => {
  //   setCharacterList(getAllCharacters());
  // }, []);

  useEffect(() => {
    getAllCharacters()
      .then(characters => setCharacterList(characters));
  }, []);

  return (
    <div className='appContainer'>
      {showCharacters(characterList)}
    </div>
  )
};

const showCharacters = (characterList) => {
  console.log(characterList)

  return (<div className='charactersContainer'>
    {characterList.map(showCharacter)}
  </div>
  )
}

const showCharacter = (character) =>
  <div key={character.id} className='characterInfo'>
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

export default App;