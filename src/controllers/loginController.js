// 
// This file serves as a controller for the login route
// 
exports.getLogin = async (req, res, next) => {
  try {
    // Fetch any data needed for the login page
    // const data = await SomeModel.findAll();

    res.render('login', {
      title: 'Login',
      formData: {}
      // data: data,
      // csrfToken: req.csrfToken(),
    });
  } catch (error) {
    next(error);
  }
};

// Initialize supabase for login
const supabase = require('../public/js/supabaseClient');

exports.login = async (req, res, next) => {

    try
    {
        const {email, password} = req.body;

        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) 
        {
            return res.render('login', {
                title: "Login",
                error: error.message,
                formData: {email}
            });
        }

        // Get user for session
        req.session.user = data.user;

        return res.redirect('/');

    }
    catch (e)
    {
        return res.render('login', {
            title: "Login",
            error: "Unexpected error logging in",
            formData: {email}
        });
    }
}