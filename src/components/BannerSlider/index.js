import React, { cloneElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './BannerSlider.module.scss';
function BannerSlider(){
    const[items, setItems] = React.useState([{ name: 'Slide',imgSrc: './img/slide1.png', url: '/'},{ name: 'Slide',imgSrc: './img/slide2.jpg', url: '/'},{ name: 'Slide',imgSrc: './img/slide3.jpg', url: '/'},]);
    const[offset, setOffset] =React.useState(-1110);
    const[slides, setSlides]=React.useState([]);
    const animDuration =React.useRef(400);
    const timer=React.useRef(0);


    React.useEffect(()=>{
        setSlides([
            items[items.length-1],
            ...items,
            items[0]
        ])},[items]);

    React.useEffect(()=>{
        if(offset===0){
            setTimeout(()=>{animDuration.current=0;
                setOffset(-1110*(slides.length-2))
            },400)
            return
        };
        if(offset===-1110*(slides.length-1)){
            setTimeout(()=>{
                animDuration.current=0;
                setOffset(-1110)
            },400)
            return
        }
    },[offset,slides]);

    React.useEffect(()=>{
        if(animDuration.current===0){
                animDuration.current=400;
        }
    },[animDuration.current]);

    React.useEffect(()=>{
        if(offset<=-1110 && offset>=items.length*-1110){
       timer.current = setTimeout(()=>{
        setOffset(currentOffset=>{
            const newOffset=currentOffset-1110;
            return newOffset;
        })},10000)}}
        ,[offset]);


    const rightArrow=()=>{
        const maxLineWidth = (slides.length-1)*-1110;
        if(offset<=0 && offset>maxLineWidth){
        if(timer.current){
            clearTimeout(timer.current);
        }
        setOffset(currentOffset=>{
            const newOffset=currentOffset-1110;
            return newOffset;
        })}
    };
    const leftArrow=()=>{
        if(offset<0){
        if(timer.current){
                clearTimeout(timer.current);
            }
        setOffset(currentOffset=>{
            const newOffset=currentOffset+1110;
            return newOffset;
        })}
    }


    return(
        <div className={`${styles['slider']}`}>
        <div className={`${styles['sliderline']} d-flex `} style={{transform: `translateX(${offset}px)`, transitionDuration: `${animDuration.current}ms` }}>
    {slides.map((slide,index)=>(
        <Link to={slide.url} key={slide.name+index}>
            <img style={{userSelect: 'none'}} src={slide.imgSrc} alt={index}/>
        </Link>))
        }
    </div>
    <button onClick={leftArrow} className={`${styles['left-btn']}`}>
    <svg viewBox="0 0 15 26" xmlns="http://www.w3.org/2000/svg">
<line y1="-1" x2="18.3848" y2="-1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 13 26)" strokeWidth="2"/>
<line x1="13.7071" y1="0.707107" x2="0.707108" y2="13.7071" strokeWidth="2"/>
</svg></button>
<button onClick={rightArrow} className={`${styles['right-btn']}`}>
<svg viewBox="0 0 15 26" xmlns="http://www.w3.org/2000/svg">
<line x1="1.29289" y1="25.2929" x2="14.2929" y2="12.2929" strokeWidth="2"/>
<line y1="-1" x2="18.3848" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 2 0)" strokeWidth="2"/>
</svg></button>
    </div>
    );
    
}

export default BannerSlider;