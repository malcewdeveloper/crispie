import React from "react";
import MenuItem from "../../../../UI/MenuItem/MenuItem";
import Typography from "../../../../UI/Typography/Typography";
import DropdownMenuList from "../DropdownMenuList/DropdownMenuList";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";
import { IReturnCategoryTree } from "../../../../utils/helpers/buildTree";
import clsx from "clsx";
import classes from '../../DropdownCategoryMenu.module.scss';
import Link from "../../../../UI/Link/Link";


interface IDropdownContentMenuProps {
    children?: React.ReactNode;
    className?: string;
    items?: IReturnCategoryTree[];
    style?: React.CSSProperties;
}

export default function DropdownContentMenu(props: IDropdownContentMenuProps) {
    const { 
        children, 
        className, 
        items, 
        style 
    } = props;

    const styles = clsx(classes.menu, {
        [className]: className
    })

    return (
        <div className={ styles } style={ style }>
            <Typography variant="h4" style={{ padding: '0 16px 16px' }}>{  }</Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {items.map(item => (
                    <DropdownMenuList key={ item.id } header={ item.name } url={ item.url }>
                        {item.children?.map(item => (
                            <DropdownMenuItem primaryHover key={item.id}>
                                <Link href={ item.url } underline='none' style={{ width: '100%', height: '100%' }}>{ item.name }</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuList>
                ))}
            </div>
        </div>
    )
}