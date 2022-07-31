import { Box, Container, Grid, Paper, CircularProgress } from '@mui/material';
import React from 'react';
import ProductThumbnail from '../components/ProductThumbnail';
import { useParams } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail';
import ProductInfor from '../components/Filters/ProductInfor';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/Filters/ProductMenu';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Cart/cartSlice';
function DetailProductPage(props) {
  const { productId } = useParams();
  const { product, loading } = useProductDetail(productId);
  const dispatch = useDispatch();
  if (loading) {
    return (
      <Box marginTop={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }
  const handleAddToCartSubmit = (value) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity: value.quantity,
    });
    console.log(action);
    dispatch(action);
  };
  return (
    <Box marginTop={4}>
      <Container>
        <Paper elevation={0}>
          <Grid container spacing={2}>
            <Grid item sx={{ width: 250 }}>
              Thumbnail
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item sx={{ flex: '1 1 0', borderLeft: 'solid 1px' }}>
              Product infor
              <ProductInfor product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Outlet />
      </Container>
    </Box>
  );
}

export default DetailProductPage;
