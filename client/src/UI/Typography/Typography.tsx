import React from "react";
import clsx from "clsx";
import classes from './Typography.module.scss';
import useCreateElement from "../../utils/hooks/useCreateElement";


export interface ITypographyProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph' | 'body' | string;
    style?: React.CSSProperties;
    marginBottom?: boolean;
}

export default function Typography(props: ITypographyProps): ReturnType<React.FC> {

    const { 
        children, 
        className, 
        component,
        variant = 'body',
        style,
        marginBottom = false
    } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.h1]: variant === 'h1',
        [classes.h2]: variant === 'h2',
        [classes.h3]: variant === 'h3',
        [classes.h4]: variant === 'h4',
        [classes.h5]: variant === 'h5',
        [classes.h6]: variant === 'h6',
        [classes.paragraph]: variant === 'paragraph',
        [classes.body]: variant === 'body',
        [classes.marginBottom]: marginBottom,
        [className]: className
    })

    const variantMaping = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        paragraph: 'p',
        body: 'span'
    }
    const tagName = component || variantMaping[variant] || 'span';

    const Component = useCreateElement(tagName, { className: styles, style }, children);

    return Component as React.ReactElement;
}