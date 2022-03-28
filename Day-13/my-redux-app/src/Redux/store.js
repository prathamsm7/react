import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { todoReducer } from './Todos/reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});

const loggerMiddlewere = (store) => (next) => (action) => {
  if (typeof action == 'function') {
    return action(store.dispatch);
  }
  next(action);
};

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
