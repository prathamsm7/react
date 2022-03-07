import React, { useState } from "react";

function GroceryInput({ fn }) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fn(text);
        }}
      >
        Submit
      </button>
    </>
  );
}

export default GroceryInput;
