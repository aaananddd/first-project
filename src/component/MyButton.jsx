// import React from 'react'
import React, { useState } from 'react';

const MyButton = () => {
  const [colour, setColour] = useState("GREEN");

  const changeColour = () => {
    setColour(prev => prev === "GREEN" ? "RED" : "GREEN")
  };


  return (
    <>
      <h1 className="text-red-500">useState Hook in React</h1>
      <h2>My favourite color is <span className={colour === "RED" ? "text-red-500" : "text-green-500"}>"{colour}"</span></h2>
      <button className="rounded-lg btn-active font-medium p-2 m-3 btn-success" onClick={changeColour}>Click Here</button>
    </>
  );
};

export default MyButton