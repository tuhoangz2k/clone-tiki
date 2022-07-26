import React, { useEffect } from 'react';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import SongFeature from './features/Song';
import TodoFeature from './features/Todo';
import NotFound from './components/NotFound';
import HomePage from './Pages/Home';
import ListPage from './features/Todo/pages/ListPage';
import DetailPage from './features/Todo/pages/DetailPage';
import procductApi from './api/productApi';
import CouterFeature from './features/Counter';
import Header from 'components/Header';

function App() {
  useEffect(() => {
    async function fetchProducts() {
      const params = { _limit: 10 };
      const productList = await procductApi.getAll(params);
      console.log(productList);
    }
    fetchProducts();
  }, []);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="todos" element={<TodoFeature />}>
          <Route index element={<ListPage />} />
          <Route path=":todoId" element={<DetailPage />} />
        </Route>

        <Route path="songs" element={<SongFeature />} />
        <Route path="*" element={<NotFound />} />
        <Route path="home/*" element={<Navigate to="/" replace />} />
        {/* <Route path='post-list/:postId' element={ <Navigate to='/' replace />}/> */}
      </Routes>
      <h1>Fotter</h1>
    </div>
  );
}

export default App;
