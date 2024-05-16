// promise = An object that manages async operation
//          wrap a promise object around (async code)
//          "i promise to return a value"
//          PENDING => RESOLVED AND REJECTED
//          new Promise((reject, resolve) => {async code})

const { error } = require("console");
const { validateHeaderName } = require("http");
const { callbackify } = require("util");

// Do these chores in order

// 1. walk the dog
// 2. clean the kichen 
// 3. take out the trash

function walkDog(callback) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
         
            if (dogWalked) {
                resolve("you walk the doge");
            } else {
                reject("you did not walked the dog");
            }
        }, 1500)
    })
}

function cleanKitechen(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitechenClean = true;
            
            if (kitechenClean) {
                resolve("you clean the kichen");
            }
            else {
                reject("you did not clean the kichen");
            }
        }, 2500)
    })
}


function takeOutTrash(callback) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakeOut = true;

            if (takeOutTrash) {
                resolve("you take out the trash");
            }
            else {
                reject("you did not take out the trash");
            }
        }, 500)
    })
}

walkDog()
    .then(value => {
        console.log(value); 
        return cleanKitechen();
    })
    .then(value => {
        console.log(value); 
        return takeOutTrash();
    })
    .then(value => {
        console.log(value);
        console.log("you finished all work")
    })
    .catch(error => {
        console.error(error);
    })

// using callbacks 


// walkDog(() => {
//     cleanKitechen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores !");
//         });
//     });
// });