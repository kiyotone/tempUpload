// Endpoint to add order

const orderModel = require("../../models/orderModel");

const addOrderController = async (req, res) => {
    try {
        const { userId, products } = req.body;

        // products is an array of objects containing productId, quantity and price
        // Example:
        // products: [
        //     {
        //         productId: "product1",
        //         quantity: 2,
        //         price: 100
        //     },
        //     {
        //         productId: "product2",
        //         quantity: 1,
        //         price: 50
        //     }
        // ]

        // Calculate total price
        let totalPrice = 0;
        products.forEach(product => {
            totalPrice += product.price * product.quantity;
        });
        
        if (!userId || !products ) {
            return res.json({
                message: "Please provide all the details",
                success: false,
                error: true,
            });
        }

        const order = new orderModel({
        userId,
        products,
        totalPrice,
        });
    
        await order.save();
    
        res.json({
            message: "Order added successfully",
            success: true,
            error: false,
            order: order,
        })
    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: false,
        });
    }
}

module.exports = addOrderController;