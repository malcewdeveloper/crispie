import React from "react";
import clsx from 'clsx';
import classes from './Menu.module.scss';


interface IMenuProps {
    open?: boolean;
    children?: React.ReactNode;
    anchorOrigin?: object;
}

export default function Menu(props: IMenuProps): ReturnType<React.FC> {

    const { children, open, anchorOrigin } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.open]: open
    })

    return (
        <div className={ styles }>{ children }</div>
    )
}