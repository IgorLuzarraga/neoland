import "./CardGallery.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CardGallery = ({ character }) => {
  const navigate = useNavigate();
  const pathById = `/gallery/character/${character._id}`;
  const nameCustom = character.name.replace(" ", "%20");
  const pathByName = `/gallery/character/name/${nameCustom}`;

  return (
    <figure>
      <Link to={pathById}>
        <div>
          <img src={character.image} alt={character.name} />
          <h5>{character.name}</h5>
        </div>
      </Link>
      <button onClick={() => navigate(pathByName)}>Info</button>
    </figure>
  );
};

export default CardGallery;
