//
// This file serves as a controller for getting a daily inspirational quote
//

exports.getDailyQuote = async (req, res) => {
    try {
        // Call the zenquotes api for a daily quote
        const response = await fetch('https://zenquotes.io/api/today');

        // If error, throw error with error message
        if (!response.ok) {
            throw new Error;
        }

        // Get the quote part of the response
        const data = await response.json();
        const quote = `${data[0].q} — ${data[0].a}`;

        // Return a json object with the quote
        return res.json({ result: quote });
    }
    catch (error)
    {
        // Return the error message in a json object
        let problem = "Unable to get quote...";
        return res.json({ result: problem});
    }
}