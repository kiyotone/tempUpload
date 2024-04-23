// Endpoint to display all orders

const orderModel = require("../../models/orderModel");
const uploadProductPermission = require("../../helpers/permission");

const allOrdersController = async (req, res) => {
    try {
        const userId = req.userId;

        const hasPermission = await uploadProductPermission(userId);

        if (!hasPermission) {
            return res.json({
                message: "You don't have permission to view all orders",
                error: true,
                success: false,
            });
        }

        const orders = await orderModel.find({}).populate("products.productId").populate("userId");

        res.json({
            orders,
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

module.exports = allOrdersController