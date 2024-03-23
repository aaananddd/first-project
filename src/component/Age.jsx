import React, { useState } from "react";

const Age = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div className="flex justify-center m-4 gap-3">
      <input
        type="text"
        placeholder="Type your name here"
        className="input input-bordered input-success w-full max-w-xs "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        className="btn btn-outline btn-accent"
        onClick={() => setAge(age + 1)}
      >
        Increment Age
      </button>

      <p className="mt-3 font-bold">
        hello, {name} your age is {age}
      </p>
    </div>
  );
};

export default Age;
