import { AppBar, Box, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          MyProducts
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Header;
