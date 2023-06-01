import Componente3 from "./Componente3";

const Component2 = ({ saludo, counter, setCounter }) => {
  console.log("me renderizo componente 2");
  return (
    <div>
      <h1>Soy el componente 2</h1>
      <Componente3
        saludo={saludo}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
};

export default Component2;
