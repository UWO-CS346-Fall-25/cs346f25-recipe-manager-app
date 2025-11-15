const express = require('express');
const router = express.Router();

// Import controllers
const signupController = require('../controllers/signupController');

// Define routes
router.get('/', signupController.getLogin);

module.exports = router;