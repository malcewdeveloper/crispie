import React from "react";
import Container from "../../UI/Container/Container";
import Textfield from "../../components/Textfield/Textfield";
import Button from "../../UI/Button/Button";
import IconButton from "../../UI/IconButton/IconButton";
import Link from "../../UI/Link/Link";
import Typography from "../../UI/Typography/Typography";
import { register } from "./store/actions/registrationActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import clsx from "clsx";
import classes from './RegistrationForm.module.scss';
import logo from '../../assets/images/logo.svg';
import { useNavigate } from "react-router-dom";


interface IRegistrationFormProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function RegistrationForm(props: IRegistrationFormProps): ReturnType<React.FC> {
    const { children, className, style } = props;

    const styles = clsx(classes.root, {
        [className]: className
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { authErrors, isAuth } = useSelector((state: RootState) => state.auth );
    const { email: emailError, password: passwordError } = authErrors.errors;

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        if(isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch( await register(email, password));
    }

    return (
        <Container component='form' className={ styles } style={ style } onSubmit={ handleSubmit }>
            <Link href='/' style={{ textAlign: 'center' }}>
                <img src={ logo } alt="Logo" />
            </Link>
            <Typography variant='h4' style={{ color: '#fff', alignSelf: 'flex-start' }}>Регистрация</Typography>
            <Textfield
            fullWidth
            placeholder="Электронная почта" 
            label="Электронная почта"
            type="email"
            onChange={ (event) => setEmail(event.target.value) }
            value={ email }
            error={ emailError }
            helperText={ emailError?.msg } />
            <Textfield
            fullWidth
            placeholder="Пароль" 
            label="Пароль"
            type="password"
            onChange={ (event) => setPassword(event.target.value) }
            value={ password }
            error={ passwordError }
            helperText={ passwordError?.msg } />
            <Button variant='contained' style={{ width: '100%' }}>Регистрация</Button>
        </Container>
    )
}