import {Link} from "react-router-dom";

import styles from './Header.module.scss';
function Header(){
    return(
        <header className={styles[`wrapper`]}>
            <div className={`${styles['header-inner']} d-flex align-center justify-between`}>
                <Link to='/'>
                    <img className={`${styles['logo']}`} src='img/logo.svg' alt="Logo" />
                </Link>
                <div className={`${styles['center']} clear`}>
                    <div className="search d-flex justify-center clear">
                        <input className={styles[`inputfield`]} type="text" placeholder="Поиск" />
                    <Link to='/'>
                    <button className={`${styles['search-btn']} d-flex justify-center align-center`}>
                        <img src="img/search-Icon.svg" alt=" " />
                    </button>
                    </Link>
                    </div>
                    <nav className={`mt-30`}>
                    <ul className={`${styles['navigation']} d-flex justify-between `}>
                    <Link to='/'><li>Главная</li></Link>
                        <Link to='catalog'> <li value='sale'>Скидки</li></Link>
                        <Link to='/'><li value='new'>Новинки</li></Link>
                        <Link to='/'><li value='clothes'>Одежда</li></Link>
                        <Link to='/'><li value='accessories'>Аксессуары</li></Link>
                        <Link to='/'> <li>Доставка</li></Link>
                       <Link to='/'> <li>Контакты</li></Link>
                    </ul>
                    </nav>
                </div>
                <div className={`${styles['right']} clear`}>
                <ul className="d-flex">
                    <li className={` ${styles['color-hover']} flexWrapper d-flex`}>
                        <svg className={styles['cart-svg']}viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5808 10.7864H27.3209V8.62946C27.3209 4.5431 24.0079 1.23007 19.9215 1.23007C15.8349 1.23007 12.5219 4.5431 12.5219 8.62946V10.7864H6.82747C6.35738 10.7877 5.97619 11.1684 5.97485 11.639V34.4677C5.97592 36.8216 7.88376 38.7294 10.2374 38.7302H29.1791C31.533 38.7294 33.4409 36.8216 33.4414 34.4677V11.639C33.4361 11.1668 33.0525 10.7872 32.5808 10.7864V10.7864ZM14.2183 8.62092C14.2183 5.47607 16.7682 2.92623 19.9127 2.92623C23.0581 2.92623 25.6074 5.47607 25.6074 8.62092V10.7778H14.2183V8.62092ZM31.7282 34.4677C31.7239 35.8787 30.5814 37.0212 29.1708 37.0253H10.2291C8.81806 37.0212 7.67555 35.8787 7.67154 34.4677V12.4913H12.5134V15.9608C12.5134 16.4317 12.8953 16.8134 13.3657 16.8134C13.8366 16.8134 14.2183 16.4317 14.2183 15.9608V12.4913H25.616V15.9608C25.616 16.4317 25.9977 16.8134 26.4686 16.8134C26.9389 16.8134 27.3209 16.4317 27.3209 15.9608V12.4913H31.7282V34.4677Z"/>
</svg>
                        <div className={`d-flex align-center pr-15`}>
                        <div className={`ml-10`}>
                            <div>Товаров:</div>
                            <div>Сумма:</div>
                        </div>
                        <div className={`${styles['info']}`}>
                            <div className={`ammount`}>100 шт.</div>
                            <div className={`sumPrice`}>10000 грн.</div>
                        </div>
                        </div>
                    </li>
                    <li>
                        <svg className={styles['user-svg']} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 37.5C29.665 37.5 37.5 29.665 37.5 20C37.5 10.335 29.665 2.5 20 2.5C10.335 2.5 2.5 10.335 2.5 20C2.5 29.665 10.335 37.5 20 37.5Z" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 22.5C23.4518 22.5 26.25 19.7018 26.25 16.25C26.25 12.7982 23.4518 10 20 10C16.5482 10 13.75 12.7982 13.75 16.25C13.75 19.7018 16.5482 22.5 20 22.5Z" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.75 31.375C9 26.25 14 22.625 20 22.625C26 22.625 31.125 26.25 33.25 31.375" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </li>
                </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;