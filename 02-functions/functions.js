function findSum(n) {
    let ans = 0;

    for (let i = 0; i < n; i++) {
        ans = ans + i;
    }
    return ans;
}
let ans = findSum(100);
console.log(ans);


// simple function

function sum (a, b) {
    return a + b;
}