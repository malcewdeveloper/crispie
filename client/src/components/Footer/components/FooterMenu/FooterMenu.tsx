import React from "react";
import Menu from "../../../../UI/Menu/Menu";
import MenuList from "../../../../UI/MenuList/MenuList";
import MenuItem from "../../../../UI/MenuItem/MenuItem";
import { IMenuProps } from "../../../../UI/Menu/Menu";
import clsx from "clsx";
import classes from '../../Footer.module.scss';
import Link from "../../../../UI/Link/Link";


export interface IItemMenu {
    header?: string;
    children?: IItemMenu[] | string[];
}

interface IFooterMenuProps extends IMenuProps {
    items?: IItemMenu;
}

export default function FooterMenu(props: IFooterMenuProps): ReturnType<React.FC> {
    const { 
        children: childrenProp, 
        className, 
        style, 
        items 
    } = props

    const styles = clsx(classes.menu, {
        [className]: className
    })

    const { 
        header, 
        children 
    } = items;

    return (
        <Menu className={ styles } style={{ ...style, backgroundColor: 'transparent', color: 'black' }}>
            <MenuList header={ header }>
                {children.map(item => (
                    <MenuItem key={ item } hoverable={false}>
                        <Link href="/" style={{ display: 'block'}}>{ item }</Link>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}