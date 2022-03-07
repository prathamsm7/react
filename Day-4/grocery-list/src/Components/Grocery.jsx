import React from "react";
import { useState } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

import { v4 as uuid4 } from "uuid";

const Grocery = () => {
  const [grocery, setGrocery] = useState([
    { id: uuid4(), name: "tomato" },
    { id: uuid4(), name: "onions" },
    { id: uuid4(), name: "apple" },
  ]);
  console.log(grocery);

  function addGrocery(data) {
    let newGrocery = [...grocery, { id: uuid4(), name: data }];

    setGrocery(newGrocery);
  }

  function removeGrocery(index) {
    let newGrocery = grocery.filter((e) => {
      if (e.id != index) {
        return e;
      }
    });

    setGrocery(newGrocery);
    console.log(grocery);
  }

  return (
    <>
      <h1>My Grocery List</h1>
      <GroceryInput fn={addGrocery} />
      {grocery.map((e, index) => {
        return (
          <GroceryList
            id={index + 1}
            key={index}
            grocery={e}
            btnClick={removeGrocery}
          />
        );
      })}
    </>
  );
};

export default Grocery;
