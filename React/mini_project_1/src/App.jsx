import './App.css'
import { useState } from "react";
import { getAll } from './service/character.service';

const App = () => {
  const [characterList, setCharacterList] = useState(getAll());

  return (
    <div className='appContainer'>
      {showCharacters(characterList)}
    </div>
  )
};

const showCharacters = (characterList) =>
  <div className='charactersContainer'>
    {characterList.map(showCharacter)}
  </div>

const showCharacter = (character) =>
  <div key={character.id} className='characterInfo'>
    <h2>id: {character.id}</h2>
    <h2>name: {character.name}</h2>
    <h2>status: {character.status}</h2>
  </div>

export default App;