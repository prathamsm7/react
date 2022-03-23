import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const TodoItem = () => {
  let { id } = useParams();

  const todos = useSelector((store) => store.todo);

  const item = todos.filter((todo) => {
    if (todo.id == id) {
      return todo;
    }
  });

  console.log(todos, item);

  return (
    <div>
      <h1>TodoItem</h1>
      {item[0].id}
      {item[0].title}
      {item[0].status ? 'Done' : 'Not Done'}
    </div>
  );
};

export default TodoItem;
