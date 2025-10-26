const express = require('express');
const router = express.Router();

// Import controllers
const myRecipesController = require('../controllers/myRecipesController');

// Define routes
router.get('/', myRecipesController.getMyRecipes);

module.exports = router;