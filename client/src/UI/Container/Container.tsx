import React from "react";
import clsx from 'clsx';
import classes from './Container.module.scss';


type ContainerSize = 'xs' | 'sm' | 'md' | 'xl';

interface IContainerProps {
    maxWidth?: ContainerSize;
    children?: React.ReactNode;
    component?: React.ElementType;
    className?: string;
    disablePaddings?: boolean;
    style?: React.CSSProperties; 
    [key: string]: any;
}

export default function Container(props: IContainerProps): ReturnType<React.FC> {
    const { 
        maxWidth, 
        children, 
        component='div',
        className,
        disablePaddings, 
        style,
        ...rest
    } = props;

    const styles = clsx(classes.root, {
        [classes.xs]: maxWidth === 'xs',
        [classes.sm]: maxWidth === 'sm',
        [classes.md]: maxWidth === 'md',
        [classes.xl]: maxWidth === 'xl',
        [classes.disablePaddings]: disablePaddings,
        [className]: className
    });

    const containerProps = {
        className: styles,
        style,
        ...rest
    }

    const ContainerRoot =  React.createElement(component, { ...containerProps }, children );
    return ContainerRoot as React.ReactElement;

}