import React, { useState } from "react";

function Counter({ initvalue }) {
  const [counter, setCounter] = useState(+initvalue);

  function add(value) {
    setCounter(counter + value);
  }

  function double(value) {
    setCounter(counter * value);
  }
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => {
          add(1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          if (counter >= 1) add(-1);
        }}
      >
        Reduce
      </button>

      <button onClick={() => double(2)}>Double</button>
    </div>
  );
}

export default Counter;
