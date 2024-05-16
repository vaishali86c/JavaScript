// Async / Await =>  
//                  Async = makes a function return  a promise
//                  Await = makes an async function wait for a promise


//              Allow you to write async code in a synch manner 
//              Async doesn't have resolve or reject parameters
//              Everything after Await is placed in an event queue

function walkDog(callback) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
         
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

            if (trashTakeOut) {
                resolve("you take out the trash");
            }
            else {
                reject("you did not take out the trash");
            }
        }, 500)
    })
}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitechenResult = await cleanKitechen();
        console.log(cleanKitechenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    } 
    catch(error) {
        console.error(error);
    }
}

doChores();