// step 1 : can you call another function inside a function? yes

// use now see how can we use callback functions

function sqaure(n) {
    return n * n;
}

function sumOfSomething(a, b, fn) {    //callback
    const var1 = fn(a);
    const var2 = fn(b);

    return var1 + var2;
}

let ans = sumOfSomething(2, 2, sqaure);
console.log(ans);