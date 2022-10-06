import CardSlider from '../../components/CardSlider';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss'

function NotFound(){
    return(
    <main>
    <div className={`${styles['wrapper']} clear`}>
    <div className={`${styles['error404']} ml-10 mb-10`}>ОШИБКА 404</div>
    <div className={`${styles['page-n-found']} ml-10 mb-20`}>СТРАНИЦА НЕ НАЙДЕНА</div>
    <div className={`${styles['wrong-adress-txt']} ml-10 mb-10`}>Неправильно набран адрес или такой страницы на сайте больше не существует</div>
    <Link to='/'><div className={`${styles['main-btn']} d-flex align-center justify-center ml-10 mb-30`}>Перейти на главную страницу</div></Link>
    <div className={`${styles['category-slider']} ml-10 mb-10`}>Просмотренные товары</div>
    <CardSlider/>
    </div>
    </main>
    );
}

export default NotFound;