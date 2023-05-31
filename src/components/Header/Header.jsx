import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss';
function Header() {
  return (
    <div className={s.headerContainer}>
     <nav>
            <NavLink to='/shop' className={s.link}>Shop</NavLink>
            <NavLink to='/shoppingCart' className={s.link}>Shopping Cart</NavLink>
        </nav>
    </div>
       
   
  )
}

export default Header