import s from './BasketShop.module.scss';
import img from '../../image/image.jpg';
import minImg from '../../image/minion.webp';

function BasketShop() {
  return (
    <div className={s.sectionBasket}>
      <div className={s.boxes}>
        <div className={s.basketList}>
          <div className={s.item}>
            <img src={img} alt="dish" className={s.image} />
            <div className={s.description}>
              <p className={s.title}>name</p>
              <p className={s.price}>
                Price: <span>120</span>
              </p>
              <input
                type="number"
                placeholder="Quantity"
                name=""
                value=""
                className={s.input}
              />
            </div>
          </div>
          <div className={s.item}>
            <img src={minImg} alt="dish" className={s.image} />
            <div className={s.description}>
              <p className={s.title}>name</p>
              <p className={s.price}>
                Price: <span>120</span>
              </p>
              <input
                type="number"
                placeholder="Quantity"
                name=""
                value=""
                className={s.input}
              />
            </div>
          </div>
        </div>
        <div className={s.boxTotal}>
          <p className={s.price}>
            Total price: <span>2500</span>
          </p>
          <button className={s.btn}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default BasketShop;
