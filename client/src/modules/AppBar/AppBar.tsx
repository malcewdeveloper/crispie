import React from "react";
import Container from "../../UI/Container/Container";
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";
import Link from "../../UI/Link/Link";
import Button from "../../UI/Button/Button";
import IconButton from "../../UI/IconButton/IconButton";
import Textfield from "../../components/Textfield/Textfield";
import DropdownCategoryMenu from "../DropdownCategoryMenu/DropdownCategoryMenu";
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
            <TopBar />
            <BottomBar />
        </header>
    )
}