import { useState } from "react";

const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const decrement = (value = 1) => {
    setCounter(counter - value);
  };

  // este lo que hace es setear el estado a su valor inicial
  const reset = () => {
    setCounter(initialValue);
  };

  const resetCustom = (value = 20) => {
    setCounter(value);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
    resetCustom,
  };
};

export default useCounter;
