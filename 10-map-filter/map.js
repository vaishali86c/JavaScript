const { copyFileSync } = require("fs");

const arr = [1,2,3,4,5];

// function tranform(i) {
//     return i * 2;
// }

// const ans = arr.map(tranform);

const ans = arr.map(function(i) {
    return i * 2;
})
console.log(ans);