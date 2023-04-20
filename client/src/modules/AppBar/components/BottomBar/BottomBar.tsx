import React from "react";
import clsx from 'clsx';
import classes from './BottomBar.module.scss';

interface IBottomProps {
    children?: React.ReactNode;
}

const BottomBar = (props: IBottomProps) => {

    const { children } = props;

    const styles = clsx({
        [classes.root]: true
    })
    return (
        <div className={ styles }>{ children }</div>
    )
}

export default BottomBar;