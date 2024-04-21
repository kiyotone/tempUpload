// Endpoint to recover password

const userModel = require('../../models/userModel');
const passwordRecoveryModel = require('../../models/passwordRecoveryModel');
const bycrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const config = {
    service: 'gmail', // your email domain
    auth: {
        user: process.env.GMAIL_APP_USER, // your email address
        pass: process.env.GMAIL_APP_PASSWORD // your password
    }
}

const transporter = nodemailer.createTransport(config);

const forgotPasswordController = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            throw new Error('Email is required');
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        // Generate token
        const token = Math.random().toString(36).slice(-8);

        // Hash token
        const salt = bycrypt.genSaltSync(10);
        const hashedToken = await bycrypt.hash(token, salt);

        // Delete previous tokens
        await passwordRecoveryModel.deleteMany({ userId: user._id });

        // Save token to database
        await passwordRecoveryModel.create({
            userId: user._id,
            token: hashedToken,
            expirationDate: new Date(Date.now() + 3600000) // 1 hour
        });

        // Email body
        const emailBody = `
            Recovery token: ${token}
        `

        let message = {
            'from': process.env.GMAIL_APP_USER,
            'to': email,
            'subject': 'Password Recovery',
            'text': emailBody
        }

        await transporter.sendMail(message);

        res.json({
            message: 'Email sent',
            error: false,
            success: true
        })
    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = forgotPasswordController