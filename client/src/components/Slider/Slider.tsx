import React from 'react';
import SliderItem from './components/SliderItem/SliderItem';
import SliderControll from './components/SliderControll/SliderControll';
import SliderTrack from './components/SliderTrack/SliderTrack';
import { getSliderChildren } from './helpers/getSliderChildren';
import clsx from 'clsx';
import gsap from 'gsap';
import classes from './Slider.module.scss';


interface ISliderProps {
    autoPlay?: boolean;
    autoPlayTime?: number;
    children?: React.ReactNode;
    className?: string;
    height?: number;
    infinity?: boolean;
    width?: number;
    style?: React.CSSProperties;
    spaceBetween?: number;
    slidesView?: number;
    slidesScroll?: number;
}

type StateSlider = {
    transitionValue: number;
    restWidthScroll: number;
}

export default function Slider(props: ISliderProps): ReturnType<React.FC> {
    const { 
        autoPlay,
        autoPlayTime=3000,
        children, 
        className,
        style, 
        height,
        infinity,
        width, 
        spaceBetween, 
        slidesView=1,
        slidesScroll=1
    } = props;

    const styles = clsx(classes.root, {
        [className]: className
    })
    
    const [currentSlide, setCurrentSlide] = React.useState<number>(0);
    const sliderRef = React.useRef();
    const sliderTrackRef = React.useRef<HTMLUListElement>();

    const slideWidth = 100 / slidesView; // ширина одного слайда
    const totalSlides = React.Children.count(children); // кол-во слайдов
    const totalTrackWidth = totalSlides * slideWidth; // общая ширина трека слайдреа
    const touchWidth = slidesScroll * slideWidth; //длина прокрутки
    const [{restWidthScroll, transitionValue}, setStateSlider] = React.useState<StateSlider>({
        transitionValue: 0,
        restWidthScroll: totalTrackWidth - (slidesScroll * slideWidth)
    });

    const slides = getSliderChildren(children);

    const handleClickNext = () => {
        setCurrentSlide((currentSlide) => {
            const nextSlide = currentSlide + slidesScroll; // индекс следующего слайда
            const slidesRight = totalSlides - (currentSlide + slidesView); // кол-во слайдов справа

            setStateSlider((stateSlider) => {
                if(stateSlider.restWidthScroll < touchWidth && stateSlider.restWidthScroll > 0) {
                    return {
                        ...stateSlider,
                        restWidthScroll: 0,
                        transitionValue: stateSlider.transitionValue + stateSlider.restWidthScroll
                    }
                }
                return {
                    ...stateSlider, 
                    restWidthScroll: stateSlider.restWidthScroll - touchWidth, 
                    transitionValue: stateSlider.transitionValue + touchWidth
                }
            })  
                                        
            if(slidesRight <= 0) {
                if(infinity) {
                    setStateSlider({
                        restWidthScroll: totalTrackWidth - (slidesScroll * slideWidth),
                        transitionValue: 0
                    })
                    return 0;
                } else {
                    setStateSlider({
                        restWidthScroll: 0,
                        transitionValue: totalTrackWidth - (slidesScroll * slideWidth)
                    })
                    return currentSlide
                }
            }

            return nextSlide
        })
    }

    const handleClickPrev = () => {
        setCurrentSlide((currentSlide) => {
            const nextSlide = currentSlide - slidesScroll;
            const slidesLeft = currentSlide > 0 ? currentSlide : 0;

            setStateSlider((stateSlider) => {
                if(stateSlider.transitionValue < touchWidth && stateSlider.transitionValue > 0) {
                    return {
                        ...stateSlider,
                        restWidthScroll: stateSlider.restWidthScroll + stateSlider.transitionValue,
                        transitionValue: stateSlider.transitionValue - stateSlider.transitionValue
                    }
                }
                return {
                    ...stateSlider,
                    restWidthScroll: stateSlider.restWidthScroll + touchWidth,
                    transitionValue: stateSlider.transitionValue - touchWidth
                }
            })
            
            if(slidesLeft <= 0) {
                if(infinity) {
                    setStateSlider({
                        restWidthScroll: 0,
                        transitionValue: restWidthScroll
                    });
                    return totalSlides - slidesScroll;
                } else {
                    setStateSlider({
                        restWidthScroll: restWidthScroll,
                        transitionValue: 0
                    })
                    return currentSlide
                }
            }
            return nextSlide
        })
    }

    React.useEffect(() => {
        gsap.fromTo(
            sliderTrackRef.current,
            {
                xPercent: -transitionValue
            },
            {
                xPercent: -transitionValue,
                duration: 0.2,
                ease: 'power2.out'
            }
        )
    }, [currentSlide]);

    React.useEffect(() => {
        let timerId: NodeJS.Timer;
        if(autoPlay) {
            timerId = setInterval(() => {
                handleClickNext();
            }, autoPlayTime);
        }
        return () => clearInterval(timerId)
    }, [autoPlay, autoPlayTime])

    return (
        <div className={ styles } style={{
            width,
            height,
            ...style
        }} ref={ sliderRef }>
            <SliderTrack ref={ sliderTrackRef }>
                {slides.map((slide, index) => {                    
                    return React.cloneElement(slide, { style: { ...slide.props.style, width: slideWidth + '%' } })
                })}
            </SliderTrack>
            <SliderControll component='prev' onClick={ () => handleClickPrev() } />
            <SliderControll component='next' onClick={ () => handleClickNext() } />
        </div>
    )
}