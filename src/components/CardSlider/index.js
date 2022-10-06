import CardSliderItem from '../CardSliderItem';
import React from 'react';

import styles from './CardSlider.module.scss';

function CardSlider(){
    const [items, setItems] = React.useState([<CardSliderItem />,<CardSliderItem />,<CardSliderItem />,<CardSliderItem />,<CardSliderItem />,<CardSliderItem />, <CardSliderItem />]);
    const [offset,setOffset]=React.useState(0);
    const bgLeft =React.useRef('rgba(246, 183, 91, 1)');
    const bgRight =React.useRef('rgba(243, 151, 18, 1)');

    const leftArrow=()=>{
        if(offset<0){
        setOffset((currentOffset)=>{
            let step =2;
            if(currentOffset===-275){
                step=1;
            }
            const newOffset = currentOffset + 275*step;
            if(newOffset!==0){
                bgLeft.current='rgba(243, 151, 18, 1)';
                bgRight.current='rgba(243, 151, 18, 1)';
            }
            else{
                bgLeft.current='rgba(246, 183, 91, 1)';
                bgRight.current='rgba(243, 151, 18, 1)';
            }

            console.log(newOffset);
            return newOffset;
        }
        );
    }
    };
    const rightArrow=()=>{
        const maxLineWidth=(items.length-4)*-275;
        if(offset<=0 && offset>maxLineWidth){
        setOffset((currentOffset)=>{
            let step =2;
            if(maxLineWidth+(-currentOffset)===-275){
                step=1;
            }
            const newOffset = currentOffset - 275*step;
            if(newOffset===maxLineWidth){
                bgRight.current='rgba(246, 183, 91, 1)';
                bgLeft.current='rgba(243, 151, 18, 1)';
            }
            else{
                bgRight.current='rgba(243, 151, 18, 1)';
                bgLeft.current='rgba(243, 151, 18, 1)';
            }
            console.log(newOffset); 
            return newOffset;
        });
    }
    };
    return (
        <div className={`${styles[`slider`]}`}>
            <div className={`${styles['slider-wrapper']} ml-5`}>
            <div className={`${styles['slider-line']} d-flex align-center`} style={{transform: `translateX(${offset}px)`}}>
            {
                items
            }
            </div>
            </div>
        <button className={`${styles['btn-left']} d-flex justify-center align-center`} style={{backgroundColor: bgLeft.current}} onClick={leftArrow}><img src="./img/btn-left.svg" alt='' /></button>
        <button className={`${styles['btn-right']} d-flex justify-center align-center`} style={{backgroundColor: bgRight.current}} onClick={rightArrow}><img src="./img/btn-right.svg" alt=''/></button>
        </div>

    );
}

export default CardSlider;
