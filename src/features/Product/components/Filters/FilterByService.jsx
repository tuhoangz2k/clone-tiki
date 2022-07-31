import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControlLabel, Checkbox, Typography } from '@mui/material';

FilterByService.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

function FilterByService({ onChange, filters = {} }) {
  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;

    onChange({ [name]: checked });
  };
  return (
    <Box mt={4} borderTop="1px solid #999" padding={1}>
      <Typography variant="subtitle2">Dịch Vụ</Typography>
      <ul style={{ listStyle: 'none' }}>
        {[
          { value: 'isPromotion', label: 'Khuyến Mại' },
          { value: 'isFreeShip', label: 'FreeShip' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              checked={Boolean(filters[service.value])}
              control={<Checkbox name={service.value} onChange={handleChange} />}
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
