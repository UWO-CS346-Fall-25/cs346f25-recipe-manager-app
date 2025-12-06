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
    const { data: currentItems, error: err } = await supabase
      .from('shopping_lists')
      .select('*')
      .eq('id', userId);

    if (err) {
      console.error(err);
      return next(err);
    }

    if (!currentItems || currentItems.length === 0) {
      // No shopping list found → create new
      await supabase
        .from('shopping_lists')
        .insert([{ id: userId, items: [newItem] }]);
    } else {
      // Update existing shopping list
      const existingItems = currentItems[0].items || [];
      await supabase
        .from('shopping_lists')
        .update({ items: [...existingItems, newItem] })
        .eq('id', userId);
    }

    res.redirect('/shopping-list'); // go back to shopping list page
  } catch (error) {
    console.error(error);
    next(error);
  }
};