//
// Adds event handler for adding new ingredients to shopping list, removing old ingredients.
//
// FIX ME: The list disappears when I refresh the page, to be fixed with db implementation.
//

let shoppingList = document.getElementById("shopping-list-items");
let addButton = document.getElementById("add-ingredient-button");

//
// EH for Add ingredient button being clicked
//
addButton.addEventListener("click", function() {

    // Prepare elements to add
    let ingredientBox = document.getElementById("new-ingredient");
    let countBox = document.getElementById("count");
    let newListItem = document.createElement("li");
    newListItem.classList.add("ingredient");
    let newInput = document.createElement("input");
    newInput.type = "checkbox";
    newListItem.appendChild(newInput);
    newListItem.append(" " +  countBox.value + " " + ingredientBox.value);

    // String entered is not empty AND less than 51 characters
    if (ingredientBox.value.length > 0) {
        if (ingredientBox.value.length < 76) {

            // Add the new ingredient to the list
            shoppingList.insertBefore(newListItem, document.getElementById("new-ingredient-container"));
            ingredientBox.value = "";
            countBox.value = "";
        }
        else {
            alert("Ingredient must at most be 75 characters...");
        }
    }

    // Account for new element(s)
    ingredients = shoppingList.children();
})

//
// EH for clear shopping list button
//
document.getElementById("clear-list-button").addEventListener("click", function() {

    // Array of nodes to remove
    let ingredientsToRemove = shoppingList.querySelectorAll(".ingredient");

    // Iterate through ingredients, remove child if in shopping list
    ingredientsToRemove.forEach(ingredient => {
        shoppingList.removeChild(ingredient);
    })
})