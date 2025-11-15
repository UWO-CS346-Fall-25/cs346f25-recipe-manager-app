// 
// This file serves as a controller for the login route
// 
exports.getLogin = async (req, res, next) => {
  try {
    // Fetch any data needed for the login page
    // const data = await SomeModel.findAll();

    res.render('login', {
      title: 'Login',
      // data: data,
      // csrfToken: req.csrfToken(),
    });
  } catch (error) {
    next(error);
  }
};