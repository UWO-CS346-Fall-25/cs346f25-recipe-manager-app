const express = require('express');
const router = express.Router();

// Import controllers
const addRecipeController = require('../controllers/addRecipeController');

// Define routes
router.post('/', addRecipeController.addRecipe);

module.exports = router;