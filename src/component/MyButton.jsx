// import React from 'react'
import React, { useState } from 'react';

const MyButton = () => {
  const [colour, setColour] = useState("GREEN");
  const [textColour, setTextColour] = useState("text-green-500")

  const changeColour = () =>{
    if(colour=="RED"){
      setColour("GREEN")
    }else{
      setColour("RED")
    }
  };
  

  return (
    <>
    <h1 className="text-red-500">useState Hook in React</h1>
    <h2>My favourite color is <h2 className={colour==="RED"?"text-red-500":"text-green-500"}>"{colour}"</h2></h2>
    <button className="rounded-lg btn-active font-medium p-2 m-3 btn-success" onClick={changeColour}>Click Here</button>
    </>
  );
};

export default MyButton