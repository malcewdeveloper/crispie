import React from 'react';
import clsx from 'clsx';
import classes from './CardContent.module.scss';

export interface ICardContent {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export default function CardContent(props: ICardContent): ReturnType<React.FC> {

    const { children, style } = props;

    const styles = clsx({
        [classes.root]: true
    })

    return (
        <div className={ styles } style={ style }>{ children }</div>
    )
}