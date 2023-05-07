const Router = require('express');
const sliderRouter = new Router();
const sliderController = require('../controllers/slider-controller');

sliderRouter.get('/slider', sliderController.getGeneralSlides);

module.exports = sliderRouter;