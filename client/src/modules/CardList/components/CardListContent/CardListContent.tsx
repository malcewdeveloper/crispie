import React from "react";
import clsx from "clsx";
import classes from '../../CardList.module.scss';


interface ICardListContentProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function CardListContent(props: ICardListContentProps): ReturnType<React.FC> {
    const { children, className, style } = props;

    const styles = clsx(classes.content, {
        [className]: className
    })

    return (
        <div className={ styles } style={ style }>
            { children }
        </div>
    )
}