const db = require('../db');
const sliderService = require('../services/slider-service');

class SliderController {
    async getGeneralSlides(req, res, next) {
        try {
            const slides = await sliderService.getGeneralSlides();
            return res.status(200).json(slides);
        } catch (error) {
            next();
        }
    }
}

module.exports = new SliderController();