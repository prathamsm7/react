import { createStore } from "redux";

const reducer = (store, { type, payload }) => {
  switch (type) {
    case "ADD_COUNT":
      return { ...store, count: store.count + payload };

    case "DEl_COUNT":
      return { ...store, count: store.count - payload };

    default:
      return store;
  }
};

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

const initState = { count: 0 };

const store = createStore(reducer, initState);

console.log("store", createStore(reducer, initState));
console.log(store.geState());

store.dispatch({ type: "ADD_COUNT", payload: 10 });
console.log(store.geState());

store.dispatch({ type: "DEL_COUNT", payload: 1 });
console.log(store.geState());
