// Given a product, add its rating and return a dictionary with the product and its rating.

const averageRating = require('./rating')

const enjectRating = async (product) => {
    try {
        const rating = await averageRating(product._id)
        return {
            ...product._doc,
            averageRating: rating
        }
    } catch (error) {
        return {
            ...product._doc,
            averageRating: 0
        }
    }
}

const enjectRatings = async (products) => {
    const productsWithRating = []
    for (let i = 0; i < products.length; i++) {
        const productWithRating = await enjectRating(products[i])
        productsWithRating.push(productWithRating)
    }
    return productsWithRating
}

// export both functions
module.exports = {
    enjectRating,
    enjectRatings
}