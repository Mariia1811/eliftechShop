import React from 'react'
import BasketShop from './../../components/BasketShop/BasketShop';
import Form from './../../components/Form/Form';
import s from './ShoppingCartPage.module.scss';

const ShoppingCartPage = () => {
  return (
    <div className={s.containerPage}>
      <Form/>
      <BasketShop/>
    </div>
  )
}

export default ShoppingCartPage
