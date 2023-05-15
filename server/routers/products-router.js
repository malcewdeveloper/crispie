const Router = require('express');
const productsRouter = new Router();
const productsController = require('../controllers/products-controller');
const productsMiddleware = require('../middlewares/products-middleware');

productsRouter.get('/products', productsMiddleware, productsController.getAllProducts);
productsRouter.post('/products/add', productsController.createProduct);
productsRouter.delete('/products/:id', productsController.deleteProduct);
productsRouter.get('/products/:id', productsController.getOneProduct);

module.exports = productsRouter;


