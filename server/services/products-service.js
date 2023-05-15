const db = require('../db');

class ProductsService {
    async getProducts() {
        const { rows } = await db.query('SELECT p.* FROM products p WHERE p.is_deleted=false');

        return rows;
    }

    async getOneProduct(id) {
        const { rows } = await db.query('SELECT * FROM products WHERE id=$1 AND is_deleted=false', [id]);

        return rows;
    }

    async getProductsByCategory(category) {
        const { rows } = await db.query('SELECT p.* FROM products p LEFT JOIN product_categories pc ON pc.product_id=p.id LEFT JOIN categories c ON c.id=pc.category_id OR c.id=p.category_id WHERE c.name=$1 AND p.is_deleted=false', [category]);

        return rows;
    }

    async addProduct(dto) {
        const { 
            categoryId, 
            description, 
            discountRate,
            sku, 
            stock, 
            title, 
            merchant, 
            price, 
            promoStartDate, 
            promoEndDate, 
            isSold, 
            isDeleted, 
            isFreeProduct, 
            isPromoted, 
            rating 
        } = dto;

        const  { rows } = await db.query('INSERT INTO products (category_id, description, discount_rate, sku, stock, title, merchant, rating, price, promo_start_date, promo_end_date, is_sold, is_deleted, is_free_product, is_promoted) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *', [categoryId, description, discountRate, sku, stock, title, merchant, rating, price, promoStartDate, promoEndDate, isSold, isDeleted, isFreeProduct, isPromoted]);

        return rows[0];
    }

    async deleteProduct(id) {
        const { rows } = await db.query('UPDATE products SET is_deleted=true, updated_at=NOW() WHERE id=$1', [id]);

        return rows;
    }
}

module.exports = new ProductsService();