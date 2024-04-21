// Endponint allowing users to add rating

const ratingModel = require('../../models/ratingsModel')
const productModel = require('../../models/productModel')

const addRatingController = async(req, res) => {
    try {
        const currentUser = req.userId
        const { productId, rating, review } = req?.body

        if (!productId || !rating) {
            throw new Error("Missing required fields")
        }

        const product = await productModel.findById(productId)

        if (!product) {
            throw new Error("Product not found")
        }

        const ratingExists = await ratingModel.findOne({ userId: currentUser, productId })
        if (ratingExists) {
            throw new Error("Rating already exists")
        }

        // Check if rating is a number and between 1 and 5
        if (isNaN(rating) || rating < 1 || rating > 5) {
            throw new Error("Invalid rating")
        }

        const newRating = new ratingModel({
            userId: currentUser,
            productId,
            rating,
            review
        })

        await newRating.save()

        return res.json({
            data: newRating,
            message: "Rating added",
            error: false,
            success: true
        })
    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = addRatingController