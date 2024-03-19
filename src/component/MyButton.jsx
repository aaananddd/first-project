// import React from 'react'
import React, { useState } from 'react';

const MyButton = () => {
  const [colour, setColour] = useState("GREEN");
  // const [textColour, setTextColour] = useState("text-coll")

  const changeColour = () =>{
    setColour("RED");
  };
  const dbChangeColour =  () => {
    setColour("GREEN");
  }

  return (
    <>
    <h1 className="text-red-500">useState Hook in React</h1>
    <h2>My favourite color is "{colour}"</h2>
    <button className="rounded-lg btn-active font-medium p-2 m-3 btn-success" onClick={changeColour} onDoubleClick={dbChangeColour}>Click Here</button>
    </>
  );
};

export default MyButton