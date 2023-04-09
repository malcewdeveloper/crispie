import React from "react";
import { IBaseButton } from "../Button/Button";
import clsx from "clsx";
import classes from './IconButton.module.scss';


interface IIconButtonProps extends IBaseButton {

}

export default function IconButton(props: IIconButtonProps) {
    const { 
        children,
        color,
        disabled,
        style,
        href
    } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.disabled]: disabled,
        [classes.primary]: color === 'primary'
    })

    return (
        href ?
        <a className={ styles } style={ style }>
            { children }
        </a> :
        <button className={ styles } style={ style }>
            { children }
        </button>
    )
}