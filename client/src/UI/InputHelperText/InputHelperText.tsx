import React from "react";
import clsx from "clsx";
import classes from './InputHelperText.module.scss';


export interface IInputHelperTextProps {
    children?: React.ReactNode;
    className?: string;
    error?: boolean;
}

export default function InputHelperText(props: IInputHelperTextProps) {

    const { children, error, className } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.error]: error,
        [className]: className
    })

    return (
        <p className={ styles }>{ children }</p>
    )
}