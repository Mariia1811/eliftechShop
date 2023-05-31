import React from 'react';
import MainShop from '../../components/MainShop/MainShop';
import SideBar from '../../components/SideBar/SideBar';
import s from './ShopPage.module.scss';
function ShopPage() {
  return (
    <div className={s.containerPage}>
      <SideBar />
      <MainShop />
    </div>
  );
}

export default ShopPage;
