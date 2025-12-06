/**
* Controller: errorController
* Purpose: Renders the error page
* Input: req.body.text (string)
* Output: Renders error page or shows an error page
*/
exports.getError = async (req, res, next) => {
  try {

    console.log(`[${new Date().toISOString()}] [ErrorController] Rendering error page`);
    res.render('error', {
      title: 'Error'
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] [ErrorController] Failed to render error page [${error}]`);
    res.status(500).render('error');
  }
};