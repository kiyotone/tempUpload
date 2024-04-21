const ratingModel = require('../models/ratingsModel');
const productModel = require('../models/productModel');

// Get average rating of a product
const averageRating = async (productId) => {
    try {
        // Check if product exists
        const product = await productModel.findById(productId)
        if (!product) {
            throw new Error("Product not found")
        }

        const ratings = await ratingModel.find({ ...(productId && { productId }) })
        if (ratings.length === 0) {
            throw new Error("No ratings found")
        }

        let totalRating = 0;
        ratings.forEach(rating => {
            totalRating += rating.rating;
        });
        const averageRating = totalRating / ratings.length;
        return averageRating;
    } catch (error) {
        return 0;
    }
}

module.exports = averageRating;