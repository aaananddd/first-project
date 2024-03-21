import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  

  const handleClick = () => {
    setCount(count + 1);
  };

 

  return (
    <div className="flex justify-center items-center m-8">
      <div>
        <h1 className="text-blue-900 font-bold text-4xl ">Counter : </h1>
      </div>
      <div className="gap-3 ml-4">
        <button onClick={handleClick} className="  btn btn-secondary gap-2">
          you pressed me {count} times.
        </button>
      </div>

     
    </div>
  );
};

export default Count;
