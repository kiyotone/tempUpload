// Endpoint to get all rating of a user

const ratingModel = require('../../models/ratingsModel')

const myRatingsController = async(req, res) => {
    try {
        const currentUser = req.userId
        const productId = req?.query?.productId

        const ratings = await ratingModel.find({ userId: currentUser, ...(productId && { productId }) })

        return res.json({
            data: ratings,
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

module.exports = myRatingsController