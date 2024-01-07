var fs = require('fs');

fs.readFile("demo1.txt", 'utf-8', function(err, data){
    console.log(data);
})

console.log('readfile called')

// for (let i = 1; i < 100000; i++) {
//     console.log(i);
// }