// Allows users to delete appointments

const appointmentModel = require('../../models/appointmentModel')

const deleteAppointmentController = async(req, res) => {
    try {
        const currentUser = req.userId
        const appointmentId = req?.body?.appointmentId

        const appointment = await appointmentModel.findById(appointmentId)

        if (!appointment) {
            throw new Error("Appointment not found")
        }

        if (appointment.userId !== currentUser) {
            throw new Error("Permission denied")
        }

        await appointmentModel.findByIdAndDelete(appointmentId)

        return res.json({
            message: "Appointment deleted",
            error: false,
            success: true
        })
    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = deleteAppointmentController