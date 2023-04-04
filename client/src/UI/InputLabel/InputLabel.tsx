import React from "react";
import clsx from "clsx";
import classes from './InputLabel.module.scss';


export interface IInputLabelBaseProps {
    children?: React.ReactNode;
    color?: 'primary' | 'danger' | 'error';
    disabled?: boolean;
    style?: React.CSSProperties;
    className?: string;
    htmlFor?: string;
    error?: boolean;
}

export default function InputLabel(props: IInputLabelBaseProps): ReturnType<React.FC> {
    const { 
        children, 
        color = 'primary',
        disabled, 
        style,
        htmlFor,
        error,
        className
    } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.primary]: color === 'primary',
        [classes.danger]: color === 'danger',
        [classes.error]: error || color === 'error',
        [className]: className
    })

    return (
        <label 
        className={ styles } 
        style={ style } 
        htmlFor={ htmlFor }>{ children }</label>
    )
}