const express = require('express');

const app = express();
const PORT = 3000;

app.get('/get-info', (req, res) => {
    const userAgent = req.headers['user-agent'];
    const acceptLanguage = req.headers['accept-language'];

    res.json({
        userAgent,
        acceptLanguage,
    });
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})