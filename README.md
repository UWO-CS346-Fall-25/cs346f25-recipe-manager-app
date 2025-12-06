# Notes on current pages / features:

-Updated DB schema to include a table for shopping lists (each user may have 1)
-Shopping list page now reflects the data in that table
-My recipes now has an improved ui with clickable buttons
-Clicking on a recipe will now bring you to a page to view details
-This page was designed to be easily printed so you can share with friends / family
-Logout buttons now work from every page

#### To Do Next:

-Improve documentation and add error page to handle critical issues
-Make page more responsive

# Week 12 features below!

-Added log out button / functionality
-Added call to zen quotes api
-Sessions now persist (i.e. can refresh without being logged out)
-Fixed some issues with responsiveness, but work is still needed

# Week 11 features below!

-Added the ability to create an account
-Passwords and email must fit certain criteria
-Can verify your account by clicking on email link
-Able to log into app and view your personal recipes

# Week 10 features below!

-Added a quantity box on the shoppingList page as requested
-Adding recipes is now functional
-Viewing names of your recipes now works too
Note: the user is hardcoded as user_id = 2, temporarily but it will be dynamic

##### Row-level-Security:
I feel that one of the most beneficial uses for row-level security would be
to only allow users to view recipes associated with their id. While it is implemented on
the client side to only view those, it doesn't necessarily make it entirely secure yet. I feel
this would definitely be a priority in the near future when I implement some level of RLS.


# Week 9 features below!

I centered the tagline in the website to make it more uniform with the
content itself. I also ensured that all inputs are associated with a label, as well as
giving the form's submit button the attribute: type="submit".

-Also updated the general styling to reflect a notebook look in the website.
-Changed some of the coloring to make it less harsh to look at.
-Added borders to certain elements to add more dimension to the page

Note: my-recipes page is still not implemented, but it will be when the database is integrated as
      the page relies heavily on it being present.

Screenshots:
![Screenshot of about page](about-page.png)
![Screenshot of home page](home-page.png)

# Week 8 features below!

-home-page.ejs      Notifies user of valid or invalid values for a new recipe(name, ingredients or notes)

-shopping-list.ejs  Allows user to add new items to the list, although db will be required for 
                    further functionality

-Other: *Replaced old routes with route js files, as well as controllers for every page in the website
        *Added styles for buttons to sort of match their functionality (red -> delete, green -> add)


# Week 7 features below!

-home-page.ejs     Shows what entries to add a recipe may look like

-about.ejs         QnA section that addresses some questions and explains the future features

-shopping-list.ejs    Shows the checklist layout for a sample shopping list

-my-recipes.ejs     To be implemented after getting further into the project

# Important note:

There may be leftover files from the template, but those can be ignored as they are not in use anymore

