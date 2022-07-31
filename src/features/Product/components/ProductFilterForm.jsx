import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilterForm.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilterForm({ filters, onChange }) {
  const handleCategoryChange = (newCategory) => {
    if (!onChange) return;
    const newFilters = { ...filters, 'category.id': newCategory.id };
    onChange(newFilters);
  };
  const handleChange = (value) => {
    if (onChange) onChange(value);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilterForm;
