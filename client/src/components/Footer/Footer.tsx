import React from "react";
import Container from "../../UI/Container/Container";
import FooterAbout from "./components/FooterAbout/FooterAbout";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import { IItemMenu } from "./components/FooterMenu/FooterMenu";
import clsx from "clsx";
import classes from './Footer.module.scss';
import FooterSocial from "./components/FooterSocial/FooterSocial";
import FooterFormSubscribe from "./components/FooterFormSubscribe/FooterFormSubscribe";


export interface IFooterProps {
    className?: string;
    style?: React.CSSProperties;
}

export default function Footer(props: IFooterProps): ReturnType<React.FC> {
    const {  } = props;

    const styles = clsx(classes.root, {

    });

    const footerMenu: IItemMenu[] = [
        {
            header: 'Покупателю',
            children: [
                'Покупателю',
                'Публичная оферта',
                'Магазины',
                'Способы оплаты',
                'Правила доставки и возврата товаров',
                'Возварат и обмен товара',
                'Центр поддержки'
            ]
        },
        {
            header: 'Продавцу',
            children: [
                'Оферта для партнеров',
                'Документы для сотрудничества',
                'Приглашение к сотрудничеству'
            ]
        },
        {
            header: 'Правовая информация',
            children: [
                'Политика обработки персональных данных'
            ]
        }
    ]

    return (
        <footer className={ styles }>
            <Container style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '1270px', 
                padding: '45px 0'
            }}>
                <Container style={{ 
                    display: 'flex', 
                    flexDirection: 'column' 
                }}>
                    <FooterAbout />
                    <FooterSocial />
                    <FooterFormSubscribe />
                </Container>
                { footerMenu.map(item => (
                    <FooterMenu key={ item.header } items={ item } />
                )) }
            </Container>
        </footer>
    )
}