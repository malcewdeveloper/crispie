const db = require('../db');
const ApiError = require('../exceptions/api-error');

class CategoriesService {
    async getOneCategory(id) {
        const { rows } = await db.query('SELECT * FROM categories WHERE id=$1 AND is_deleted=false', [id]);

        return rows[0]
    }

    async getAllCategories() {
        const { rows } = await db.query('SELECT * FROM categories WHERE is_deleted=false');

        return rows;
    }

    async addCategory(dto) {
        const { name, url, parentCategory } = dto;

        const { rows } = await db.query('INSERT INTO categories (name, url, parent_category) VALUES ($1, $2, $3) RETURNING *', [name, url, parentCategory]);

        return rows[0];
    }

    async deleteCategory(id) {
        const { rowCount } = await db.query('UPDATE categories SET is_deleted=true, updated_at=NOW() WHERE id=$1 AND is_deleted=false', [id]);

        if(rowCount === 0) {
            throw ApiError.BadRequest('Категорий с таким идентификатором не найдено');
        }

        return { message: 'Категория успешно удалена' };
    }


}

module.exports = new CategoriesService();