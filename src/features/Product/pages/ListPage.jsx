import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper, Pagination } from '@mui/material';
import procductApi from 'api/productApi';
import ProductsSkeleton from '../components/ProductsSkeleton';
import ProductList from '../components/ProductList';
import ProductSort from '../components/Filters/ProductSort';
import ProductFilterForm from '../components/ProductFilterForm';
import FilterViewer from '../components/Filters/FilterViewer';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
ListPage.propTypes = {};

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [pagination, setPagination] = useState({ _limit: 12, _total: 10, _page: 1 });
  // const [filters, setFilters] = useState({ _limit: 12, _page: 1, _sort: 'salePrice:ASC' });
  const querryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    console.log(location);
    return {
      ...params,
      _limit: Number.parseInt(params._limit) || 12,
      _page: Number.parseInt(params._page) || 1,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);

  // const [filters, setFilters] = useState(() => {
  //   return {
  //     ...querryParams,
  //     _limit: Number.parseInt(querryParams._limit) || 12,
  //     _page: Number.parseInt(querryParams._page) || 1,
  //     _sort: querryParams._sort || 'salePrice:ASC',
  //   };
  // });
  const handlePageChange = (e, page) => {
    // setFilters((prev) => ({ ...prev, _page: page }));
    const filters = { ...querryParams, _page: page };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newSort) => {
    // setFilters((prev) => ({ ...prev, _sort: newSort }));
    const filters = { ...querryParams, _sort: newSort };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFiltersChange = (newFilters) => {
    // setFilters((prev) => ({ ...prev, ...newFilters }));
    const filters = { ...querryParams, ...newFilters };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  // useEffect(() => {
  //   navigate({
  //     pathname: location.pathname,
  //     search: queryString.stringify(querryParams),
  //   });
  // }, [querryParams]);

  useEffect(() => {
    (async () => {
      try {
        const reponse = await procductApi.getAll(querryParams);
        const { data, pagination } = reponse;
        setPagination(pagination);
        setProductList(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    })();
  }, [querryParams]);

  const setNewFilters = (newFilters) => {
    // setFilters(newFilters);
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newFilters),
    });
  };
  return (
    <Box marginTop={2}>
      <Container>
        <Grid spacing={1} container>
          <Grid item sx={{ width: 250, display: { xs: 'none', md: 'block' } }}>
            <Paper elevation={0}>
              <ProductFilterForm filters={querryParams} onChange={handleFiltersChange} />
            </Paper>
          </Grid>
          <Grid item sx={{ flex: '1 1 0' }}>
            <Paper elevation={0}>
              <ProductSort currentSort={querryParams._sort} onChange={handleSortChange} />
              <FilterViewer filters={querryParams} onChange={setNewFilters} />
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
