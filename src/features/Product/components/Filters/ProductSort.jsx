import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs value={currentSort} onChange={handleSortChange} aria-label="disabled tabs example">
      <Tab label="Giá Tăng Dần" value="salePrice:ASC" />
      <Tab label="Giá Giảm Dần" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
