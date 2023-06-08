import CardByName from "../../components/CardByName/CardByName";
import { getByName } from "../../service/character.service";
import { useParams } from "react-router-dom";
import "./CharacterByName.css";
import { pipe } from "../../utils/fp/fpFunctions";

const CharacterByName = () =>
  <div className="outletContainer">
    {showCharacter()}
  </div>

const showCharacter = () =>
  pipe(
    getCharacterName(),
    getByName,
    showCharacterByName
  )

const getCharacterName = () =>
  useParams().name

const showCharacterByName = (character) =>
  <CardByName data={character} />

export default CharacterByName;