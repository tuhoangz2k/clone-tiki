import React from 'react';

import { Box, Skeleton, Typography } from '@mui/material';
import { THUMBNAIL_PLACEHOLDER, STATIC_HOST } from 'constants/index';

function Product({ product }) {
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;

  return (
    <Box padding={1}>
      <Box
        padding={1}
        xs={{ minHeight: '180px' }}
        sm={{ minHeight: '200px' }}
        md={{ minHeight: '210px' }}
        lg={{ minHeight: '220px' }}
      >
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>
      <Box pl={1} pr={1}>
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {product.salePrice}
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
          </Box>
          {product.promotionPercent <= 0 ? '' : ` -${product.promotionPercent}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default Product;
