import axios from 'axios';
import fakeStoreApi from '../../apis/fakeStoreApi';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SELECTED_PRODUCTS = 'SELECTED_PRODUCTS';
export const REMOVE_SELECTED_PRODUCTS = 'REMOVE_SELECTED_PRODUCTS';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get('/products');
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);
  dispatch({
    type: SELECTED_PRODUCTS,
    payload: response.data,
  });
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: REMOVE_SELECTED_PRODUCTS,
  };
};
