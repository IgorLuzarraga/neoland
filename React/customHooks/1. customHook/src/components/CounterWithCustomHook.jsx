import { useEffect } from "react";
import useCounter from "../hooks/useCounter";
import Parrafo from "./Parrafo";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset, resetCustom } = useCounter();

  useEffect(() => {
    console.log("Mounting component");

    return () => {
      console.log("unmounting component");
    };
  }, []);

  return (
    <>
      {counter === 40 && <Parrafo />}
      <h1>Counter value: {counter}</h1>
      <hr />

      <button onClick={() => increment(1)} className="btn btn-primary">
        Increment

      </button>
      <button onClick={() => reset()} className="btn btn-primary">
        Reset to 10
      </button>

      <button onClick={() => decrement(1)} className="btn btn-primary">
        Decrement
      </button>

      <button onClick={() => resetCustom(39)} className="btn btn-primary">
        Reset to 39
      </button>
    </>
  );
};

export default CounterWithCustomHook;
