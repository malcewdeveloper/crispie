class CategoryDto {
    constructor(id, name, createdAt, updatedAt, url, parentCategory) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.url = url;
        this.parentCategory = parentCategory;
    }
}

module.exports = CategoryDto;