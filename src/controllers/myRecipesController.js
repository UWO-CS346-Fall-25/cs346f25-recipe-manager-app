// 
// This file serves as a controller for my-recipes
// 
exports.getMyRecipes = async (req, res, next) => {
  try {
    // Fetch any data needed for the home page
    // const data = await SomeModel.findAll();

    res.render('my-recipes', {
      title: 'My Recipes',
      // data: data,
      // csrfToken: req.csrfToken(),
    });
  } catch (error) {
    next(error);
  }
};