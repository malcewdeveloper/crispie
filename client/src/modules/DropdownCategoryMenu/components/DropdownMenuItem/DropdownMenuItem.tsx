import React from "react";
import MenuItem from "../../../../UI/MenuItem/MenuItem";
import { MdArrowRight } from "react-icons/md";
import clsx from "clsx";
import classes from '../../DropdownCategoryMenu.module.scss';


interface IDropdownMenuItemProps {
    active?: boolean;
    children?: React.ReactNode;
    className?: string;
    hoverable?: boolean;
    primaryHover?: boolean;
    style?: React.CSSProperties;
}

export default function DropdownMenuItem(props: IDropdownMenuItemProps): ReturnType<React.FC> {
    const { 
        active,
        children, 
        className, 
        hoverable, 
        primaryHover,
        style,
        ...rest
    } = props;

    const styles = clsx(classes.item, {
        [classes.active]: active,
        [classes.primaryHover]: primaryHover,
        [className]: className
    })

    return (
        <MenuItem hoverable={ hoverable } className={ styles } style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ...style }} { ...rest }>
            { children }
        </MenuItem>
    )
}