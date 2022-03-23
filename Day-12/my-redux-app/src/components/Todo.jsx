import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo, updateTodo } from '../Redux/Todos/action';

const Todo = () => {
  const [text, setText] = useState('');

  const todos = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  let route = useNavigate();

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    axios.get('http://localhost:8080/todo').then(({ data }) => {
      dispatch(addTodo(data));
    });
  };

  const addTodos = () => {
    axios
      .post(`http://localhost:8080/todo`, { title: text, status: false })
      .then(() => getTodo());
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8080/todo/${id}`).then(() => getTodo());
  };

  const updateTodos = (todo) => {
    axios
      .patch(`http://localhost:8080/todo/${todo.id}`, { status: !todo.status })
      .then(() => {
        getTodo();
      });
  };

  const redirect = (id) => {
    route(`/todo/${id}`);
  };

  return (
    <div>
      <input type='text' onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          addTodos();
        }}
      >
        Add Todo
      </button>

      {todos.map((e, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              redirect(e.id);
            }}
          >
            <span
              style={{ color: 'red', marginRight: '15px', fontWeight: 'bold' }}
            >
              {e.title}
            </span>
            <span style={{ color: 'blue', marginRight: '15px' }}>
              {e.status == false ? 'Not Done' : 'Done'}
            </span>
            <button onClick={() => deleteTodo(e.id)}> Delete</button>
            <button onClick={() => updateTodos(e)}> Update</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
