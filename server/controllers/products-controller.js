const productsService = require('../services/products-service');
const ProductDto = require('../dtos/ProductDto');

class ProductsController {
    async getOneProduct(req, res, next) {
        try {
            const { id } = req.params;
            const product = await productsService.getOneProduct(id);
            res.status(200).json(product);
        } catch (error) {
            next(error)
        }
    }

    async getAllProducts(req, res, next) {
        try {
            const products = await productsService.getProducts();
            const productDtos = products.map(product => new ProductDto(product.id, product.category_id, product.description, product.discount_rate, product.sku, product.stock, product.title, product.merchant, product.price, product.promo_start_date, product.promo_end_date, product.is_sold, product.is_deleted, product.is_free_product, product.is_promoted, product.created_at, product.updated_at, product.rating));
            res.status(200).json(productDtos);
        } catch (error) {
            next(error)
        }
    }

    async createProduct(req, res, next) {
        try {
            const product = await productsService.addProduct(req.body);

            const productDto = new ProductDto(product.id, product.category_id, product.description, product.discount_rate, product.sku, product.stock, product.title, product.merchant, product.price, product.promo_start_date, product.promo_end_date, product.is_sold, product.is_deleted, product.is_free_product, product.is_promoted, product.created_at, product.updated_at, product.rating);

            return res.status(200).json({message: 'Товар успешно добавлен', product: productDto});

        } catch (error) {
            next(error)
        }
    }

    async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;

            const product = await productsService.deleteProduct(id);
            const productDto = new ProductDto(product.id, product.category_id, product.description, product.discount_rate, product.sku, product.stock, product.title, product.merchant, product.price, product.promo_start_date, product.promo_end_date, product.is_sold, product.is_deleted, product.is_free_product, product.is_promoted, product.created_at, product.updated_at, product.rating);

            return res.status(200).json({message: 'Товар успешно удален', product: productDto});
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ProductsController();