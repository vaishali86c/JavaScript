let fs = require('fs');
let data = "My name is vaishali"
fs.writeFile("demo.txt", data, (err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("file is successfully written !");
        console.log("file is written : ", data);
    }
})

