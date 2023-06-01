import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import { getAllProducts } from 'redux/shop/operation';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import ShopPage from './pages/ShopPage/ShopPage.jsx';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage.jsx';
import MainShop from './components/ProductsList/ProductsList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ShopPage />}>
          <Route path="/:shopName" element={<MainShop />} />
        </Route>
        <Route path="/shoppingCart" element={<ShoppingCartPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
