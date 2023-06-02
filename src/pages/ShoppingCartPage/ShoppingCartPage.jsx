import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBasketId, getOrderFoodsList } from 'redux/shop/shopSelectot';
import { getProductsById, submitOrder } from 'redux/shop/operation';

import { baseUrl } from '../../conts/const';

import s from './ShoppingCartPage.module.scss';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const ShoppingCartPage = () => {
  const basketIdList = useSelector(getBasketId);
  const orderFoodsListfromState = useSelector(getOrderFoodsList);

  const [dataOrder, setDataOrder] = useState(initialState);
  const [dataOrderforSubmit, setDataOrderforSubmit] = useState(null);
  const [orderFoodsList, setOrderFoodsList] = useState(orderFoodsListfromState);
  const [totalSum, setTotalSum] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (basketIdList?.length > 0) {
      basketIdList?.map(item => dispatch(getProductsById(item)));
    }
    setOrderFoodsList(orderFoodsListfromState);

    const sumOrder = orderFoodsListfromState?.reduce(
      (sum, item) => sum + item.price,
      0
    );
    setTotalSum(sumOrder);
  }, [basketIdList, orderFoodsListfromState, dispatch]);

  useEffect(() => {
    const savedDataOrder = localStorage.getItem('dataOrder');
    const savedOrderFoodsList = localStorage.getItem('orderFoodsList');
    const savedTotalSum = localStorage.getItem('totalSum');

    if (savedDataOrder) {
      setDataOrder(JSON.parse(savedDataOrder));
    }
    if (savedOrderFoodsList) {
      setOrderFoodsList(JSON.parse(savedOrderFoodsList));
    }
    if (savedTotalSum) {
      setTotalSum(JSON.parse(savedTotalSum));
    }
  }, []);

  useEffect(() => {
    if (dataOrderforSubmit) {
      dispatch(submitOrder(dataOrderforSubmit));
    }
  }, [dataOrderforSubmit, dispatch]);

    useEffect(() => {
    localStorage.setItem('dataOrder', JSON.stringify(dataOrder));
  }, [dataOrder]);

  useEffect(() => {
    localStorage.setItem('orderFoodsList', JSON.stringify(orderFoodsList));
  }, [orderFoodsList]);

  useEffect(() => {
    localStorage.setItem('totalSum', JSON.stringify(totalSum));
  }, [totalSum]);

  const handleChange = e => {
    const { name, value } = e.target;
    setDataOrder(pS => ({
      ...pS,
      [name]: value,
    }));
  };

  function handleChangeQuantity(id, e) {
    const updatedOrderFoodsList = orderFoodsList.map(item => {
      if (item._id === id) {
        return {
          ...item,
          quantity: e.target.value,
        };
      }
      return item;
    });

    setOrderFoodsList(updatedOrderFoodsList);

    const newTotalSum = updatedOrderFoodsList.reduce((sum, item) => {
      const quantity = item.quantity || 1;
      return sum + item.price * quantity;
    }, 0);

    setTotalSum(newTotalSum);
  }

  function handleDelete(id) {
  const updatedOrderFoodsList = orderFoodsList.filter(item => item._id !== id);
  setOrderFoodsList(updatedOrderFoodsList);

  const newTotalSum = updatedOrderFoodsList.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    return sum + item.price * quantity;
  }, 0);

  setTotalSum(newTotalSum);
}

  function handleSubmit() {
    setDataOrderforSubmit({
      ...dataOrder,
      order: [...orderFoodsList],
      total: totalSum,
    });
    setDataOrder(initialState);

      localStorage.removeItem('dataOrder');
    localStorage.removeItem('orderFoodsList');
    localStorage.removeItem('totalSum');
  }

  if (orderFoodsList)
    return (
      <section className={s.containerPage}>
        <div className={s.sectionForm}>
          <form className={s.formList}>
            <div className={s.overInput}>
              <label htmlFor="name" className={s.label}>
                Name:
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                value={dataOrder.name}
                className={s.input}
                onChange={handleChange}
              />
            </div>

            <div className={s.overInput}>
              <label htmlFor="email" className={s.label}>
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={dataOrder.email}
                className={s.input}
                onChange={handleChange}
              />
            </div>

            <div className={s.overInput}>
              <label htmlFor="phone" className={s.label}>
                Phone:
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone"
                name="phone"
                value={dataOrder.phone}
                className={s.input}
                onChange={handleChange}
              />
            </div>

            <div className={s.overInput}>
              <label htmlFor="address" className={s.label}>
                Address:
              </label>
              <input
                id="address"
                type="text"
                placeholder="Address"
                name="address"
                value={dataOrder.address}
                className={s.input}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className={s.sectionBasket}>
          <div className={s.boxes}>
            <ul className={s.basketList}>
              {orderFoodsList?.length > 0 &&
                orderFoodsList?.map(food => (
                  <li className={s.item} key={food._id}>
                    <img
                      src={`${baseUrl}/${food.img}`}
                      alt="dish"
                      className={s.image}
                    />
                    <div className={s.description}>
                      <p className={s.title}>{food.name}</p>
                      <p className={s.price}>
                        Price: <span>{food.price}</span>
                      </p>
                      <input
                        type="number"
                        min={0}
                        placeholder="Quantity"
                        name={`${food._id}`}
                        value={
                          orderFoodsList.find(item => item._id === food._id)
                            ?.quantity || '1'
                        }
                        onChange={e => handleChangeQuantity(food._id, e)}
                        className={s.input}
                      />
                    </div>
                     <button className={s.dltBtn} onClick={() => handleDelete(food._id)}>X</button>
                  </li>
                ))}
            </ul>
            <div className={s.boxTotal}>
              <p className={s.price}>
                Total price: <span>{totalSum}</span>
              </p>
              <button className={s.btn} onClick={handleSubmit}>
                Make an Order
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ShoppingCartPage;