import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getAllList } from 'redux/shop/shopSelectot';
import { changeBasket } from 'redux/shop/shopSlice';

import { baseUrl } from '../../conts/const.js';

import { toast } from 'react-toastify';
import s from './ProductsList.module.scss';
import { useParams } from 'react-router-dom';

function ProductsList() {
  const foodsList = useSelector(getAllList);
  const { shopName } = useParams();

  const [listOneShop, setListOneShop] = useState(null);
  const [arrBasketId, setarrBasketId] = useState([]);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (arrBasketId.length > 0) {
      dispatch(changeBasket(arrBasketId));
    }
    setListOneShop(foodsList);
  }, [arrBasketId, foodsList, dispatch]);

  useEffect(() => {
    switch (shopName) {
      case "MCDonald's":
        const arrMCDonal = foodsList?.filter(item => item.store === 'McDonald');
        setListOneShop(arrMCDonal);
        break;

      case 'KFC':
        const arrKFC = foodsList?.filter(item => item.store === 'KFC');
        setListOneShop(arrKFC);
        break;

      case 'Sushi Go':
        const arrSushiMaster = foodsList?.filter(
          item => item.store === 'sushiMaster'
        );
        setListOneShop(arrSushiMaster);
        break;
      case 'NOA':
        const arrNOA = foodsList?.filter(item => item.store === 'noa');
        setListOneShop(arrNOA);
        break;

      default:
        setListOneShop(foodsList);
    }
  }, [foodsList, shopName]);

  function handleClick(id) {
    if (!arrBasketId.includes(id)) {
      setarrBasketId(pS => [...pS, id]);
      toast.success('Added to Cart. Go to Cart ➜', {
        position: 'top-center',
        autoClose: 300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    }
  }

  return (
    <ul className={s.list}>
      {listOneShop &&
        listOneShop.map(({ _id, name, price, img }) => (
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
