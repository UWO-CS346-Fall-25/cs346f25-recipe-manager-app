const express = require('express');
const router = express.Router();

// Import controllers
const errorController = require('../controllers/errorController');

// Define routes
router.get('/', errorController.getError);

module.exports = router;