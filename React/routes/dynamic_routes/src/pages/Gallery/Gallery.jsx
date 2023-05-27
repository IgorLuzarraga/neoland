import CardGallery from "../../components/CardGalley/CardGallery";
import { getAll } from "../../service/character.service";
import "./Gallery.css";

const Gallery = () => {
  const characterListData = getAll();

  return (
    <div className="outletContainer charactersGallery">
      {characterListData.map((character) => (
        <CardGallery key={character._id} character={character} />
      ))}
    </div>
  );
};

export default Gallery;
