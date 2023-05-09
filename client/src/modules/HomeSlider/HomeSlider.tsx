import React from "react";
import Slider, { ISliderProps } from "../../components/Slider/Slider";
import fetchImages from './api/fetchSlides';
import { ISlide } from "../../interfaces/interfaces";
import clsx from "clsx";
import classes from './HomeSlider.module.scss';
import SliderItem from "../../components/Slider/components/SliderItem/SliderItem";
import Typography from "../../UI/Typography/Typography";
import Button from "../../UI/Button/Button";


interface IHomeSliderProps extends ISliderProps {

}

export default function HomeSlider(props: IHomeSliderProps) {
    const { 
        className 
    } = props;

    const styles = clsx(classes.root, {
        [className]: className
    })

    const [slides, setSlides] = React.useState<ISlide[]>(null);

    React.useEffect(() => {
        const fetchSlidesSlider = async () => {
            const response = await fetchImages();
            setSlides(response);
        }
        fetchSlidesSlider();
    }, [])

    if(!slides) {
        return null
    }

    return (
        <Slider className={ styles } autoPlay autoPlayTime={ 10000 } infinity slidesScroll={ 1 } slidesView={ 1 } >
            {slides && slides.map(slide => (
                <SliderItem key={ slide.id } style={{ 
                    boxSizing: 'border-box',
                    position: 'relative',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'initial'
                }}>
                    <img src={`static/images/${ slide.image }`} alt="" />
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '90px',
                        transform: 'translateY(-50%)'
                    }}>
                        <Typography variant='h2' style={{
                            color: '#fff',
                            marginBottom: '1rem'
                        }}>{ slide.title }</Typography>
                        <Typography style={{
                            color: '#fff', 
                            marginBottom: '2rem'
                        }}>{ slide.description }</Typography>
                        <Button variant='contained'>{ slide.buttonText }</Button>
                    </div>
                </SliderItem>
            ))}
        </Slider>
    )
}