import React from "react";
import Typography from "../../../../UI/Typography/Typography";
import Link from "../../../../UI/Link/Link";
import clsx from "clsx";
import classes from '../../Footer.module.scss';
import logo from '../../../../assets/images/logo.svg'


interface IFooterAboutProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function FooterAbout(props: IFooterAboutProps): ReturnType<React.FC> {
    const { 
        children, 
        className, 
        style 
    } = props;

    const styles = clsx(classes.about, {
        [className]: className
    })

    return (
        <div className={ styles } style={ style }>
            <Link href="/" style={{
                display: 'block',
                marginBottom: '30px' 
            }}>
                <img src={ logo } alt="Logo" />
            </Link>
            <Typography variant='paragraph' style={{ whiteSpace: 'normal', marginBottom: '15px' }}>
                CRISPIE.RU - Онлайн торговая площадка (маркетплейс), работающая по принципу B2C, объдиняющая в себе продавцов и покупателей.
            </Typography>
            <Typography variant='paragraph' style={{ fontSize: '12px', whiteSpace: 'normal' }}>
                ИП Москвитин Максим Витальевич; ИНН: 772301226810; ОГРНИП: 319774600714239
            </Typography>
        </div>
    )
}