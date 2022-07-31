import { Box } from '@mui/material';
import { THUMBNAIL_PLACEHOLDER } from 'constants';
import { STATIC_HOST } from 'constants';
import React from 'react';

function ProductThumbnail({ product }) {
  const thumbnail = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  return (
    <Box>
      <img src={thumbnail} alt={product.name} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
