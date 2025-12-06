/**
 * Express Application Configuration
 *
 * This file configures:
 * - Express middleware (Helmet, sessions, CSRF protection)
 * - View engine (EJS)
 * - Static file serving
 * - Routes
 * - Error handling
 */

require('dotenv').config();
require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const session = require('express-session');
const csrf = require('csurf');

// Initialize Express app
const app = express();

// Security middleware - Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", 'data:', 'https:'],
      },
    },
  })
);

// View engine setup - EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-this',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  })
);

// CSRF protection
// Note: Apply this after session middleware
const csrfProtection = csrf({ cookie: false });

// Make CSRF token available to all views
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Routes
// Import and use your route files here
// Example:
// const indexRouter = require('./routes/index');
// app.use('/', indexRouter);

// Add this to every route that should require a login
const authChecker = require('./public/js/checkAuth');

// Login page Route
const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

// Signup page Route
const signupRouter = require('./routes/signup');
app.use('/signup', signupRouter);



// The following Routes are protected!
// Home page Route
const homeRouter = require('./routes/home');
app.use('/', authChecker, homeRouter);

// About page Route
const aboutRouter = require('./routes/about');
app.use('/about', authChecker, aboutRouter);

// My Recipes page Route
const myRecipesRouter = require('./routes/myRecipes');
app.use('/my-recipes', authChecker, myRecipesRouter);

// Shopping List page Route
const shoppingListRouter = require('./routes/shoppingList');
app.use('/shopping-list', authChecker, shoppingListRouter);

// Recipe page route (for a specified recipe)
const recipePageRouter = require('./routes/recipePage');
app.use('/recipe-page', authChecker, recipePageRouter);


// The following routes are for functions and not rendering pages
// Add Recipe Route
const addRecipeRouter = require('./routes/addRecipe');
app.use('/addRecipe', addRecipeRouter);

// Add Ingredient Route
const addIngredientRouter = require('./routes/addIngredient');
app.use('/addIngredient', addIngredientRouter);

// Delete Shopping List Route
const deleteShoppingListRouter = require('./routes/deleteShoppingList');
app.use('/deleteShoppingList', deleteShoppingListRouter);

// Get daily quote Route
const getQuoteRouter = require('./routes/dailyQuote');
app.use('/dailyQuote', getQuoteRouter);


// Used to log out of the app
app.get('/logout', (req, res) => {
  req.session.destroy(err => { // Destroy session
    if (err) {
      console.error("Error logging out: ", err);
      return res.status(500).send("Error logging out!");
    }

    res.redirect('/'); // Go to login page
  })
})




module.exports = app;
