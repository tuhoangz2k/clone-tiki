import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { formatPrice } from 'utils';

ProductInfor.propTypes = {
  product: PropTypes.object,
};

function ProductInfor({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    <Box>
      <Typography>{name}</Typography>
      <Typography sx={{ marginTop: '32px' }}>{shortDescription}</Typography>
      <Box sx={{ backgroundColor: 'rgba(250, 250, 250)', height: 100 }} marginTop={4}>
        <Box component="span" marginRight={2} sx={{ fontSize: 32 }} color="rgb(255, 66, 78)">
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <Fragment>
            <Box component="span" marginRight={2} sx={{ textDecoration: 'line-through', fontSize: 16 }}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span" color="rgb(255, 66, 78)">
              -{promotionPercent}%
            </Box>
          </Fragment>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfor;
