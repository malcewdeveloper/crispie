const categoriesService = require('../services/categories-service');
const CategoryDto = require('../dtos/CategoryDto');

class CategoriesController {
    async getCategory(req, res, next) {
        try {
            const { id } = req.params;
            const category = await categoriesService.getOneCategory(id);
            const categoryDto = new CategoryDto(category.id, category.name, category.created_at, category.updated_at, category.url, category.parent_category);

            res.status(200).json(categoryDto);
        } catch (error) {
            next(error)
        }
    }

    async getAllCategories(req, res, next) {
        try {
            const categories = await categoriesService.getAllCategories();
            const categoryDtos = categories.map(category => new CategoryDto(category.id, category.name, category.created_at, category.updated_at, category.url, category.parent_category));
    
            res.status(200).json(categoryDtos);
        } catch (error) {
            next(error)
        }
    }

    async addCategory(req, res, next) {
        try {
            const category = await categoriesService.addCategory(req.body);
            const categoryDto = new CategoryDto(category.id, category.name, category.created_at, category.updated_at, category.url, category.parent_category);

            res.status(200).json({ message: 'Категория успешно добавлена', category: categoryDto });
        } catch (error) {
            next(error)
        }
    }

    async deleteCategory(req, res, next) {
        try {
            const { id } = req.params;

            const { message } = await categoriesService.deleteCategory(id);

            res.status(200).json({ message });

        } catch (error) {
            next(error)
        }
    }
}

module.exports = new CategoriesController();