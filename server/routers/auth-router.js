const Router = require('express');
const authRouter = new Router();
const authController = require('../controllers/auth-controller');
const { body } = require('express-validator');

authRouter.post('/register', 
    body('email').isEmail(), 
    body('password').isLength({min: 3}), 
    authController.registration
);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.get('/activate/:link', authController.activate);
authRouter.get('/refresh', authController.refresh);

module.exports = authRouter;