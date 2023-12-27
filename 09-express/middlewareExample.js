const express = require("express");

const app = express();

// function that return a booelan if the age of the person is more than 14

function isOldEnough(age) {
    if (age >= 14) {
        return true;
    } else {
        return false;
    }
}

app.get("/ride1", function(req, res) {
    if (isOldEnough(req.query.age)) {
        res.json({
            msgs: "You have successfully riden the ride 1"
        })
    } else {
        res.status(401).json({
            msgs: "sorry you are not in the age"
        })
    }
})

app.listen(3000);