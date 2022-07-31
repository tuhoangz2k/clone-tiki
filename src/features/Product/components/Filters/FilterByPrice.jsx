import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(values);
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <Box mt={4} borderTop="1px solid #999" padding={1}>
      <Typography variant="subtitle2">Chọn Khoảng Giá</Typography>
      <Box mt={1} mb={2} sx={{ display: 'flex', flexFlow: 'row nowrap' }}>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} variant="standard" />
        <span style={{ marginLeft: '6px', marginRight: '6px' }}>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" onClick={handleSubmit}>
          Áp Dụng
        </Button>
      </Box>
    </Box>
  );
}

export default FilterByPrice;
