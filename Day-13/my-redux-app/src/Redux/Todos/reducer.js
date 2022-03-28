import { ADD_TODO, GET_TODO, GET_TODO_LOADING } from './action';

const initState = {
  todo: [],
  loading: false,
  error: false,
};
export const todoReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todo: payload };
    case GET_TODO:
      return { ...store, todo: payload };
    case GET_TODO_LOADING:
      return {
        ...store,
        loading: true,
      };
    // case UPDATE_TODO:
    //   return {
    //     ...store,
    //     todo: store.todo.map((todo) => {
    //       if (todo.id == payload.id) {
    //         todo.status = !todo.status;
    //       }
    //     }),
    //   };
    default:
      return store;
  }
};
