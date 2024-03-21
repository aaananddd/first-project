import React, { useState } from "react";

const String = () => {
  const [text, setText] = useState("hello");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col   justify-center items-center w-full p-12 font-bold text-3xl">
      <input value={text} className="items-end justify-center border-slate-950" onChange={handleChange} />
      <p className={text === "hello" ? "text-green-500" : ""}>
        you typed : {text}
      </p>
      <button
        onClick={() => setText("hello")}
        className="  btn btn-secondary gap-2"
      >
        Reset
      </button>
    </div>
  );
};

export default String;
