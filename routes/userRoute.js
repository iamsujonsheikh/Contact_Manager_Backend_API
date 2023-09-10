const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateToken = require('../middleWare/validateTokenHandler');

const userRoute = require('express').Router();


// Register user.
userRoute.post('/register', registerUser);
// Login user.
userRoute.post('/login', loginUser);
// Current user.
userRoute.get('/current', validateToken, currentUser);

module.exports = userRoute;