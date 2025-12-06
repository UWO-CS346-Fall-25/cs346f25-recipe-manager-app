//
// This file serves as a controller for getRecipe
//

// Initialize supabase
const supabase = require('../public/js/supabaseClient');

exports.getRecipe = async (req, res, next) => {
    try {
        const id = req.params.id;

        const recipe = req.session.recipes.find(r => r.recipe_id == id);

        if (!recipe)
            return res.status(404).send("Specified recipe not found...");

        // Pass the recipe to the rendered recipe page, as well as additional info
        res.render('recipe', {
            title: recipe.name,
            ingredients: recipe.ingredients,
            steps: recipe.steps
        });
    }
    catch (error) {
        console.log(error);
    }
}