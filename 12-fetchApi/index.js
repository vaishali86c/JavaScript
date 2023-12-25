const express = require("express");
const jwt = require("jsonwebtoken");
const { allowedNodeEnvironmentFlags } = require("process");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
    {
        username: "vaishali87@gmail.com",
        password: "123",
        name: "vaishali chavan",
    },
    {
        username: "vaishnavi12@gmail.com",
        password: "456",
        name: "vaishnavi chavan",
    },
    {
        username: "sakshi34@gmail.com",
        password: "789",
        name: "sakshi chavan",
    }
];

function userExists(username, password) {
    // write the logic to return trueor false if the user exists
    // in array ALL-USERS

    const userExists = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our in memory db",
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username

    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000)