import React from "react";
import { IBaseButton } from "../Button/Button";
import clsx from "clsx";
import classes from './IconButton.module.scss';
import useCreateElement from "../../utils/hooks/useCreateElement";


interface IIconButtonProps extends IBaseButton {

}

export default function IconButton(props: IIconButtonProps) {
    const { 
        children,
        color,
        className,
        disabled,
        onClick,
        style,
        href
    } = props;

    const styles = clsx(classes.root, {
        [classes.disabled]: disabled,
        [classes.primary]: color === 'primary',
        [className]: className
    })

    const tagNameButton = href ? 'a' : 'button';

    const buttonIconProps = {
        className: styles,
        color,
        disabled,
        onClick,
        style,
        href
    }

    const IconButtonRoot = useCreateElement(tagNameButton, buttonIconProps, children)

    return IconButtonRoot as React.ReactElement;
}