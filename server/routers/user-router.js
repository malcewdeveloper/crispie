const Router = require('express');
const userRouter = new Router();
const userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');

userRouter.get('/users', authMiddleware, userController.getUsers);

module.exports = userRouter;
