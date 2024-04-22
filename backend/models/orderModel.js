// Model for order

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    // User ID
    userId: {
        ref: "user",
        type: String,
        required: true,
    },
    // List of product, quantity and price
    products: [
        {
            productId: {
                ref: "product",
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    // Total price
    totalPrice: {
        type: Number,
        required: true,
    },
})

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;