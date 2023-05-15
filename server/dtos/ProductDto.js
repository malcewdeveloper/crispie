class ProductDto {
    constructor(id, categoryId, description, discountRate, sku, stock, title, merchant, price, promoStartDate, promoEndDate, isSold, isDeleted, isFreeProduct, isPromoted, createdAt, updatedAt, rating) {
        this.id = id;
        this.categoryId = categoryId;
        this.description = description;
        this.discountRate = discountRate;
        this.sku = sku;
        this.stock = stock;
        this.title = title;
        this.merchant = merchant;
        this.price = price;
        this.promoStartDate = promoStartDate;
        this.promoEndDate = promoEndDate;
        this.isSold = isSold;
        this.isDeleted = isDeleted;
        this.isFreeProduct = isFreeProduct;
        this.isPromoted = isPromoted;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.rating = rating;
    }
}

module.exports = ProductDto;