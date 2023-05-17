import React from "react";
import clsx from 'clsx';
import classes from './Menu.module.scss';


export interface IMenuProps {
    children?: React.ReactNode;
    className?: string;
    droppable?: boolean;
    style?: React.CSSProperties;
    open?: boolean;
}

export default function Menu(props: IMenuProps): ReturnType<React.FC> {

    const { 
        children, 
        className, 
        droppable,
        style,
        open
    } = props;

    const styles = clsx(classes.root, {
        [classes.open]: open,
        [classes.droppable]: droppable,
        [className]: className
    })

    return (
        <div className={ styles } style={ style }>{ children }</div>
    )
}