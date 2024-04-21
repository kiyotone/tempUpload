// Endpoint to delete a rating

const ratingModel = require('../../models/ratingsModel')

const deleteRatingController = async(req, res) => {
    try {
        const currentUser = req.userId
        const { ratingId } = req?.body

        if (!ratingId) {
            throw new Error("Missing required fields")
        }

        const rating = await ratingModel.findById(ratingId)

        if (!rating) {
            throw new Error("Rating not found")
        }

        if (rating.userId !== currentUser) {
            throw new Error("Unauthorized")
        }

        await ratingModel.findByIdAndDelete(ratingId)

        return res.json({
            message: "Rating deleted",
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

module.exports = deleteRatingController