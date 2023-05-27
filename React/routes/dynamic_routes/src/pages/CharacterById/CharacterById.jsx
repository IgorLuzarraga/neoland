import './CharacterById.css'
import CardById from "../../components/CardById/CardById";
import { getById } from "../../service/character.service";
import { useParams } from "react-router-dom";
import { pipe } from '../../utils/fp/fpFunctions'

const CharacterById = () =>
    <div className="outletContainer">
        {showCharacter()}
    </div>

const showCharacter = () =>
    pipe(
        getId(),
        getById,
        showCharacterById
    )

const getId = () => {
    const { id } = useParams();
    return id
}

const showCharacterById = (character) =>
    <CardById data={character} />

export default CharacterById