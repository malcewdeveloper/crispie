import React from "react";
import clsx from 'clsx';
import classes from './MenuList.module.scss';


interface IMenuListProps {
    children?: React.ReactNode;
}

export default function MenuList(props: IMenuListProps): ReturnType<React.FC> {
    
    const { children } = props;

    const styles = clsx({
        [classes.root]: true
    })

    return (
        <ul className={ styles }>{ children }</ul>
    )
}