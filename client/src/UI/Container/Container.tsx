import React from "react";
import useCreateElement from "../../utils/hooks/useCreateElement";
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
}

export default function Container(props: IContainerProps): ReturnType<React.FC> {
    const { 
        maxWidth, 
        children, 
        component='div',
        className,
        disablePaddings, 
        style 
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
        style
    }

    const ContainerRoot = useCreateElement(component, { ...containerProps }, children);

    return ContainerRoot as React.ReactElement;
}