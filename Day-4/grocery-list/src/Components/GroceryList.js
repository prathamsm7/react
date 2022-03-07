import React from "react";

const GroceryList = ({ id, grocery, btnClick }) => {
  return (
    <div id="todo">
      <span>{id}</span>
      <span className="name"> {grocery.name}</span>
      <button
        onClick={() => {
          btnClick(grocery.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default GroceryList;
