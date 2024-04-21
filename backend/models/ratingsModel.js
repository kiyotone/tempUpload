// Model for product ratings

const mongoose = require('mongoose');

const ratingsSchema = new mongoose.Schema({
    // User ID
    userId: {
        ref: 'user',
        type: String
    },
    // Product ID
    productId: {
        ref: 'product',
        type: String
    },
    // Rating, number between 1 and 5
    rating: {
        type: Number,
        required: true
    },
    // Review
    review: {
        type: String,
        required: false
    },
})

const ratingsModel = mongoose.model("ratings", ratingsSchema)

module.exports = ratingsModel