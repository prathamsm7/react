import React from "react";

function TodoList({ todo }) {
  return <h4 className="todo">{todo.title}</h4>;
}

export default TodoList;
