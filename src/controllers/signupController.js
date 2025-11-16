// 
// This file serves as a controller for the signup route
// 
exports.getSignup = async (req, res, next) => {
  try {
    // Fetch any data needed for the signup page
    // const data = await SomeModel.findAll();

    res.render('signup', {
      title: 'Signup',
      formData: {},
      // data: data,
      // csrfToken: req.csrfToken(),
    });
  } catch (error) {
    next(error);
  }
};

const supabase = require('../public/js/supabaseClient');

exports.signup = async (req, res) => {
    const {email, password, confirmPassword} = req.body;

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

    // Signup on supabase
    const { data, error: supabaseError} = await supabase.auth.signUp({
        email,
        password
    });

    // If supabase runs into an issue
    if (supabaseError)
    {
        return res.render("signup", {
            title: "Signup",
            error: supabaseError.message,
            formData: req.body,
            success: null
        });
    }

    // Success
    return res.render("signup", {
        title: "Signup",
        success: "Check your email to confirm signup!",
        formData: {},
        error: null
    });

}