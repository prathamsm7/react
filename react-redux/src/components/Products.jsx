import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = useSelector((state) => state.allProducts.products);

  const List = products.map((product) => {
    const { id, title, image, category, description, price } = product;
    return (
      <Link to={`/product/${id}`} key={id}>
        <Card sx={{ maxWidth: 345, p: 2, height: 300 }}>
          <CardMedia
            component='img'
            alt='green iguana'
            height='50%'
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
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
          {/* <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
     </CardActions> */}
        </Card>
      </Link>
    );
  });

  return <>{List}</>;
};

export default Products;
