import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';

function Header() {
  return (
    <header className={s.headerContainer}>
      <nav className={s.headerContainerNav}>
        <NavLink to="/shop" className={s.link}>
          Shop
        </NavLink>
        <NavLink to="/shoppingCart" className={s.link}>
          Cart
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
