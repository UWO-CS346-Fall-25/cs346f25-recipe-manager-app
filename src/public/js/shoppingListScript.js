//
// Adds event handler for logging out of session
//
//

//
// Make sure user actually wants to delete shopping list
//
document.getElementById("clear-list-button").addEventListener("click", function(e){
    if (!confirm("Are you sure you want to delete your shopping list?")) {
      e.preventDefault(); 
    }
  });

//
// Logout the user
//
document.getElementById('log-out-button').addEventListener('click', function(){

    window.location.href = "/logout";
})