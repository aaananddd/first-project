import React, { useState, useEffect } from "react";

const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  useEffect(() => {
    console.log("side Effects");
  }, [counter]);

  return (
    <div className="flex flex-col justify-center items-center font-bold text-2xl m-6">
      <>
        <h1>{counter}</h1>
        <button
          className="btn btn-outline btn-accent"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </>
      <>
        <h1>{counter1}</h1>
        <button
          className="btn btn-outline btn-accent"
          onClick={() => setCounter1(counter1 + 1)}
        >
          +
        </button>
      </>
    </div>
  );
};

export default Effect;
