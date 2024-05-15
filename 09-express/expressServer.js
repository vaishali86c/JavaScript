
//import the express module
const express = require("express");

//create the instance of express

const app = express();

//define a root for root url path

app.get("/", (req, res) => {
    res.send("Hello this is root path");
})

// Define another route for "/api" with JSON response
app.get('/api', (req, res) => {
    res.json({ message: 'This is the API route.' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})