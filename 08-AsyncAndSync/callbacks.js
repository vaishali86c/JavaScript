function sqr(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sum(a, b, fn) {
    let c = fn(a);
    let d = fn(b);

    return c + d;
}

let ans = sum(1, 2, sqr);
console.log(ans);