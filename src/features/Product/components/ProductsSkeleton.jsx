import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@mui/material';

ProductsSkeleton.propTypes = {
  length: PropTypes.number,
};

ProductsSkeleton.defaultProps = {
  length: 12,
};
function ProductsSkeleton({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rectangular" width="90%" height={215} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsSkeleton;
