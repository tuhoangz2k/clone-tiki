import React from 'react';
import { Box, Grid } from '@mui/material';
import Product from './Product';

function ProductList({ data }) {
  return (
    <Box>
      <Grid container>
        {data.map((product, idx) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
