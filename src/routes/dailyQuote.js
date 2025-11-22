const express = require('express');
const router = express.Router();

// Import controllers
const dailyQuoteController = require('../controllers/dailyQuoteController');

// Define routes
router.get('/', dailyQuoteController.getDailyQuote);

module.exports = router;