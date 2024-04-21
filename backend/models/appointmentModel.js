// Model for appointments for bike repair

const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  // User ID
  userId: {
    ref: "user",
    type: String,
  },

  brand: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required: false,
  },
  payment_status: {
    type: String,
    required: false,
  },
  // Date
  date: {
    type: Date,
    required: true,
  },
  // Description of the problem
  description: {
    type: String,
    required: false,
  }
});

const appointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = appointmentModel;
