import React from 'react';
import clsx from 'clsx';
import classes from './MenuItem.module.scss';


interface IMenuItemProps {
    children?: React.ReactNode;
}

export default function MenuItem(props: IMenuItemProps): ReturnType<React.FC> {

    const { children } = props;

    const styles = clsx({
        [classes.root]: true
    })

    return (
        <li className={ styles }>{ children }</li>
    )
}