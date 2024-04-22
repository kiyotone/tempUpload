// View a specific order

const orderModel = require("../../models/orderModel");

const viewOrderController = async (req, res) => {
    try {
        const { orderId } = req?.query;

        if (!orderId) {
            return res.json({
                message: "Please provide order ID",
                error: true,
                success: false,
            });
        }

        const order = await orderModel.findById(orderId);

        if (!order) {
            return res.json({
                message: "Order not found",
                error: true,
                success: false,
            });
        }

        res.json({
            order,
            error: false,
            success: true,
        });
    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: false,
        });
    }
}

module.exports = viewOrderController