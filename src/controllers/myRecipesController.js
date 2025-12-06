/**
* Controller: myRecipesController
* Purpose: Renders the my recipes page
* Input: req.body.text (string)
* Output: Renders my recipes page or shows an error page
*/

// Initialize Supabase client
const supabase = require('../public/js/supabaseClient');

exports.getMyRecipes = async (req, res, next) => {
  
  try {
    console.log(`[${new Date().toISOString()}] [MyRecipesController] Getting Recipes...`);
    const { data, error } = await supabase
    .from('recipes')
    .select()
    .eq('user_id', req.session.user.id);
    
    if (error) {
      console.error(`[${new Date().toISOString()}] [MyRecipesController] Failed to get recipes [${error}]`);
      res.status(500).render('error');
    }

    console.log(`[${new Date().toISOString()}] [MyRecipesController] Successfully obtained recipes!`);
    req.session.recipes = data;
    // Load my-recipes with selected recipes passed to it
    res.render('my-recipes', {
    title: 'My Recipes',
    recipes: data,
    // csrfToken: req.csrfToken(),
  });
  } catch (error) {
     console.error(`[${new Date().toISOString()}] [MyRecipesController] Failed to render my recipes page [${error}]`);
    res.status(500).render('error');
  }
};