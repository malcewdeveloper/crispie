const db = require('../db');

class SliderService {
    async getGeneralSlides() {
        const response = (await db.query('SELECT * FROM general_slider_content')).rows;
        const slides = [];
        
        response.forEach((slide) => {
            const { 
                image, 
                image_mobile: imageMobile, 
                button_text: buttonText, 
                title, 
                description 
            } = slide;

            const slideDto = {
                image,
                imageMobile,
                buttonText,
                title,
                description
            }

            slides.push(slideDto);
        })
        return slides;
    }
}

module.exports = new SliderService();