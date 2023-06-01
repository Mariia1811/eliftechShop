import { useSelector } from 'react-redux';
import { getAllList } from 'redux/shop/shopSelectot';

import MainShop from '../../components/ProductsList/ProductsList';
import SideBar from '../../components/SideBar/SideBar';
import s from './ShopPage.module.scss';

function ShopPage() {
  const foodsList = useSelector(getAllList);

  return (
    <div className={s.containerPage}>
      <SideBar />
       <div className={s.containerMain}>
        <MainShop foodsList={foodsList} />
        </div>
    </div>
  );
}

export default ShopPage;
