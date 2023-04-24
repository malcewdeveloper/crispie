import React from 'react';
import clsx from 'clsx';
import classes from './Card.module.scss';


export interface ICard {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export default function Card(props: ICard): ReturnType<React.FC> {

    const { children, style } = props;

    const styles = clsx({
        [classes.root]: true
    })

    return (
        <div className={ styles } style={ style }>{ children }</div>
    )
}