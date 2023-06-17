import React from "react";
import Container from "../../../../UI/Container/Container";
import IconButton from "../../../../UI/IconButton/IconButton";
import { MdMenu, MdSearch } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import clsx from "clsx";
import classes from './AppBarMobile.module.scss';
import logo from '../../../../assets/images/logo.svg';
import Badge from "../../../../UI/Badge/Badge";


interface IAppBarMobileProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function AppBarMobile(props: IAppBarMobileProps): ReturnType<React.FC> {
    const { 
        children, 
        className, 
        style 
    } = props;

    const styles = clsx(classes.root, {
        [className]: className
    })

    return (
        <Container component='nav' className={ styles } style={ style }>
            <Container className={ classes.bar }>
                <IconButton>
                    <MdMenu color='white' />
                </IconButton>
                <img src={ logo } alt="Crispie logo" />
                <div>
                    <IconButton>
                        <MdSearch color="white" />
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent={ 4 }>
                            <BsCart3 color="white" />
                        </Badge>
                    </IconButton>
                </div>
            </Container>
        </Container>
    )
}