const Router = require('express');
const authRouter = new Router();
const authController = require('../controllers/auth-controller');
const { check } = require('express-validator');

authRouter.post('/register', 
    check('email', 'Неверный логин').isEmail(), 
    check('password')
        .isLength({ min: 6 })
        .withMessage('Пароль должен содержать минимум 6 символов')
        .matches(/[A-Z]/)
        .withMessage('Пароль должен содержать хотя бы одну заглавную букву')
        .matches(/[a-z]/)
        .withMessage('Пароль должен содержать хотя бы одну строчную букву')
        .matches(/\d/) 
        .withMessage('Пароль должен содержать хотя бы одну цифру'),
    authController.registration
);
authRouter.post('/login',
    check('email', 'Неверный логин').isEmail(), 
    check('password')
        .isLength({ min: 6 })
        .withMessage('Пароль должен содержать минимум 6 символов')
        .matches(/[A-Z]/)
        .withMessage('Пароль должен содержать хотя бы одну заглавную букву')
        .matches(/[a-z]/)
        .withMessage('Пароль должен содержать хотя бы одну строчную букву')
        .matches(/\d/) 
        .withMessage('Пароль должен содержать хотя бы одну цифру'),
    authController.login);
authRouter.post('/logout', authController.logout);
authRouter.get('/activate/:link', authController.activate);
authRouter.get('/refresh', authController.refresh);

module.exports = authRouter;