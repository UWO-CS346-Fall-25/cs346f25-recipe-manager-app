const express = require('express');
const router = express.Router();

// Import controllers
const shoppingListController = require('../controllers/shoppingListController');

// Define routes
router.get('/', shoppingListController.getShoppingList);

module.exports = router;