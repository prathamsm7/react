import { ADD_TODO, UPDATE_TODO } from './action';

const initState = {
  todo: [],
};
export const todoReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todo: payload };
    case UPDATE_TODO:
      return {
        ...store,
        todo: store.todo.map((todo) => {
          if (todo.id == payload.id) {
            todo.status = !todo.status;
          }
        }),
      };
    default:
      return store;
  }
};
