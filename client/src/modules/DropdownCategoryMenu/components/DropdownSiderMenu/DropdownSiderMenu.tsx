import React from "react";
import MenuList from "../../../../UI/MenuList/MenuList";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";
import { IMenuParts } from "../../helpers/splitMenuParts";
import { MdArrowRight } from "react-icons/md";
import clsx from "clsx";
import classes from '../../DropdownCategoryMenu.module.scss';
import Link from "../../../../UI/Link/Link";


interface IDropdownSiderMenuProps {
    activeId?: number;
    children?: React.ReactNode;
    className?: string;
    onMouseMove?: (event: React.MouseEvent<HTMLDivElement>) => void;
    items?: IMenuParts['sider'];
    style?: React.CSSProperties;
}

export default function DropdownSiderMenu(props: IDropdownSiderMenuProps): ReturnType<React.FC> {
    const { 
        activeId,
        children, 
        className,
        onMouseMove, 
        items, 
        style 
    } = props;

    const styles = clsx(classes.sider, {
        [className]: className
    })

    return (
        <div onMouseMove={ onMouseMove } className={ styles } style={ style }>
            <MenuList>
                {items && items.map(item => (
                    <DropdownMenuItem hoverable={ false } active={ activeId === item.id } key={ item.id } data-id={ item.id }>
                        <Link href={ item.url } underline='none' style={{ width: '100%', height: '100%' }}>
                            { item.name }
                        </Link>
                        <MdArrowRight />
                    </DropdownMenuItem>
                ))}
            </MenuList>
        </div>
    )
}