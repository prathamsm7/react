import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    await axios
      .get(`http://localhost:3002/todos?_page=${page}&_limit=${limit}`)
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div id="allTodo">
      <h1>My Todo List</h1>
      <TodoInput fn={getData} />

      <button
        className="btn"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        className="btn"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>

      {todos.map((e, index) => {
        return <TodoList key={index} todo={e} />;
      })}
    </div>
  );
};

export default Todo;
