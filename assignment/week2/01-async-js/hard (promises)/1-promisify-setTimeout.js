/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    let promises = new Promise((resolve, reject) => {
        setTimeout(resolve, n * 1000);
    });
    return promises;
}

// wait(3) 
//     .then((message) => {
//         console.log(message);
//     })   

//     .catch((error) => {
//         console.error("error : ", error);
//     })


module.exports = wait;
