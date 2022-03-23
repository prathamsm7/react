import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const updateTodo = (payload, stt) => (
  { type: UPDATE_TODO, payload }, console.log(payload, 'stt', stt)
);
