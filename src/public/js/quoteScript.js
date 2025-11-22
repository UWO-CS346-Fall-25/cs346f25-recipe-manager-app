//
// This frontend js file handles displaying a daily quote!
//

document.getElementById('quote-button').addEventListener('click', async () => {

    // Call route to get daily quote
    const response = await fetch('/dailyQuote');

    // Issue getting response
    if (!response.ok){

        alert("Trouble getting quote...");

        // Toastify({
        //     text: 'Trouble getting quote...',
        //     duration: 3000,
        //     close: true,
        //     position: 'center',
        //     gravity: 'top'
        // }).showToast();
    }
    else {

    // data refers to the json object
    const data = await response.json();

    // Display the toast to the user
    alert(data.result);

    // Toastify({
    //     text: data.result,
    //     duration: 3000,
    //     close: true,
    //     position: 'center',
    //     gravity: 'top'
    // }).showToast();
    }

});