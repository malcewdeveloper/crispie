import React from 'react';
import SliderItem from './components/SliderItem/SliderItem';
import SliderControll from './components/SliderControll/SliderControll';
import SliderTrack from './components/SliderTrack/SliderTrack';
import clsx from 'clsx';
import gsap from 'gsap';
import classes from './Slider.module.scss';


interface ISliderProps {
    autoPlay?: boolean;
    autoPlayTime?: number;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    height?: number;
    width?: number;
    spaceBetween?: number;
    slidesView?: number;
}

export default function Slider(props: ISliderProps): ReturnType<React.FC> {
    const { 
        children, 
        style, 
        height, 
        width, 
        spaceBetween, 
        slidesView=1
    } = props;

    const styles = clsx(classes.root, {

    })

    const [currentSlide, setCurrentSlide] = React.useState(0);
    const sliderRef = React.useRef();
    const sliderTrackRef = React.useRef();

    const handleClickNext = () => {
        if(currentSlide === React.Children.count(children) - 1) {   // Временно в коде используется Children.count() 
            setCurrentSlide(0)                                      // избавить от нее в дальшнейшем 
            return
        }
        setCurrentSlide((prev) => prev + 1);
    }

    const handleClickPrev = () => {
        if(currentSlide <= 0) {
            setCurrentSlide(React.Children.count(children))
        }
        setCurrentSlide((prev) => prev - 1);
    }

    React.useEffect(() => {
        gsap.fromTo(
            sliderTrackRef.current,
            {
                xPercent: -currentSlide * (100 / slidesView)
            },
            {
                xPercent: -currentSlide * (100 / slidesView),
                duration: 0.2,
                ease: 'power2.out'
            }
        )
    }, [currentSlide]);

    return (
        <div className={ styles } style={{
            width,
            height,
            ...style
        }} ref={ sliderRef }>
            <SliderTrack ref={ sliderTrackRef }>
                { children }
            </SliderTrack>
            <SliderControll component='prev' onClick={ () => handleClickPrev() } />
            <SliderControll component='next' onClick={ () => handleClickNext() } />
        </div>
    )
}

/* 
    В компоненте Slider необходимо доделать:
    - autoPlay
    - адаптивность под мобильные устройства
    - сколько слайдов за раз показать
    - на сколько слайдов за раз переключать
    - бесконечный или нет
    - контроллеры Dots, Progress
*/