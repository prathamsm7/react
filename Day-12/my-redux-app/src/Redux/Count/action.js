import axios from 'axios';

export const ADD_COUNT = 'ADD_COUNT';

export const addCount = (payload) => ({ type: ADD_COUNT, payload });
