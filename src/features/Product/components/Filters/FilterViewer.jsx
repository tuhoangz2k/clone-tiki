import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip } from '@mui/material';
import { useMemo } from 'react';

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

const FILTER_LIST = [
  {
    id: 1,
    getLabel: (filters) => 'Free Ship',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemoveble: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (filters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => 'Khuyến Mại',
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemoveble: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filters) => `Giá từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) => {
      const isShow =
        filters.salePrice_gte && filters.salePrice_lte && filters.salePrice_lte > 0 && filters.salePrice_gte > 0;
      return isShow;
    },
    isRemoveble: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;

      return newFilters;
    },
    onToggle: () => {},
  },
];

function FilterViewer({ onChange = null, filters = {} }) {
  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', listStyle: 'none', margin: '16px 0' }}
    >
      {visibleFilters.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            clickable={!x.isRemoveble}
            onClick={
              x.isRemoveble
                ? null
                : () => {
                    if (!onChange) return;
                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemoveble
                ? () => {
                    if (!onChange) return;
                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
