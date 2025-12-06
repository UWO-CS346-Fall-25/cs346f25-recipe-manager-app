//
// This file serves as a controller for deleteShoppingList
//
// Initialize supabase client
const supabase = require('../public/js/supabaseClient');

exports.deleteShoppingList = async (req, res, next) => {
    try {
        const userId = req.session.user.id;

        console.log(`[${new Date().toISOString()}] [DeleteShoppingListController] Deleting shopping list...`);
        const { data, error } = await supabase
        .from('shopping_lists')
        .delete()
        .eq('id', userId);

        if (error)
            console.error(error);

        console.log(`[${new Date().toISOString()}] [DeleteShoppingListController] Shopping list deleted!`);
        res.redirect('shopping-list');
    }
    catch (error) {
        console.error(error);
        next(error);
    }
}