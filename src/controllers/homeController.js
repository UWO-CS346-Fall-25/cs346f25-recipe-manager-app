// 
// This file serves as a controller for home-page
// 
exports.getHome = async (req, res, next) => {
  try {
    // Fetch any data needed for the home page
    // const data = await SomeModel.findAll();

    console.log(`[${new Date().toISOString()}] [HomeController] Rendering Home page`);
    res.render('home-page', {
      title: 'Home',
      // data: data,
      // csrfToken: req.csrfToken(),
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] [HomeController] Failed to render home page [${error}]`);
    res.status(500).render('error');
  }
};