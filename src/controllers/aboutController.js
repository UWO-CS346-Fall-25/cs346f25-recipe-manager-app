// 
// This file serves as a controller for about
// 
exports.getAbout = async (req, res, next) => {
  try {

    console.log(`[${new Date().toISOString()}] [AboutController] Rendering about page`);
    res.render('about', {
      title: 'About'
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] [AboutController] Failed to render about page`);
    res.status(500).render('error');
  }
};