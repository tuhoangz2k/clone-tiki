import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
ProductMenu.propTypes = {};

function ProductMenu(props) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, listStyle: 'none' }}>
      <li style={{ padding: '16px 32px' }}>
        <Link component={NavLink} to=".">
          Mô Tả
        </Link>
      </li>
      <li style={{ padding: '16px 32px' }}>
        <Link component={NavLink} to="additional">
          thêm chi tiết
        </Link>
      </li>
      <li style={{ padding: '16px 32px' }}>
        <Link component={NavLink} to="reviews">
          Nhận Xét
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
