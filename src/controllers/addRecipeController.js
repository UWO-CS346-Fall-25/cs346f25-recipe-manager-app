// 
// This file serves as a controller for AddRecipe
// 
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

    const { data, error } = await supabase
      .from('recipes')
      .insert([{ user_id: req.session.user.id, name, ingredients: ingredientsArray, steps: stepsArray }])
      .select();

    if (error) 
      throw error;

    res.redirect('/');
    // Success!

  } catch (error) {
    console.error(error);
    next(error);
  }
};