import React from "react";
import clsx from "clsx";
import classes from '../../Slider.module.scss';


interface ISliderItemProps {
    active?: boolean;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function SliderItem(props: ISliderItemProps) {
    const { 
        active,
        children, 
        className, 
        style 
    } = props;

    const styles = clsx(classes.item, {
        [className]: className
    })

    return (
        <li className={ styles } style={ style }>
            { children }
        </li>
    )
}