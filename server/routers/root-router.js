const Router = require('express');
const rootRouter = new Router();
const authRouter = require('./auth-router');
const userRouter = require('./user-router');

rootRouter.use('/', authRouter);
rootRouter.use('/', userRouter);

module.exports = rootRouter;