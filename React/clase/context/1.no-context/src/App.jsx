import { useState } from "react";
import "./App.css";
import Component1 from "./components/Component1";

function App() {
  const [saludo, setSaludo] = useState("Buenos dias");
  const [counter, setCounter] = useState(0);

  return (
    <Component1
      saludo={saludo}
      counter={counter}
      setCounter={setCounter}
    />
  );
}

export default App;
