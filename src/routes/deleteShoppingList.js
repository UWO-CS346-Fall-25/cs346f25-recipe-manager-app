const express = require('express');
const router = express.Router();

// Import controllers
const deleteShoppingListController = require('../controllers/deleteShoppingListController');

// Define routes
router.post('/', deleteShoppingListController.deleteShoppingList);

module.exports = router;