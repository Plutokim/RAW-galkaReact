import Card from '../../components/Card';

import styles from './Catalog.module.scss';

const CardArray = [
    {name:'Пальто Leo Pride Мадрид PM3264 50 Кэмел крутое супер пупер', price: 260},
    {name:'Худи Yaza black pattern gold', price: 2600},
    {name:'Футболка крассная H&M blossom of tiger', price: 25560},
];

function Catalog(){
    return(<main className='d-flex flex-wrap'>
        {
            CardArray.map(value => <Card/>)
        }
    </main>)
}

export default Catalog;