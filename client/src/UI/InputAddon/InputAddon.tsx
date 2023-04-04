import React from "react";
import clsx from "clsx";
import classes from './InputAddon.module.scss';


interface IInputAddonProps {
    position?: 'start' | 'end'
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function InputAddon(props: IInputAddonProps) {

    const { 
        position, 
        children, 
        className, 
        style 
    } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.start]: position === 'start',
        [classes.end]: position === 'end',
        [className]: className
    })

    return (
        <div className={ styles } style={ style }>{ children }</div>
    )
}