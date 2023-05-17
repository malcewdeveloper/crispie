const Router = require('express');
const rootRouter = new Router();
const authRouter = require('./auth-router');
const userRouter = require('./user-router');
const sliderRouter = require('./slider-router');
const productsRouter = require('./products-router');
const categoriesRouter = require('./categories-router');

rootRouter.use('/', authRouter);
rootRouter.use('/', userRouter);
rootRouter.use('/', sliderRouter);
rootRouter.use('/', productsRouter);
rootRouter.use('/', categoriesRouter);

module.exports = rootRouter;