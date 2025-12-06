// 
// This file serves as a controller for my-recipes
// 
// Initialize Supabase client
const supabase = require('../public/js/supabaseClient');

exports.getMyRecipes = async (req, res, next) => {
  
  try {
    const { data, error } = await supabase
    .from('recipes')
    .select()
    .eq('user_id', req.session.user.id);
    
    if (error)
        throw error

    req.session.recipes = data;
    // Load my-recipes with selected recipes passed to it
    res.render('my-recipes', {
    title: 'My Recipes',
    recipes: data,
    // csrfToken: req.csrfToken(),
  });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch recipes' });
  }
};