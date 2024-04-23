// Allow mechanic to finalize appointment

const appointmentModel = require('../../models/appointmentModel')
const userModel = require('../../models/userModel')
const nodemailer = require('nodemailer')

const config = {
    service: 'gmail', // your email domain
    auth: {
        user: process.env.GMAIL_APP_USER, // your email address
        pass: process.env.GMAIL_APP_PASSWORD // your password
    }
}

const transporter = nodemailer.createTransport(config);


const finalizeAppointmentController = async(req, res) => {
    try {
        const appointmentId = req?.body?.appointmentId
        const date = req?.body?.date

        if (!appointmentId || !date) {
            return res.json({
                message: "Please provide all the details",
                success: false,
                error: true,
            });
        }

        const appointment = await appointmentModel.findById(appointment)
        if (!appointment) {
            return res.json({
                message: "Appointment not found",
                success: false,
                error: true,
            });
        }

        // Get the user ID from appointment
        const userId = appointment.userId

        const user = await userModel.findById(userId)
        if (!user) {
            return res.json({
                message: "User not found",
                success: false,
                error: true,
            });
        }

        appointment.date = date
        appointment.status = "finalized"

        // Save the appointment
        await appointment.save()

        // Email body
        const emailBody = `
            Our mechanic has finalized your appointment for ${date}
        `
        // Email message
        let message = {
            'from': process.env.GMAIL_APP_USER,
            'to': user.email,
            'subject': 'Two Wheels: Appointment Finalized',
            'text': emailBody
        }
        // Send email
        await transporter.sendMail(message);

        res.json({
            message: "Appointment finalized",
            success: true,
            error: false,
            appointment: appointment
        })
    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: false,
        });
    }
}

module.exports = finalizeAppointmentController

