const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('DB connect  sucessful.😁')
    } catch (error) {
        console.log(error.message)
    }
};
module.exports = connectDB;