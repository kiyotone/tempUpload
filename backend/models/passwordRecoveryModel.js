const mongoose = require('mongoose')

const passwordRecoverySchema = new mongoose.Schema({
    // User ID
    userId: {
        ref: 'user',
        type: String
    },
    // Password recovery token
    token: {
        type: String,
        required: true
    },
    // Expiration date
    expirationDate: {
        type: Date,
        required: true
    }
})

const passwordRecoveryModel = mongoose.model("passwordRecovery", passwordRecoverySchema)

module.exports = passwordRecoveryModel