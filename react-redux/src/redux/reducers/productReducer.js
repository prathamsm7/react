import {
  SELECTED_PRODUCTS,
  SET_PRODUCTS,
  REMOVE_SELECTED_PRODUCTS,
} from '../actions/productActions';

const initState = {
  products: [],
};

export const productsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
