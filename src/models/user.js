const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        validate(value) {
            if (value.toString().length !== 10) {
                throw new Error('Phone Number should have 10 digits')
            }
        }
    },
    company: {
        type: String,
        required: true,
    },
    internetUsed: {
        type: String
    },
    callDuration: {
        type: String
    },
    billPaid: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User