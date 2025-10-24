const express = require('express');
const router = express.Router();

// Import controllers
const aboutController = require('../controllers/aboutController');

// Define routes
router.get('/', aboutController.getAbout);

module.exports = router;