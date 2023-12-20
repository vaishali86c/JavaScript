// using filter 

const arr = [1,2,3,4,5];

const ans = arr.filter(function(n) {
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
})

console.log(ans);

const arrray = ["vaishali", "chavan"];
const anss = arrray.filter(function(n) {
    if(n.startsWith("v")) {
        return true;
    } else {
        return false;
    }
});

console.log(anss);
