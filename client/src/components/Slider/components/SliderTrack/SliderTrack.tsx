import React from 'react';
import clsx from 'clsx';
import classes from '../../Slider.module.scss';

interface ISliderTrackProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}


const SliderTrack = React.forwardRef((props: ISliderTrackProps, ref: any) => { // Изменить тип any
    const { children, style } = props;

    const styles = clsx(classes.track, {

    })

    return (
        <ul ref={ ref } className={ styles }>
            { children }
        </ul>
    )
})

export default SliderTrack;

