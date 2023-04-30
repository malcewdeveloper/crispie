import React from 'react';
import { MdStarBorder, MdStar } from 'react-icons/md';
import clsx from 'clsx';
import classes from '../../Rating.module.scss';


interface IRatingIconProps {
    isFilled?: boolean;
    isHovered?: boolean;
    disabled?: boolean;
}

export default function RatingIcon(props: IRatingIconProps) {
    const { isFilled, isHovered, disabled } = props;

    const styles = clsx(classes.icon, {
        [classes.iconEmpty]: !isFilled,
        [classes.iconHover]: isHovered,
        [classes.disabled]: disabled
    })

    return (
        <span className={ styles }>
            {!isFilled ? 
            <MdStarBorder /> : 
            <MdStar />}
        </span>
    )
}