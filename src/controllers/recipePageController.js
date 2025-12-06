//
// This file serves as a controller for getRecipe
//

// Initialize supabase
const supabase = require('../public/js/supabaseClient');

exports.getRecipe = async (req, res, next) => {
    try {
        const id = req.params.id;

        console.log(`[${new Date().toISOString()}] [RecipePageController] Getting Recipe...`);
        const recipe = req.session.recipes.find(r => r.recipe_id == id);

        if (!recipe) {
            console.error(`[${new Date().toISOString()}] [RecipePageController] Failed to find specified recipe [${error}]`);
            res.status(404).render('error');
        }  

        console.log(`[${new Date().toISOString()}] [RecipePageController] Rendering Recipe Page!`);
        // Pass the recipe to the rendered recipe page, as well as additional info
        res.render('recipe', {
            title: recipe.name,
            ingredients: recipe.ingredients,
            steps: recipe.steps
        });
    }
    catch (error) {
        console.error(`[${new Date().toISOString()}] [RecipePageController] Failed to render recipe page [${error}]`);
        res.status(500).render('error');
    }
}