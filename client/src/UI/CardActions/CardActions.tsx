import React from 'react';
import clsx from 'clsx';
import classes from './CardActions.module.scss';


export interface ICardActions {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export default function CardActions(props: ICardActions): ReturnType<React.FC> {

    const { children, style } = props;

    const styles = clsx({
        [classes.root]: true
    })

    return (
        <div className={ styles } style={ style }>{ children }</div>
    )
}