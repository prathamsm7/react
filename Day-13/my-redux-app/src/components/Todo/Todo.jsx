import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addTodo,
  getTodo,
  getTodoData,
  getTodoLOading,
} from '../../Redux/Todos/action';

const Todo = () => {
  const [text, setText] = useState('');

  const { todo, loading, error } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  let route = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getTodoData());
  };

  const addTodos = () => {
    if (!text) return;
    axios
      .post(`http://localhost:8080/todo`, { title: text, status: false })
      .then(() => getData());
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

  return loading ? (
    'Loading...'
  ) : error ? (
    'Error Occured'
  ) : (
    <div>
      <input type='text' onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          addTodos();
        }}
      >
        Add Todo
      </button>

      {todo.map((e, i) => {
        return (
          <div key={i}>
            <span
              style={{ color: 'red', marginRight: '15px', fontWeight: 'bold' }}
              onClick={() => {
                redirect(e.id);
              }}
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
