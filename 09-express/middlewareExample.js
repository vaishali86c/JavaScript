const express = require("express");

const app = express();

// function that return a booelan if the age of the person is more than 14

function isOldEnoughMiddleware(age) {
    const age = req.query.age;

    if (age >= 14) {
        next();
    } else {
        res.json({
            msg : "Sorry you are not in age yet"
        })
    }
}

app.get("/ride1", isOldEnoughMiddleware, function(req, res) {

    res.json({
        msgs: "You have successfully riden the ride 1"
    })
})

app.get("/ride2", isOldEnoughMiddleware, function(req, res) {
    res.json({
        msgs: "You have successfully riden the ride 2"
    })
})

app.listen(3000);