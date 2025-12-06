/**
* Controller: addRecipeController
* Purpose: Adds recipe to database and my recipes page by extension
* Input: req.body.text (string)
* Output: Adds a recipe or shows an error page
*/

// Initialize supabase client
const supabase = require('../public/js/supabaseClient');

exports.addRecipe = async (req, res, next) => {
  try {
    const { name, ingredients, steps } = req.body;

    if (!name || !ingredients || !steps) {
      return res.status(400).json({ error: 'A name, ingredients, and steps are required' });
    }

    const ingredientsArray = ingredients.split(',').map(i => i.trim());
    const stepsArray = steps.split(',').map(i => i.trim());

    console.log(`[${new Date().toISOString()}] [AddRecipeController] Attempting to add recipe...`);
    const { data, error } = await supabase
      .from('recipes')
      .insert([{ user_id: req.session.user.id, name, ingredients: ingredientsArray, steps: stepsArray }])
      .select();

    if (error) {
      console.error(`[${new Date().toISOString()}] [AddRecipeController] Failed to add recipe`);
      res.status(500).render('error');
    }
      

    console.log(`[${new Date().toISOString()}] [AddRecipeController] Recipe added successfully!`);
    res.redirect('/');
    // Success!

  } catch (error) {
    console.error(`[${new Date().toISOString()}] [AddRecipeController] [${error}]`);
    res.status(500).render('error');
  }
};