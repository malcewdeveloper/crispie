import React from "react";
import Typography from "../../../../UI/Typography/Typography";
import IconButton from "../../../../UI/IconButton/IconButton";
import Container from "../../../../UI/Container/Container";
import { FaVk, FaInstagram, FaFacebook } from "react-icons/fa";
import clsx from "clsx";
import classes from '../../Footer.module.scss';


interface IFooterSocialProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function FooterSocial(props: IFooterSocialProps): ReturnType<React.FC> {
    const { 
        children, 
        className, 
        style 
    } = props;

    const styles = clsx(classes.social, {
        [className]: className
    })

    return (
        <div className={ styles } style={ style }>
            <Typography variant='h4' style={{ marginBottom: '15px'}}>Мы в социальных сетях</Typography>
            <div>
                <IconButton href="/">
                    <FaVk />
                </IconButton>
                <IconButton href="/">
                    <FaInstagram />
                </IconButton>
                <IconButton href="/">
                    <FaFacebook />
                </IconButton>
            </div>
        </div>
    )
}