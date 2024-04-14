const productModel = require("../../models/productModel")

// Function to decrease the quantity of a product
// Throws error if the product is not found or if the quantity is not enough
// Returns the updated product
const decreaseQuantity = async (productId, quantity) => {
    let product

    try {
        // Find the product by id
        product = await productModel.findById(productId)
    } catch (error) {
        throw new Error("Product not found")
    }

    // Check if the product has enough quantity
    if (product.quantity < quantity) {
        throw new Error("Not enough quantity")
    }

    // Decrease the quantity of the product
    product.quantity -= quantity

    // Save the product
    await product.save()

    return product
}

