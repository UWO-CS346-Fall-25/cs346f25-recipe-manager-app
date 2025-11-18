const express = require('express');
const router = express.Router();

// Import controllers
const loginController = require('../controllers/loginController');

// Define routes
router.get('/', loginController.getLogin);
router.post('/', loginController.login);

module.exports = router;