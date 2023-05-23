import React from 'react';
import clsx from 'clsx';
import classes from './MenuItem.module.scss';


interface IMenuItemProps {
    children?: React.ReactNode;
    className?: string;
    hoverable?: boolean;
    style?: React.CSSProperties;
}

export default function MenuItem(props: IMenuItemProps): ReturnType<React.FC> {

    const { 
        children, 
        className,
        hoverable=true,
        style,
        ...rest
    } = props;

    const styles = clsx(classes.root, {
        [classes.hoverable]: hoverable,
        [className]: className
    })

    return (
        <li className={ styles } style={ style } { ...rest }>{ children }</li>
    )
}