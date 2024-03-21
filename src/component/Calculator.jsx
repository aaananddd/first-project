import React, { useState } from "react";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange1 = (event) => {
    setFirstValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setSecondValue(event.target.value);
  };

  const Calculate = (operator) => {
    let res;
    switch (operator) {
      case "+":
        res = Number(firstValue) + Number(secondValue);
        break;
      case "-":
        res = Number(firstValue) - Number(secondValue);
        break;
      case "*":
        res = Number(firstValue) * Number(secondValue);
        break;
      case "/":
        res = Number(firstValue) / Number(secondValue);
        break;
    }
    setResult(res);
  };

  return (
    <div className="flex flex-col items-center gap-y-2">
      <input
        type="number"
        placeholder="Type here"
        className="input input-bordered input-primary w-1/4"
        value={firstValue}
        onChange={handleInputChange1}
      />
      <div className="space-x-2">
        <button className="btn btn-neutral" onClick={() => Calculate("+")}>
          +
        </button>
        <button className="btn btn-neutral" onClick={() => Calculate("-")}>
          -
        </button>
        <button className="btn btn-neutral" onClick={() => Calculate("*")}>
          *
        </button>
        <button className="btn btn-neutral" onClick={() => Calculate("/")}>
          /
        </button>
      </div>
      <input
        type="number"
        placeholder="Type here"
        className="input input-bordered input-primary w-1/4"
        value={secondValue}
        onChange={handleInputChange2}
      />
      <div>
        <input
          type="text"
          placeholder="result"
          className="input input-bordered w-full max-w-xs"
          value={result}
          readOnly
        />
      </div>
    </div>
  );
};

export default Calculator;
