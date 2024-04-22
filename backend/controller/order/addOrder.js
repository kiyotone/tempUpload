// Endpoint to add order

const orderModel = require("../../models/orderModel");
const addToCartModel = require("../../models/cartModel");

const addOrderController = async (req, res) => {
    try {
        const { userId, carts } = req.body;
        
        // Carts is an array of cart IDs

        if (!userId || !carts ) {
            return res.json({
                message: "Please provide all the details",
                success: false,
                error: true,
            });
        }

        // Iterate over the carts and get the product details
        let totalPrice = 0;
        const products = [];
        for (let i = 0; i < carts.length; i++) {
            const cart = await addToCartModel.findById(carts[i]);
            const product = await productModel.findById(cart.productId);
            products.push({
                productId: cart.productId,
                quantity: cart.quantity,
            });
            totalPrice += product.price * cart.quantity;

            // Remove the cart
            await addToCartModel.findByIdAndDelete(carts[i]);
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