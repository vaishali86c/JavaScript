var ans = new Promise((resolve, reject) => {
    var n = Math.floor(Math.ramdom() * 10);

    if(n < 5) {
        return resolve();
    } 
    else {
        return reject();
    }
}) 

ans.then(function () {
    console.log("below");
})

    .catch(function() {
        console.log("above"); 
    })
