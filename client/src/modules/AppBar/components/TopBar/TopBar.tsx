import React from "react";
import clsx from 'clsx';
import Container from "../../../../UI/Container/Container";
import classes from './TopBar.module.scss';


interface ITopBarProps {
    children?: React.ReactNode;
}

const TopBar = (props: ITopBarProps) => {

    const { children } = props;

    const styles = clsx({
        [classes.root]: true
    })

    return (
        <div className={ styles }>{ children }</div>
    )
}

export default TopBar;