import React from "react";
import Container from "../../../../UI/Container/Container";
import Link from "../../../../UI/Link/Link";
import Button from "../../../../UI/Button/Button";
import IconButton from "../../../../UI/IconButton/IconButton";
import Textfield from "../../../../components/Textfield/Textfield";
import DropdownCategoryMenu from "../../../DropdownCategoryMenu/DropdownCategoryMenu";
import { FaSearch } from "react-icons/fa";
import { BsCart3, BsHeart } from "react-icons/bs";
import useClickOutside from "../../../../utils/hooks/useClickOutside";
import clsx from 'clsx';
import classes from './BottomBar.module.scss';
import logo from '../../../../assets/images/logo.svg';

interface IBottomProps {
    children?: React.ReactNode;
}

const BottomBar = (props: IBottomProps) => {
    const {
        children 
    } = props;

    const styles = clsx({
        [classes.root]: true
    })

    const [openMenu, setOpenMenu] = React.useState(false);

    const closeMenu = () => {
        setOpenMenu(false);
    } 

    const menuRef = useClickOutside(closeMenu);

    return (
        <div className={ styles }>
            <Container style={{
                maxWidth: '1270px'
            }}>
                <div style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        padding: '15px 0'
                    }}>
                    <Link href="/" underline='none' style={{ flexShrink: 0 }}>
                        <img src={ logo } alt="Crispie logo" />     
                    </Link>
                    <Textfield
                    fullWidth
                    addonAfter={ <IconButton>
                                    <FaSearch />
                                </IconButton> }/>
                    <Button href='/cart' color='primary' iconBefore={ <BsCart3 /> }>Корзина</Button>
                    <Button href='/favorite' color='primary' iconBefore={ <BsHeart /> }>Избранное</Button>
                    <Button href='/' variant='contained'>Начать продавать</Button>
                </div>
                <div style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                    <div ref={ menuRef } style={{ position: 'relative' }}>
                        <Button variant='contained' onClick={() => setOpenMenu(openMenu => !openMenu)}>Каталог</Button>
                        <DropdownCategoryMenu open={ openMenu } />
                    </div>
                    <Link href='/shops' underline='hover' style={{ color: 'white' }}>Магазины</Link>
                    <Link href='/osago' underline='hover' style={{ color: 'white' }}>ОСАГО Онлайн</Link>
                </div>
            </Container>
        </div>
    )
}

export default BottomBar;