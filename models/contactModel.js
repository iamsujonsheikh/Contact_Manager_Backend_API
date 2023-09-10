const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be required."]
    },
    email: {
        type: String,
        required: [true, "email must be required."]
    },
    phone: {
        type: String,
        required: [true, "phone number must be required."]
    }
}, { timestamps: true });
module.exports = mongoose.model("Contact", contactSchema);