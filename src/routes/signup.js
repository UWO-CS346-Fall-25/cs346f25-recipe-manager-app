const express = require('express');
const router = express.Router();

// Import controllers
const signupController = require('../controllers/signupController');

// Define routes
router.get('/', signupController.getSignup);
router.post('/', signupController.signup);

module.exports = router;