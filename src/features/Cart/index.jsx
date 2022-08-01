import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsCount, cartTotal } from './selectors';
import { Box, Container, Grid, Paper, Pagination, Typography } from '@mui/material';

function CartFeature(props) {
  const total = useSelector(cartTotal);
  const cart = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.current);
  const count = useSelector(cartItemsCount);
  console.log(cart);
  return (
    <Box marginTop={2}>
      <Container>
        <Grid spacing={1} container>
          <Grid item sx={{ flex: '1 1 0' }}>
            <Typography variant="body2">Giỏ hàng: {`(${count} sản phẩm)`}</Typography>
            <Paper elevation={0}>
              <Box>
                {cart.map((x) => (
                  <Box mt={2}>
                    <Typography key={x.id}>{x.product.name}</Typography>
                    <Typography key={x.id}>{x.product.shortDescription}</Typography>
                    <Typography key={x.id}>{x.product.salePrice}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
          <Grid item sx={{ width: 250, display: { xs: 'none', md: 'block' } }}>
            <Paper elevation={0}>
              <Typography variant="body1">Địa chỉ: Hà Nội</Typography>
              <Typography variant="body1">Họ Tên: {user.fullName}</Typography>
              <Typography variant="body1">Tổng tiền:{total}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CartFeature;
