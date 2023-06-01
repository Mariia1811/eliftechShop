import { useEffect, useState } from 'react';
import { baseUrl } from '../../conts/const';
import s from './ShoppingCartPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketId, getOrderFoodsList } from 'redux/shop/shopSelectot';
import { getProductsById, submitOrder } from 'redux/shop/operation';
import { toast } from 'react-toastify';

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
  const [totalSum, settotalSum] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (basketIdList?.length > 0) {
      basketIdList?.map(item => dispatch(getProductsById(item)));
    }
    setOrderFoodsList(orderFoodsListfromState);
    const sumOrder = orderFoodsListfromState.reduce(
      (sum, item) => sum + item.price,
      0
    );
    settotalSum(sumOrder);
  }, [basketIdList, orderFoodsListfromState, dispatch]);

  useEffect(() => {
    if (dataOrderforSubmit) {
      dispatch(submitOrder(dataOrderforSubmit));
       
    }
  
}, [dataOrderforSubmit, dispatch]);

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
    return sum + item.price * item.quantity;
  }, 0);

  settotalSum(newTotalSum);
  }

  function handleSubmit() {
    setDataOrderforSubmit({ ...dataOrder, order: [...orderFoodsList], total: totalSum })
     
  }

  if (orderFoodsList)
    return (
      <div className={s.containerPage}>
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
                        onChange={e =>
                          handleChangeQuantity(food._id, e)
                        }
                        className={s.input}
                      />
                    </div>
                  </li>
                ))}
            </ul>
            <div className={s.boxTotal}>
              <p className={s.price}>
                Total price: <span>{totalSum}</span>
              </p>
              <button className={s.btn} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShoppingCartPage;
