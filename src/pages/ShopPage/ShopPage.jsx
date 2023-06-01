import { Outlet, useNavigate, useParams } from 'react-router-dom';

import s from './ShopPage.module.scss';
import { useEffect } from 'react';

function ShopPage() {
  // const { shopName } = useParams();
  
  // useEffect(() => {
  // if(!shopName){navigate(`shop/all`)}

  // }, [shopName])
  

  const navigate = useNavigate();

  const handleFilter = (shopName) => {
    navigate(`shop/${shopName}`);
  };

  return (
    <section className={s.containerPage}>
      <div className={s.sectionSidebar}>
        <div className={s.sidebarList}>
          <p className={s.title}>Shops:</p>
           <button className={s.link} onClick={() => handleFilter('all')}>
            All Shops
          </button>
          <button className={s.link} onClick={() => handleFilter("MCDonald's")}>
            MCDonald's
          </button>
          <button className={s.link} onClick={() => handleFilter('KFC')}>
            KFC
          </button>
          <button className={s.link} onClick={() => handleFilter('Sushi Go')}>
            Sushi Go
          </button>
          <button className={s.link} onClick={() => handleFilter('NOA')}>
            NOA
          </button>
        </div>
      </div>
      <div className={s.containerMain}>
        <Outlet />
      </div>
    </section>
  );
}

export default ShopPage;