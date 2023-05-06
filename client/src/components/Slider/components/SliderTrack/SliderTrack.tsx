import React from 'react';
import clsx from 'clsx';
import classes from '../../Slider.module.scss';

interface ISliderTrackProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}


const SliderTrack = React.forwardRef((props: ISliderTrackProps, ref: React.ForwardedRef<HTMLUListElement>) => {
    const { 
        children, 
        className, 
        style 
    } = props;

    const styles = clsx(classes.track, {
        [className]: className
    })

    return (
        <ul ref={ ref } className={ styles }>
            { children }
        </ul>
    )
})

export default SliderTrack;

