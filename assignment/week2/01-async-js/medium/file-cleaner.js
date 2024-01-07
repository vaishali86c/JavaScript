let fs = require('fs');

// read a file
fs.readFile("file1.txt", "utf-8", (err, data) => {

    // remove all the extra spaces in the file
    // using regular expression remove all the extra spaces
    let removeSpace = data.replace(/\s+/g, ' ');
    console.log(removeSpace);

    fs.writeFile("file1.txt", removeSpace, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("file is successfully written : ", removeSpace);
        }
    })
})

