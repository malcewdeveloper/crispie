import React from "react";
import Link from "../../UI/Link/Link";
import Button from "../../UI/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { logout } from "./store/actions/userProfileActions";
import clsx from "clsx";
import classes from './HeaderUserProfile.module.scss';


interface IHeaderUserProfileProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function HeaderUserProfile(props: IHeaderUserProfileProps): ReturnType<React.FC> {
    const { 
        children, 
        className, 
        style 
    } = props;

    const styles = clsx(classes.root, {
        [className]: className
    })

    const dispatch = useDispatch();
    const { isAuth, user } = useSelector((state: RootState) => state.auth);

    if(isAuth) {
        return (
            <div className={ styles }>
                <Link href="/profile">{ user.email }</Link>
                <Button onClick={async () => dispatch(await logout())}>Выход</Button>
            </div>
        )
    }

    return (
        <>        
            <Link href="/login">Вход</Link>
            <Link href="/register">Регистрация</Link>
        </>
    )
}