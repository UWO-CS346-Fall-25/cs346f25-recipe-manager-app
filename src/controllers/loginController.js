/**
* Controller: loginController
* Purpose: Renders the login page, and handles login logic
* Input: req.body.text (string)
* Output: Renders login and logs user in or shows an error page
*/
exports.getLogin = async (req, res, next) => {
  try {
    // Fetch any data needed for the login page
    // const data = await SomeModel.findAll();

    console.log(`[${new Date().toISOString()}] [LoginController] Rendering Login page`);
    res.render('login', {
      title: 'Login',
      formData: {}
      // data: data,
      // csrfToken: req.csrfToken(),
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] [LoginController] Failed to render login page [${error}]`);
    res.status(500).render('error');
  }
};

// Initialize supabase for login
const supabase = require('../public/js/supabaseClient');

exports.login = async (req, res, next) => {

    try
    {
        const {email, password} = req.body;

        console.log(`[${new Date().toISOString()}] [LoginController] Attempting to log in...`);
        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) 
        {
          console.error(`[${new Date().toISOString()}] [LoginController] Failed to login due to: [${error}]`);
            return res.render('login', {
                title: "Login",
                error: error.message,
                formData: {email}
            });
        }

        console.log(`[${new Date().toISOString()}] [LoginController] Login Successful!`);
        // Get user for session
        req.session.user = data.user;

        return res.redirect('/');

    }
    catch (e)
    {
      console.error(`[${new Date().toISOString()}] [LoginController] Error logging in [${error}]`);
        return res.render('login', {
            title: "Login",
            error: "Unexpected error logging in",
            formData: {email}
        });
    }
}