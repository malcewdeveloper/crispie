import React from "react";
import IconButton from "../../../../UI/IconButton/IconButton";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import clsx from "clsx";
import classes from '../../Slider.module.scss';


interface ISliderControllProps {
    component?: 'prev' | 'next';
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function SliderControll(props: ISliderControllProps) {
    const { 
        component, 
        children, 
        className, 
        onClick 
    } = props;

    const styles = clsx(classes.controll, {
        [classes.buttonPrev]: component === 'prev',
        [classes.buttonNext]: component === 'next',
        [className]: className
    })

    return (
        <IconButton className={ styles } onClick={ onClick }>
            {component === 'prev' && <MdArrowLeft />}
            {component === 'next' && <MdArrowRight />}
        </IconButton>
    )
}