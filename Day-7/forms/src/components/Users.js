import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/user").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);

  return (
    <>
      <h1>All Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={user.id}>
                <>
                  <td>{user.Name}</td>
                  <td>{user.Age}</td>
                  <td>{user.Address}</td>
                  <td>{user.Salary}</td>
                  <td>{user.Department}</td>
                  <td> {user.maritalState}</td>
                </>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
