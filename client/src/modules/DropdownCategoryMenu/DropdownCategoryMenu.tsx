import React from "react";
import Menu from "../../UI/Menu/Menu";
import DropdownSiderMenu from "./components/DropdownSiderMenu/DropdownSiderMenu";
import DropdownContentMenu from "./components/DropdownContentMenu/DropdownContentMenu";
import fetchCategories from "./api/fetchCategories";
import buildTree from "../../utils/helpers/buildTree";
import splitMenuParts from "./helpers/splitMenuParts";
import clsx from "clsx";
import classes from './DropdownCategoryMenu.module.scss';


interface IDropdownCategoryMenuProps {
    children?: React.ReactNode;
    className?: string;
    open?: boolean;
    style?: React.CSSProperties;
}

export default function DropdownCategoryMenu(props: IDropdownCategoryMenuProps): ReturnType<React.FC> {
    const { 
        children, 
        className, 
        open,
        style 
    } = props;

    const styles = clsx(classes.root, {
        [classes.open]: open,
        [className]: className
    })

    const [categories, setCategories] = React.useState([]);
    const [activeCategory, setActiveCategory] = React.useState(1);

    React.useEffect(() => {
        fetchCategories()
        .then(categories => {
            setCategories(categories);
        });        
    }, []);

    const menuData = buildTree(categories);
    const { sider, menu } = splitMenuParts(menuData);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const targetElement = event.target as HTMLLIElement;

        if(targetElement && targetElement.nodeName == 'LI') {
            const categoryId = Number.parseFloat(targetElement.dataset.id);
            setActiveCategory(categoryId);
        }
    }

    const sortedArray = menu.filter(item => item.parentCategory === activeCategory);
    
    return (
        <Menu className={ styles } droppable open={ open } style={ style }>
            <DropdownSiderMenu 
            activeId={ activeCategory } 
            onMouseMove={ handleMouseMove } 
            items={ sider } />
            <DropdownContentMenu items={ sortedArray } />
        </Menu>
    )
}


