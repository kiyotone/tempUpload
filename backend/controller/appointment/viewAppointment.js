// Allows users to view appintments

const appointmentModel = require("../../models/appointmentModel");

const viewAppointmentsController = async (req, res) => {
  try {
    const currentUser = req.userId;
    const date = req?.query?.date;
    const showUpcommingOnly = req?.query?.showUpcommingOnly || true;

    console.log(showUpcommingOnly);

    let appointments = await appointmentModel.find({
      userId: currentUser,
      ...(date && { date }),
    }).populate("userId");

    if (showUpcommingOnly === "true" || showUpcommingOnly === true) {
      const currentDate = new Date();
      appointments = appointments.filter(
        (appointment) => new Date(appointment.date) >= currentDate
      );
    }

    return res.json({
      data: appointments,
      message: "Appointments",
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
};

module.exports = viewAppointmentsController;
