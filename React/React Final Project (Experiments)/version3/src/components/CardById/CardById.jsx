import "./CardById.css";

const CardById = ({ data }) => {
  return (
    <figure>
      <img src={data[0].image} alt={data[0].name} />
      <h5>{data[0].name}</h5>
    </figure>
  );
};

export default CardById;
