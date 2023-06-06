import React from "react";
import Container from "../../UI/Container/Container";
import Textfield from "../../components/Textfield/Textfield";
import Button from "../../UI/Button/Button";
import IconButton from "../../UI/IconButton/IconButton";
import Link from "../../UI/Link/Link";
import Typography from "../../UI/Typography/Typography";
import { login } from "./store/actions/authorizationActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/reducers/rootReducer";
import clsx from "clsx";
import classes from './AuthorizationForm.module.scss';
import logo from '../../assets/images/logo.svg';


interface IAuthorizationFormProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function AuthorizationForm(props: IAuthorizationFormProps): ReturnType<React.FC> {
    const { 
        children, 
        className,
        style 
    } = props;

    const styles = clsx(classes.root, {
        [className]: className
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { authErrors, isAuth } = useSelector((state: RootState) => state.auth );
    const { email: emailError, password: passwordError } = authErrors.errors;

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        if(isAuth) {
            navigate('/')
        }
    }, [isAuth]);

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch( await login(email, password))
    }

    return (
        <Container component='form' className={ styles } style={ style } onSubmit={ handleSubmit }>
            <Link href='/' style={{ textAlign: 'center' }}>
                <img src={ logo } alt="Logo" />
            </Link>
            <Typography variant='h4' style={{ color: '#fff', alignSelf: 'flex-start' }}>Вход</Typography>
            <Textfield
            onChange={ (event) => setEmail(event.target.value) }
            value={ email }
            fullWidth
            placeholder="Электронная почта" 
            label="Электронная почта"
            type="email"
            error={ emailError }
            helperText={ emailError?.msg } />
            <Textfield 
            onChange={ (event) => setPassword(event.target.value) }
            value={ password }
            fullWidth
            placeholder="Электронная почта"
            label="Пароль"
            type="password"
            error={ passwordError }
            helperText={ passwordError?.msg } />
            <Button variant='contained' style={{ width: '100%' }}>Вход</Button>
        </Container>
    )
}