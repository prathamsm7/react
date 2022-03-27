import { Box, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  removeSelectedProducts,
  selectedProducts,
} from '../redux/actions/productActions';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  const { image, title, description, price, category } = product;
  const dispatch = useDispatch();

  const fetchProducts = async (id) => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      dispatch(selectedProducts(res.data));
    });
  };

  useEffect(() => {
    if (id && id !== '') {
      fetchProducts(id);
    }
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, []);

  console.log(product);
  return (
    <Box sx={{ p: 4, border: '2px dashed red' }}>
      <h1>Products Details</h1>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} border='2px solid blue'>
            <CardMedia component='img' alt='green iguana' image={image} />
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {title}
              </Typography>
              <Typography gutterBottom variant='h6' component='div'>
                {price}
              </Typography>
              <Typography gutterBottom variant='h6' component='div'>
                {category}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {description}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductDetails;
