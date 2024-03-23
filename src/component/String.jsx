import React, { useState } from "react";

const String = () => {
  const [text, setText] = useState("hello");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-12 font-bold text-3xl">
      <input
        type="text"
        value={text}
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
        onChange={handleChange}
      />
      <p className={text === "hello" ? "text-green-500" : "text-red-500"}>
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
