// assignment pending to do 


const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

const app = express();
app.use(express.json);

const ALL_USERS = [
    {
        username: "vaishali@gmail.com",
        password: "124",
        name: "vaishali chavan",
    },
    {
        username: "vaisshnavi@gmail.com",
        password: "184",
        name: "vaishnvavi chavan", 
    },
    {
        username: "sakshi@gmail.com",
        password: "324",
        name: "sakshi chavan",
    },
];

function userExists(username, password) {
    // write logic to return true or false if this user exists
    // to all_users array

    const userExists = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExists = true;
        }
    }
    return userExists;
}

app.get("/signin", function(req, res) {
    const username = req.body.username;
    const password =  req.body.password;

    if (!userExists(username, password)) {
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

    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    res.json({
        users: ALL_USERS.filter(function(value) {
            if (value.username == username) {
                return false;
            } else {
                return true;
            }
        })
    })
    // try {
    //     const decoded = jwt.verify(token, jwtPassword);
    //     const username = decoded.username;
    //     // return a list of user other than this username
    // } catch (err) {
    //     return res.status(403).json({
    //         msg: "Invalid token",
    //     });
    // }
 });

 app.listen(3000);
