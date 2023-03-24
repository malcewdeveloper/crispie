import React from "react";
import clsx from 'clsx';
import classes from './Container.module.scss';


type ContainerSize = 'xs' | 'sm' | 'md' | 'xl';

interface IContainerProps {
    maxWidth?: ContainerSize;
    children?: React.ReactNode;
    disablePaddings?: boolean;
    style?: React.CSSProperties; 
}

export default function Container(props: IContainerProps): ReturnType<React.FC> {
    const { 
        maxWidth, 
        children, 
        disablePaddings, 
        style 
    } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.xs]: maxWidth === 'xs',
        [classes.sm]: maxWidth === 'sm',
        [classes.md]: maxWidth === 'md',
        [classes.xl]: maxWidth === 'xl',
        [classes.disablePaddings]: disablePaddings
    })

    return (
        <div className={ styles } style={ style }>{ children }</div>
    )
}