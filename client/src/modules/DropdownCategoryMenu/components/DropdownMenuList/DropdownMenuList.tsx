import React from "react";
import MenuList from "../../../../UI/MenuList/MenuList";
import Link from "../../../../UI/Link/Link";
import clsx from "clsx";
import classes from '../../DropdownCategoryMenu.module.scss';


interface IDropdownMenuListProps {
    children?: React.ReactNode;
    className?: string;
    header?: string;
    url?: string;
    style?: React.CSSProperties;
}

export default function DropdownMenuList(props: IDropdownMenuListProps): ReturnType<React.FC> {
    const { 
        children, 
        className, 
        header, 
        url,
        style
    } = props;

    const styles = clsx(classes.list, {
        [className]: className
    })

    return (
        <MenuList className={ styles } style={ style }>
            <Link 
            className={ classes.primaryHover }
            href={ url }
            style={{
                display: 'inline-block', 
                padding: '6px 16px 8px', 
                fontWeight: 'bold', 
                width: '100%'
            }}>
                { header }
            </Link>
            { children }
        </MenuList>
    )
}   