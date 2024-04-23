// Endpoint to get all ratings of a product

const ratingModel = require('../../models/ratingsModel')
const averageRating = require('../../helpers/rating')

const productRatingsController = async(req, res) => {
    try {
        console.log("query" , req.body.productId)
        const productId = req?.body?.productId

        const ratings = await ratingModel.find({ ...(productId && { productId }) })
        const average = await averageRating(productId)

        return res.json({
            data: {
                ratings,
                average
            },
            message: "Ratings",
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

module.exports = productRatingsController