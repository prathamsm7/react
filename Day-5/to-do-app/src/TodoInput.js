import axios from "axios";
import React, { useState } from "react";

const TodoInput = ({ fn }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          await axios
            .post("http://localhost:3002/todos", { title: text, done: false })
            .then(fn());
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default TodoInput;
