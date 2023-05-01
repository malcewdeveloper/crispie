import React from "react";
import clsx from "clsx";
import classes from '../../Slider.module.scss';


export default function SliderItem(props) {
    const { children, active } = props;

    const styles = clsx(classes.item, {

    })

    return (
        <li className={ styles }>
            { children }
        </li>
    )
}