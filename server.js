const express = require('express');
const contactRoute = require('./routes/contactRoute');
const errorHandler = require('./middleWare/errorHandler');
const connectDB = require('./config/connectDB');
const app = express();
require('dotenv').config();


// Middleware.
app.use(express());
app.use(express.urlencoded({ extended: true }));
app.use("/api/contacts/", contactRoute);
app.use(errorHandler);

const port = process.env.PORT || 5001;

// Home route.
app.get('/api/contacts', (req, res) => {
    res.status(200).json({ message: 'get all data' })
});

app.listen(port, async () => {
    console.log('server is running on', port);
    await connectDB()
});