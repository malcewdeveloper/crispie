import React from 'react';
import clsx from 'clsx';
import classes from './CardMedia.module.scss';

export interface ICardMedia {
    alt?: string;
    image?: string;
    src?: string;
    style?: React.CSSProperties;
}

export default function CardMedia(props: ICardMedia): ReturnType<React.FC> {
    const { 
        alt, 
        image, 
        src, 
        style 
    } = props;

    const styles = clsx({
        [classes.root]: true
    })

    return (
        <img className={ styles } src={ image || src } alt={ alt } style={ style } />
    )
}