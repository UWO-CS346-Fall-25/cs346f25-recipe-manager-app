// 
// This file serves as a controller for about
// 
exports.getAbout = async (req, res, next) => {
  try {
    // Fetch any data needed for the about page
    // const data = await SomeModel.findAll();

    console.log(`[${new Date().toISOString()}] [AboutController] Rendering About page`);
    res.render('about', {
      title: 'About',
      // data: data,
      // csrfToken: req.csrfToken(),
    });
  } catch (error) {
    next(error);
  }
};