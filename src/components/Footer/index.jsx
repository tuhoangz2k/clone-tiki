import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Typography } from '@mui/material';

Footer.propTypes = {};

function Footer(props) {
  return (
    <Box>
      <Container>
        <Typography variant="h4" component="h3" align="center">
          Footer
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
