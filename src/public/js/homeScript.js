//
// Adds event handler for clicking on create recipe button.
// FIX ME: Only says whether input is valid, does not populate a database... yet!
//
document.getElementById("create-recipe-button").addEventListener("click", function(){

    // Make it so text areas do not clear when invalid values entered.
    event.preventDefault();

    let recipeBox = document.getElementById("recipe-name-input");
    let ingredientsBox = document.getElementById("ingredients-input");
    let notesBox = document.getElementById("notes-input");

    // Check for invalid values, true or false
    let validValues = checkNewRecipeInputs([recipeBox, ingredientsBox, notesBox]);

    // If valid => Success!, else => Invalid values entered...
    if (validValues == true)
        alert("Recipe Added Successfully!");
    else
        alert("Invalid Values Entered...");
});


//
// Function that checks if inputs in list all have valid textContent
// @return: true if valid, false if invalid
//
checkNewRecipeInputs = function (inputs) {

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length === 0)
            return false;
    }
    return true;
}