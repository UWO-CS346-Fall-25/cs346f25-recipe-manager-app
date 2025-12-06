const express = require('express');
const router = express.Router();

// Import controllers
const recipePageController = require('../controllers/recipePageController');

// Define routes
router.get('/:id', recipePageController.getRecipe);

module.exports = router;