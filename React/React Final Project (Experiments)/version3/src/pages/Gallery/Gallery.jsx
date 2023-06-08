import CardGallery from "../../components/CardGallery/CardGallery";
import { getAll } from "../../service/character.service";
import "./Gallery.css";

const Gallery = () => {
  const characterListData = getAll();

  return (
    <div className="outletContainer charactersGallery">
      {characterListData.map((character) => (
        <div key={character._id}>
          <CardGallery character={character} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
