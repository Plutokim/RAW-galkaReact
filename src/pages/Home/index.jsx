import CardSlider from '../../components/CardSlider';
import BannerSlider from '../../components/BannerSlider';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss'
function Home(){
    return(
        <main>
        <div className={`${styles['wrapper']}`}>
            <BannerSlider/>
            <h2 className={`${styles['category-slider']}`}>ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
            <CardSlider/>
        </div>
        <div className={`${styles['brand-banner-wrapper']} d-flex align-center`}>
        <div className={`${styles['brand-banner']} d-flex justify-around flex-wrap clear`}>
            <Link to='/'><div>ZARA</div></Link>
            <Link to='/'><div>HM</div></Link>
            <Link to='/'><div>AZZA</div></Link>
            <Link to='/'><div>PULLBEAR</div></Link>
            <Link to='/'><div>BERSHKA</div></Link>
            <Link to='/'><div>ADIDDAS</div></Link>
            <Link to='/'><div>NIKE</div></Link>
            <Link to='/'><div>TYRKISH</div></Link>
            <Link to='/'><div>ALLBS</div></Link>
            <Link to='/'><div>QWERTY</div></Link>
            <Link to='/'><div>PUMA</div></Link>
        </div>
        </div>
        <div className={`${styles['wrapper']}`}>
        <h2 className={`${styles['category-slider']}`}>НОВИНКИ</h2>
            <CardSlider/>
        </div>
    </main>);


}
export default Home;