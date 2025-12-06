const express = require('express');
const router = express.Router();

// Import controllers
const addIngredientController = require('../controllers/addIngredientController');

// Define routes
router.post('/', addIngredientController.addIngredient);

module.exports = router;