import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

function Card(props){
    return(
        <div className={`${styles['card']} clear`}>
            <div className={`${styles['card-wrapper']}`}>
            <div className={`${styles['card-inner']}`}>
                <Link to='/'><img className={`${styles['item-img']} mb-15`} src="./img/itemCat.png" alt='' /></Link>
                <Link to='/'><p className={`${styles['item-name']} mb-5`}>Пальто Leo Pride Мадрид PM3264 50 Кэмел крутое супер пупер</p></Link>
                <div className={`${styles['item-price']}`}>260 ₴</div>
                <div className={`${styles['item-additional']}`}>
                    <div className={`d-flex align-center justify-between`}>
                    <div>
                    <div className={`${styles['h-size']} mt-5 mb-5`}>Размер</div>
                    <div className={`${styles['size-line']} clear d-flex justify-between`}>
                        <div className={`${styles['size-single']} ${styles['in-stock']}`}>XS</div>
                        <div className={`${styles['size-single']} ${styles['in-stock']}`}>S</div>
                        <div className={`${styles['size-single']} ${styles['in-stock']}`}>M</div>
                        <div className={`${styles['size-single']} ${styles['in-stock']}`}>L</div>
                        <div className={`${styles['size-single']} ${styles['clicked']}`}>XL</div>
                        <div className={`${styles['size-double']} ${styles['out-of-stock']}`}>2XL</div>
                        <div className={`${styles['size-double']} ${styles['out-of-stock']}`}>3XL</div>
                        <div className={`${styles['size-double']} ${styles['out-of-stock']}`}>4XL</div>
                    </div>
                </div>
                <svg className={`${styles['clicked']}`} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.125 12.5C0.78125 9.37501 1.5625 4.68751 5.46875 3.12501C9.375 1.56251 11.7188 4.68751 12.5 6.25001C13.2812 4.68751 16.4062 1.56251 20.3125 3.12501C24.2188 4.68751 24.2188 9.37501 21.875 12.5C19.5312 15.625 12.5 21.875 12.5 21.875C12.5 21.875 5.46875 15.625 3.125 12.5Z" stroke="#F39712" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Card;