import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [user, setUser] = useState({
    Name: "",
    Age: "",
    Address: "",
    Department: "IT",
    Salary: "",
    maritalState: "",
  });

  const { Name, Age, Address, Department, Salary, maritalState } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios.post("http://localhost:3001/user", user).then(() => {
      console.log("Submitted");
    });

    setUser({
      ...user,
      Name: "",
      Age: "",
      Address: "",
      Department: "",
      Salary: "",
      maritalState: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <input
        type="text"
        placeholder="name"
        value={Name}
        onChange={handleChange}
        id="Name"
      />
      <input
        type="number"
        placeholder="Age"
        value={Age}
        onChange={handleChange}
        id="Age"
      />
      <input
        type="text"
        placeholder="Address"
        value={Address}
        onChange={handleChange}
        id="Address"
      />

      <select onChange={handleChange} value={Department} id="Department">
        <option id="Department">IT</option>
        <option id="Department" value="HR">
          HR
        </option>
        <option id="Department" value="Management">
          Management
        </option>
      </select>

      <input
        type="number"
        placeholder="salary"
        value={Salary}
        onChange={handleChange}
        id="Salary"
      />
      <div>
        <label />
        Marital Status
        <br />
        <input
          type="radio"
          value="Married"
          placeholder="marital status"
          id="maritalState"
          checked={maritalState === "Married"}
          onChange={handleChange}
        />
        Married
        <input
          type="radio"
          value="Un-Married"
          placeholder="marital status"
          id="maritalState"
          checked={maritalState === "Un-Married"}
          onChange={handleChange}
        />
        Un Married
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
