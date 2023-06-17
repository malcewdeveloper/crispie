import React from "react";
import clsx from "clsx";
import classes from './Badge.module.scss';


interface IBadgeProps {
    badgeContent?: number;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function Badge(props: IBadgeProps): ReturnType<React.FC> {
    const { 
        badgeContent, 
        children, 
        className, 
        style 
    } = props;

    const styles = clsx(classes.root, {
        [className]: className
    })

    return (
        <div className={ styles } style={ style }>
            <div className={ classes.content }>
                { badgeContent }
            </div>
            { children }
        </div>
    )
}