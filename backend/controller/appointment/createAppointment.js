// Endpoint for user to create a new appointment

const appointmentModel = require("../../models/appointmentModel")

const CreateAppointController = async(req,res)=>{
    try {
        const { date, description, productId } = req?.body
        const currentUser = req.userId

        const payload = {
            date : date,
            description : description,
            userId : currentUser,
            productId : productId
        }

        const newAppointment = new appointmentModel(payload)
        const saveAppointment = await newAppointment.save()

        return res.json({
            data : saveAppointment,
            message : "Appointment Created",
            success : true,
            error : false
        })
    } catch (error) {
        res.json({
            message : error?.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = CreateAppointController