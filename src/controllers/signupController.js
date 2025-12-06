/**
* Controller: signupController
* Purpose: Renders the signup page and handles signup logic
* Input: req.body.text (string)
* Output: Render signup and signs user up or shows an error page
*/
exports.getSignup = async (req, res, next) => {
  try {

    console.log(`[${new Date().toISOString()}] [SignupController] Rendering signup page`);
    res.render('signup', {
      title: 'Signup',
      formData: {}
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] [SignupController] Failed to render signup page [${error}]`);
    res.status(500).render('error');
  }
};

const supabase = require('../public/js/supabaseClient');

exports.signup = async (req, res) => {
    const {email, password, confirmPassword} = req.body;

    console.log(`[${new Date().toISOString()}] [SignupController] Checking password requirements...`);
    // Confirm password must be the same as password
    if (password != confirmPassword)
    {
        return res.render("signup", {
            title: "Signup",
            error: "Passwords must match",
            formData: req.body,
            success: null
        });
    }
    // Regular expression, password MUST contain one special character
    if (!/[!@#$%&*]/.test(password))
    {
        return res.render("signup", {
            title: "Signup",
            error: "Password must contain atleast one of !@#$%&*",
            formData: req.body,
            success: null
        });
    }
    // Verify password has minimum 10 characters
    if (password.length < 10)
    {
        return res.render("signup", {
            title: "Signup",
            error: "Password must be atleast 10 characters",
            formData: req.body,
            success: null
        });
    }

    console.log(`[${new Date().toISOString()}] [SignupController] Attempting signup...`);
    // Signup on supabase
    const { data, error: supabaseError} = await supabase.auth.signUp({
        email,
        password
    });

    // If supabase runs into an issue
    if (supabaseError)
    {
        console.error(`[${new Date().toISOString()}] [SignupController] Supabase error signing up: [${error}]`);
        return res.render("signup", {
            title: "Signup",
            error: supabaseError.message,
            formData: req.body,
            success: null
        });
    }

    console.log(`[${new Date().toISOString()}] [SignupController] Signup successful!`);
    // Success
    return res.render("signup", {
        title: "Signup",
        success: "Check the listed email's inbox",
        formData: {},
        error: null
    });

}