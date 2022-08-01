import React, { useEffect } from 'react';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import SongFeature from './features/Song';
import TodoFeature from './features/Todo';
import NotFound from './components/NotFound';
import HomePage from './Pages/Home';
import DetailPage from './features/Todo/pages/DetailPage';
import procductApi from './api/productApi';
import Header from 'components/Header';
import ProductFeature from './features/Product';
import ListPage from './features/Product/pages/ListPage';
import Footer from 'components/Footer';
import { Box, Container } from '@mui/material';
import DetailProductPage from 'features/Product/pages/DetailProductPage';
import ProductMenu from 'features/Product/components/Filters/ProductMenu';
import ProductDescription from 'features/Product/components/Filters/ProductDescription';
import ProductAdditional from 'features/Product/components/Filters/ProductAdditional';
import ProductReview from 'features/Product/components/Filters/ProductReview';
import CartFeature from 'features/Cart';

// import ListPage from './features/Todo/pages/ListPage/index';
function App() {
  return (
    <Box className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />

        <Route path="products" element={<ProductFeature />}>
          <Route index element={<ListPage />} />
          <Route path=":productId" element={<DetailProductPage />}>
            <Route index element={<ProductDescription />} />
            <Route path="additional" element={<ProductAdditional />} />
            <Route path="reviews" element={<ProductReview />} />
          </Route>
        </Route>
        <Route path="cart" element={<CartFeature />} />
        {/* <Route path="todos" element={<TodoFeature />}>
          <Route index element={<ListPage />} />
          <Route path=":todoId" element={<DetailPage />} />
        </Route>

        <Route path="songs" element={<SongFeature />} />
        <Route path="*" element={<NotFound />} />
        <Route path="home/*" element={<Navigate to="/" replace />} /> */}
        {/* <Route path='post-list/:postId' element={ <Navigate to='/' replace />}/> */}
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
