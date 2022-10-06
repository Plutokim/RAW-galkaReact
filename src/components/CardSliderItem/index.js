import {Link} from "react-router-dom";

import styles from './CardSliderItem.module.scss';
function CardSliderItem(){
    return (
        <div className={`${styles['card-wrapper']} `}>
        <div className={`${styles['card-inner']} clear`}>
            <Link to='/'><img className={`${styles['item-img']}`} src="./img/item.png" alt="item" /></Link>
           <Link to="/"><p className={`${styles['item-name']} pt-5 pb-5`}>Пальто Leo Pride Мадрид PM3264 50 Кэмел крутое супер пупер</p></Link>
            <div className={`${styles['item-price']}`}>260 ₴</div>
        </div>
        </div>
    );
}

export default CardSliderItem;
