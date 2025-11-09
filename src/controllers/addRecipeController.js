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
      .insert([{ user_id: 2, name, ingredients: ingredientsArray, steps: stepsArray }])
      // FIX ME: user_id is hardcoded!!!!
      .select();

    if (error) 
      throw error;

    res.redirect('/');
    // Success!

    // res.status(201).json({ message: 'Recipe added successfully!', recipe: data[0] });
    // For debugging!
  } catch (error) {
    console.error(error);
    next(error);
  }
};