const productsService = require('../services/products-service');
const ProductDto = require('../dtos/ProductDto');
const ApiError = require('../exceptions/api-error');

module.exports = async function(req, res, next) {
    const { category } = req.query;

    if(Object.keys(req.query).length > 0 && !category) {
        return next(ApiError.BadRequest('Не валидные параметры запроса'));
    }

    if(category) {
        const products = await productsService.getProductsByCategory(category);
        const productDtos = products.map(product => new ProductDto(product.id, product.category_id, product.description, product.discount_rate, product.sku, product.stock, product.title, product.merchant, product.price, product.promo_start_date, product.promo_end_date, product.is_sold, product.is_deleted, product.is_free_product, product.is_promoted, product.created_at, product.updated_at, product.rating));

        return res.status(200).json(productDtos);
    }

    next();
}