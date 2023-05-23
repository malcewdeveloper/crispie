import React from "react";
import Container from "../../../../UI/Container/Container";
import Link from "../../../../UI/Link/Link";
import clsx from 'clsx';
import classes from './TopBar.module.scss';


interface ITopBarProps {
    children?: React.ReactNode;
}

const TopBar = (props: ITopBarProps) => {

    const { children } = props;

    const styles = clsx({
        [classes.root]: true
    })

    return (
        <div className={ styles }>
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
        </div>
    )
}

export default TopBar;