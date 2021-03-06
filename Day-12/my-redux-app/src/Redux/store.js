import { createStore } from 'redux';
import { todoReducer } from './Todos/reducer';

export const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
