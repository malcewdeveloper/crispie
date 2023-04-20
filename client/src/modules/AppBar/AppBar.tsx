import React from "react";
import Container from "../../UI/Container/Container";
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";
import Link from "../../UI/Link/Link";
import Button from "../../UI/Button/Button";
import IconButton from "../../UI/IconButton/IconButton";
import Textfield from "../../components/Textfield/Textfield";
import { FaSearch } from 'react-icons/fa';
import { BsHeart, BsCart3 } from 'react-icons/bs'
import clsx from 'clsx';
import classes from './AppBar.module.scss';
import logo from '../../assets/images/logo.svg';


interface IAppBarProps {
    position?: 'static' | 'fixed' | 'sticky';
}

export default function AppBar(props: IAppBarProps): ReturnType<React.FC> {

    const { position = 'static' } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.static]: position === 'static',
        [classes.fixed]: position === 'fixed',
        [classes.sticky]: position === 'sticky'
    })

    return (
        <header className={ styles }>
            <TopBar>
                <Container style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    maxWidth: '1270px'
                }}>                    
                    <Link href="/delivery">Доставка и оплата</Link>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <Link>Местоположение</Link>
                        <Link href="/login">Вход</Link>
                        <Link href="/register">Регистрация</Link>
                    </div>
                </Container>
            </TopBar>
            <BottomBar>
                <Container style={{
                    maxWidth: '1270px'
                }}>
                    <div style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px 0'
                        }}>
                        <Link href="/" underline='none'>
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
                        <Button variant='contained'>Каталог</Button>
                        <Link href='/shops' underline='hover' style={{ color: 'white' }}>Магазины</Link>
                        <Link href='/osago' underline='hover' style={{ color: 'white' }}>ОСАГО Онлайн</Link>
                    </div>
                </Container>
            </BottomBar>
        </header>
    )
}