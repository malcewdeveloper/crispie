const Router = require('express');
const categoriesRouter = new Router();
const categoriesController = require('../controllers/categories-controller');


categoriesRouter.get('/categories', categoriesController.getAllCategories);
categoriesRouter.get('/categories/:id', categoriesController.getCategory);
categoriesRouter.post('/categories/add', categoriesController.addCategory);
categoriesRouter.delete('/categories/:id', categoriesController.deleteCategory);


module.exports = categoriesRouter;
