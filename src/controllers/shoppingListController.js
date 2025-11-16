// 
// This file serves as a controller for shopping-list
// 
exports.getShoppingList = async (req, res, next) => {
  try {
    // Fetch any data needed for the shopping list page
    const supabase = require('../public/js/supabaseClient');

    const {data, error} = supabase.from('')

    res.render('shopping-list', {
      title: 'Shopping List',
      // data: data,
      // csrfToken: req.csrfToken(),
    });
  } catch (error) {
    next(error);
  }
};