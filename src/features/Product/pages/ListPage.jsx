import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, Pagination } from '@mui/material';
import procductApi from 'api/productApi';
import ProductsSkeleton from '../components/ProductsSkeleton';
import ProductList from '../components/ProductList';
import ProductSort from '../components/ProductSort';
ListPage.propTypes = {};

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({ _limit: 12, _total: 10, _page: 1 });
  const [filters, setFilters] = useState({ _limit: 12, _page: 1, _sort: 'salePrice:ASC' });
  const handlePageChange = (e, page) => {
    setFilters((prev) => ({ ...prev, _page: page }));
  };

  const handleSortChange = (newSort) => {
    setFilters((prev) => ({ ...prev, _sort: newSort }));
  };

  useEffect(() => {
    (async () => {
      try {
        const reponse = await procductApi.getAll(filters);
        console.log(reponse);
        const { data, pagination } = reponse;
        setPagination(pagination);
        setProductList(data);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    })();
  }, [filters]);

  return (
    <Box>
      <Container>
        <Grid spacing={1} container>
          <Grid item sx={{ width: 250 }}>
            <Box xs={{ display: 'none' }} sm={{ display: 'none' }} md={{ display: 'block' }}>
              <Paper elevation={0}>Left</Paper>
            </Box>
          </Grid>
          <Grid item sx={{ flex: '1 1 0' }}>
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
              {isLoading ? <ProductsSkeleton /> : <ProductList data={productList} />}{' '}
              <Box
                sx={{ display: 'flex', justifyContent: 'center', flexFlow: 'row nowrap' }}
                mt="20px"
                paddingBottom={2}
              >
                <Pagination
                  count={Math.ceil(pagination._total / pagination._limit)}
                  color="primary"
                  page={pagination._page}
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
