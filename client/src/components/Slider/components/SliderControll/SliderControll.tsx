import React from "react";
import Button from "../../../../UI/Button/Button";
import clsx from "clsx";
import classes from '../../Slider.module.scss';


interface ISliderControllProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function SliderControll(props) {
    const { component, onClick } = props;

    const styles = clsx(classes.controll, {
        [classes.buttonPrev]: component === 'prev',
        [classes.buttonNext]: component === 'next',
    })

    return (
        <Button className={ styles } onClick={ onClick }>+</Button>
    )
}