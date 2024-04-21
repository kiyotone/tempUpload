// Endpoint to recover password with recovery token

const userModel = require('../../models/userModel');
const passwordRecoveryModel = require('../../models/passwordRecoveryModel');
const bycrypt = require('bcryptjs');

const recoverPasswordController = async (req, res) => {
    try {
        const { email, token, newPassword } = req.body;

        if (!email || !token || !newPassword) {
            throw new Error('All fields are required');
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        // Check if token exists
        const recovery = await passwordRecoveryModel.findOne({ userId: user._id });
        if (!recovery) {
            throw new Error('Invalid token');
        }

        // Check if date is valid
        if (recovery.expirationDate < new Date()) {
            throw new Error('Token expired');
        }

        // Compare token
        const isValid = await bycrypt.compare(token, recovery.token);
        if (!isValid) {
            throw new Error('Invalid token');
        }

        // Delete token
        await passwordRecoveryModel.deleteOne({ userId: user._id });

        // Update password
        const salt = bycrypt.genSaltSync(10);
        const hashPassword = await bycrypt.hashSync(newPassword, salt);

        await userModel.updateOne({
            _id: user._id
        }, {
            password: hashPassword
        });

        res.json({
            message: 'Password updated successfully',
            error: false,
            success: true,
        });

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = recoverPasswordController;