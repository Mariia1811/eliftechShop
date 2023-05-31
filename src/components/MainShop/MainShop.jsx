import React from 'react'
import s from './MainShop.module.scss';
import img from '../../image/image.jpg';
import minImg from '../../image/minion.webp';


function MainShop() {
  return (
    <div className={s.containerMain}>
            <div className={s.list}>
            <div className={s.item}>
                <img src={img} alt="dish" className={s.image} />
                <div className={s.description}>
                <p className={s.title}>name</p>
                <p className={s.price}>Price: <span>120</span></p>
                <button className={s.btn}> add to Cart</button>
                </div>
            </div>
            <div className={s.item}>
                <img src={minImg} alt="dish" className={s.image} />
                <div className={s.description}>
                <p className={s.title}>name</p>
                <p className={s.price}>Price: <span>120</span></p>
                <button className={s.btn}> add to Cart</button>
                </div>
            </div>
           
            </div>
       
    </div>
  )
}

export default MainShop