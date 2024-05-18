const express = require('express');

const app = express();
const PORT = 3000;

app.get('/api/user', (req, res) => {
    const userId = req.query.id;
    const name = req.query.name;

    // process the parameters as needed 
    const user = {
        id: userId,
        name: name,
    };

    // send the json response  with the parsed parameters

    res.json({ user });
});

app.listen(PORT , () => {
    console.log(`server is running on http://localhost:${PORT}`);
})