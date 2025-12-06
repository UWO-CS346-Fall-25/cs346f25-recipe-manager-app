/**
* Controller: shoppingListController
* Purpose: Renders the shopping list page
* Input: req.body.text (string)
* Output: Render shopping list page or shows an error page
*/

exports.getShoppingList = async (req, res, next) => {
  try {
    // Fetch any data needed for the shopping list page
    const supabase = require('../public/js/supabaseClient');

    console.log(`[${new Date().toISOString()}] [ShoppingListController] Getting shopping list...`);
    const { data, error } = await supabase
    .from('shopping_lists')
    .select()
    .eq('id', req.session.user.id);

    if (error) {
      console.error(`[${new Date().toISOString()}] [ShoppingListController] Failed to get shopping list[${error}]`);
      res.status(500).render('error');
    }

    console.log(`[${new Date().toISOString()}] [ShoppingListController] Rendering Shopping List Page`);
    res.render('shopping-list', {
      title: 'Shopping List',
      items: data.length > 0 ? data[0].items : [],
      // csrfToken: req.csrfToken(),
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] [ShoppingListController] Failed to render shopping list [${error}]`);
    res.status(500).render('error');
  }
};