import React from "react";
import Textfield from "../../../Textfield/Textfield";
import clsx from "clsx";
import classes from '../../Footer.module.scss';
import Typography from "../../../../UI/Typography/Typography";
import Button from "../../../../UI/Button/Button";


interface IFooterFormSsubscribeProps {
    children?: React.ReactNode;
    className?: string; 
    style?: React.CSSProperties;
}

export default function FooterFormSubscribe(props: IFooterFormSsubscribeProps): ReturnType<React.FC> {
    const { 
        children, 
        className, 
        style 
    } = props;

    const styles = clsx(classes.formSubscribe, {
        [className]: className
    });

    return (
        <div className={ styles } style={ style }>
            <Typography variant='h4' style={{ marginBottom: '15px' }}>Новостная рассылка</Typography>
            <Textfield 
            placeholder="Введите Email" 
            label="Введите Email" 
            addonAfter={
                <Button variant='contained'>Подписаться</Button>
            } />
        </div>
    )
}