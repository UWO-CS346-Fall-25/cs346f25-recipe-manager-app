// 
// This file serves as a controller for shopping-list
// 
exports.getShoppingList = async (req, res, next) => {
  try {
    // Fetch any data needed for the shopping list page
    const supabase = require('../public/js/supabaseClient');

    console.log(`[${new Date().toISOString()}] [ShoppingListController] Getting shopping list...`);
    const { data, error } = await supabase
    .from('shopping_lists')
    .select()
    .eq('id', req.session.user.id);

    if (error)
      throw error

    console.log(`[${new Date().toISOString()}] [ShoppingListController] Rendering Shopping List Page`);
    res.render('shopping-list', {
      title: 'Shopping List',
      items: data.length > 0 ? data[0].items : [],
      // csrfToken: req.csrfToken(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
};