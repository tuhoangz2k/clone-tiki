import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import categoryApi from 'api/categoryApi';
import { styled } from '@mui/system';

const MyCategory = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  '& > li': {
    marginTop: theme.spacing(1),
    transition: 'all 0.25s',
    '&:hover': {
      color: '#1976d2',
      cursor: 'pointer',
    },
  },
}));
FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      const categoryList = await categoryApi.getAll();
      setCategoryList(categoryList);
    })();
  }, []);
  const handleCategoryClick = (id) => {
    if (onChange) onChange(id);
  };
  return (
    <Box>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <MyCategory>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            {' '}
            <Typography variant="text">{category.name}</Typography>
          </li>
        ))}
      </MyCategory>
    </Box>
  );
}

export default FilterByCategory;
