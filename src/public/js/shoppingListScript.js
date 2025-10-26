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
    let newListItem = document.createElement("li");
    newListItem.classList.add("ingredient");
    let newInput = document.createElement("input");
    newInput.type = "checkbox";
    newListItem.appendChild(newInput);
    newListItem.append(ingredientBox.value);

    // String entered is not empty AND less than 51 characters
    if (ingredientBox.value.length > 0) {
        if (ingredientBox.value.length < 51) {

            // Add the new ingredient to the list
            shoppingList.insertBefore(newListItem, document.getElementById("new-ingredient-container"));
            ingredientBox.value = "";
        }
        else {
            alert("Ingredient must at most be 50 characters...");
        }
    }

    // Account for new element(s)
    ingredients = shoppingList.children();
})

//
// EH for clear shopping list button
// FIX ME: clear button not clearing list, fix for next deliverable
//
document.getElementById("clear-list-button").addEventListener("click", function() {

    alert("here");
    shoppingList.textContent = "";
})