const Componente3 = ({ saludo, counter, setCounter }) => {
  console.log("me renderizo componente 3");
  return (
    <div>
      <h1>{saludo} {counter} veces</h1>
      <h3>Soy el componente 3</h3>
      <button onClick={() => setCounter((value) => value + 1)}>
        CAMBIAR ESTADO
      </button>
    </div>
  );
};

export default Componente3;
