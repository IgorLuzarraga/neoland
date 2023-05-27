import "./CardByName.css";

const CardByName = ({ data }) => {
  console.log("🚀 ~ file: CardByName.jsx:4 ~ CardByName ~ data:", data);
  return (
    <figure>
      <img src={data[0].image} alt={data[0].name} />
      <h5>{data[0].name}</h5>
    </figure>
  );
};

export default CardByName;
