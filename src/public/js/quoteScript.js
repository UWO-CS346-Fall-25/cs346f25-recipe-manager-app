//
// This frontend js file handles displaying a daily quote!
//
document.getElementById('quote-button').addEventListener('click', async () => {

    // Call route to get daily quote
    const response = await fetch('/dailyQuote');

    // Issue getting response
    if (!response.ok){

        alert("Trouble getting quote...");

    }
    else {

    // data refers to the json object
    const data = await response.json();

    // Display the quote to the user
    alert(data.result);
    }
});