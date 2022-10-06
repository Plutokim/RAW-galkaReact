import {Link} from "react-router-dom";

import styles from './Footer.module.scss';
function Footer(){
    return(
        
        <footer className={`${styles['wrapper']}`}>
        <div className={`${styles['footer-inner']} d-flex justify-between align-center`}>
        <div className={`left`}>
            <Link to="/">
            <img  className={`${styles['logo']} mb-20`} src="img/logoFooter.svg" alt="Logo" />
            </Link>
            <div className={`${styles['notif-text']}`}>Подпишись на рассылку <br />и получи скидку 10% </div>
            <div className={`email-form clear d-flex`}>
                <input className={`${styles['email-input']}`} type="text" placeholder="Email" />
                <button className={`${styles['send-btn']} d-flex align-center`}>
                <img src="img/arrowRight.svg" alt="send" />
                </button>
            </div>
        </div>
        <div className={`center d-flex clear`}>
            <div className={`center-left mr-45`}>
                <div className={`${styles['h-text']}`}>Магазин Galka</div>
                <Link to="/" className={`${styles['location-text']}`}>
                <div className={`${styles['info-text']}`}>город Мелитополь</div>
                <div className={`${styles['info-text']}`}>Пр-т Богдана Хмельницкого 19</div>
                <div className={`${styles['info-text']}`}>Пн-Вс - 9:00-19:00</div></Link>
                <div className={`${styles['info-text']}`}><a href="tel:+380971514015">+380 (97) 1514015</a></div>
            </div>
            <div className={`center-right`}>
            <div className={`${styles['h-text']}`}>Полезное</div>
            <Link to="/">
            <div className={`${styles['info-text']}`}>Скидки</div>
            </Link>
            <Link to="/">
            <div className={`${styles['info-text']}`}>Оплата</div>
            </Link>
            <Link to="/">
            <div className={`${styles['info-text']}`}>Обмен и возврат</div>
            </Link>
            <Link to="/">
            <div className={`${styles['info-text']}`}>Доставка</div>
            </Link>
            </div>
        </div>
        <>
        <div dangerouslySetInnerHTML={{__html:'<script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>'}} />
        <iframe title="inst" src="//lightwidget.com/widgets/e865b712cc7d5a0bb0acc571deedc507.html" scrolling="no" allowtransparency="true" className={`${styles['inst-block']}`}></iframe>
        </>
        </div>
        <div className={`${styles['pluto']} clear`}><a href="https://github.com/Plutokim" target="_blank" rel="noopener noreferrer">Galka  © 2022 All rights reserved | Модный супермаркет | Created by PlutoKim</a></div>

        </footer>
    );
}
export default Footer;