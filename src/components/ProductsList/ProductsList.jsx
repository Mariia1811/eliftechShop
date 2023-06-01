import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { changeBasket } from 'redux/shop/shopSlice';

import { baseUrl } from '../../conts/const.js';

import s from './ProductsList.module.scss';

function ProductsList({foodsList}) {
  const [arrBasketId, setarrBasketId] = useState([]);
  const dispatch = useDispatch();
 

  useEffect(() => {
    if (arrBasketId.length > 0) {
      dispatch(changeBasket(arrBasketId));
    }
  }, [arrBasketId, dispatch]);

  function handleClick(id) {
    if (!arrBasketId.includes(id)) {
      setarrBasketId(pS => [...pS, id]);
      toast.info('Товар додано!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
    }
  }

  return (
      <ul className={s.list}>
        {foodsList &&
          foodsList.map(({ _id, name, price, img }) => (
            <li className={s.item} key={_id}>
              <img src={`${baseUrl}/${img}`} alt="dish" className={s.image} />
              <div className={s.description}>
                <p className={s.title}>{name}</p>
                <p className={s.price}>
                  Price: <span>{price}</span>
                </p>
                <button className={s.btn} onClick={() => handleClick(_id)}>
                  add to Cart
                </button>
              </div>
            </li>
          ))}
      </ul>
  );
}

export default ProductsList;
