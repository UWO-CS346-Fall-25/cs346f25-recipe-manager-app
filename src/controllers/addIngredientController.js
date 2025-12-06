//
// This file serves as a controller for AddIngredient
//
// Initialize supabase client
const supabase = require('../public/js/supabaseClient');

exports.addIngredient = async (req, res, next) => {
  try {
    console.log("addIngredient called");

    const { newIngredient, count } = req.body;
    const newItem = count + " " + newIngredient; // or { name: newIngredient, count }
    const userId = req.session.user.id;

    // Get current shopping list
    console.log(`[${new Date().toISOString()}] [AddIngredientController] Checking for existing shopping list...`);
    const { data: currentItems, error: err } = await supabase
      .from('shopping_lists')
      .select('*')
      .eq('id', userId);

    if (err) {
      console.error(`[${new Date().toISOString()}] [AddIngredientController] Failed checking supabase for shopping list`);
      res.status(500).render('error');
    }

    if (!currentItems || currentItems.length === 0) {
      // No shopping list found, create new one
      console.log(`[${new Date().toISOString()}] [AddIngredientController] Creating new shopping list to add to`);
      await supabase
        .from('shopping_lists')
        .insert([{ id: userId, items: [newItem] }]);
    } else {
      // Update existing shopping list
      console.log(`[${new Date().toISOString()}] [AddIngredientController] Updating existing shopping list`);
      const existingItems = currentItems[0].items || [];
      await supabase
        .from('shopping_lists')
        .update({ items: [...existingItems, newItem] })
        .eq('id', userId);
    }
    console.log(`[${new Date().toISOString()}] [AddIngredientController] Shopping list updated successfully!`);
    res.redirect('/shopping-list'); // go back to shopping list page
  } catch (error) {
    console.error(`[${new Date().toISOString()}] [AddIngredientController] [${error}]`);
    res.status(500).render('error');
  }
};