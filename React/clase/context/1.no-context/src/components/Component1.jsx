import Componente2 from "./Componente2";

const Component1 = ({ saludo, counter, setCounter }) => {
  console.log("me renderizo componente 1");
  return (
    <div>
      <h1>Soy el componente 1</h1>
      <Componente2
        saludo={saludo}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
};



export default Component1;
