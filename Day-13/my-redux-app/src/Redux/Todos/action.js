import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const GET_TODO = 'GET_TODO';
export const GET_TODO_LOADING = 'GET_TODO_LOADING';
export const GET_TODO_ERROR = 'GET_TODO_ERROR';

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
// export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });

export const getTodo = (payload) => ({ type: GET_TODO, payload });
export const getTodoLOading = () => ({ type: GET_TODO_LOADING });
export const getTodoError = () => ({ type: GET_TODO_ERROR });

export const getTodoData = async (dispatch) => {
  dispatch(getTodoLOading());
  const { data } = await axios.get('http://localhost:8080/todo');
  dispatch(getTodo(data));
};
