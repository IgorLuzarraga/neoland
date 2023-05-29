import React, { useEffect } from "react";

const Parrafo = () => {
  useEffect(() => {
    console.log("Mounting paragraph");

    return () => {
      console.log("Unmountin paragraph");
    };
  }, []);

  return <p>Great! You reach to 40</p>;
};

export default Parrafo;
