import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, fetchProducts } from '../redux/actions/productActions';
import Products from './Products';

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   await axios.get(`https://fakestoreapi.com/products`).then((res) => {
  //     dispatch(setProducts(res.data));
  //   });
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Box sx={{ p: 4, border: '2px dashed red' }}>
      <Typography variant='h4' gutterBottom component='div'>
        Products List
      </Typography>
      <Box display='grid' gridTemplateColumns='repeat(4, 3fr)' gap={2}>
        <Products />
      </Box>
    </Box>
  );
};

export default ProductList;
