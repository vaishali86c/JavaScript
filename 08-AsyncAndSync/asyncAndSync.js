/*

synchrounus nature of js : (single tradded in nature)

together, one after the another , sequential , only one thing happen only the one time


Asynchronous nature of js :

opposite of sync ,
happen in parts
multiple things are context switching with each other
things are happening parallelly


To understand what asynchronous programming means, 
think about multiple people working on a project 
simultaneously, each on a different task.



Similarly, in a computer program, asynchronous programming allows a program to work on multiple tasks simultaneously instead of completing one task before moving on to the next one.
 This can make the program get more things done in a shorter amount of time.


Asynchronous function - setTimeout(), anonymous functions, fs.readFile()
*/

function findSum(n) {
    let ans = 0;

    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000);
console.log("HELLO WORLD");


