import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { getAllProducts } from 'redux/shop/operation';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';

const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage.jsx'));
const ShoppingCartPage = lazy(() =>
  import('./pages/ShoppingCartPage/ShoppingCartPage.jsx')
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<ShopPage />} />
          <Route path="/shoppingCart" element={<ShoppingCartPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
