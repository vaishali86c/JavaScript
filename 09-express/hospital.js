// you need to create four routes {4 things can hospital can do}
// GET - user can check how many kidneys they have and their health
// POST - user can add a new kidney
// PUT - user can replace a kidney , make it healthy
//  DELETE - user can remove a kidney


const express = require("express");
const app = express();

const user = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    const JohnKidneys = user[0].kidneys;
    const numberOfKidneys = JohnKidneys.length;
    let numberOfHealthyKidney = 0;

    for(let i = 0; i < JohnKidneys.length; i++) {
        if(JohnKidneys[i].healthy) {
            numberOfHealthyKidney = numberOfHealthyKidney +1;
        }
    }
    const numberOfUnHealthyKidney = numberOfKidneys - numberOfHealthyKidney;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidney,
        numberOfUnHealthyKidney
    })
})


app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

app.put("/", function(req, res) {
    for (let i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res) {
    const newKidney = [];
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if(user[0].kidneys[i].healthy) {
            newKidney.push({
                healthy: true
            })
        }
    }
    user[0].kidneys = newKidney;
    res.json({msg: "Done!"});

    // codition for status code here 
})

app.listen(3000);