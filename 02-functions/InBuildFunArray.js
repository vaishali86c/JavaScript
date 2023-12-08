// length
let lnt = "vaishali";
console.log(lnt.length);

// indexOf

let idx = "hello world";
console.log(idx.indexOf("world"));

// lastIndexOf

let lastIdx = "hello world world";
console.log(lastIdx.lastIndexOf("world"));

// slice
let a = "vaishali";
let c = a.slice(2,5);   //last index - 1
console.log(c);

// substr

let sub = "vaishali";
let subStr = sub.substr(2,5);    // last index + 1
console.log(subStr);


// trim  - remove starting and ending white spaces

let b = "      vaishali          ";
let d = b.trim();
console.log(d);

// toUpperCase
let upper = b.toUpperCase();
// toLowerCase - give a lowercase values

console.log(upper);

// replace -- replace with another string
let rep = "hello world";
console.log(rep.replace("world", "javascript"));


// split  -- seprator and return in array

let spt = "hi my name is vaishali";
console.log(spt.split(" "));

let sptt = "hi,my,name,is,vaishali";
console.log(sptt.split(","));


// parseInt - use to convert the string into integer

// push and pop

let initialArray = [1, 2, 3];
initialArray.push(2);
console.log(initialArray);

initialArray.pop(2);
console.log(initialArray);


// shift and unshift 

initialArray.unshift(0);
console.log(initialArray);

initialArray.shift(0);
console.log(initialArray);

// concat

let secondarArr = [4, 5 , 6];
console.log(initialArray.concat(secondarArr));

// forEach

function logInfor(str) {
    console.log(str);
}

initialArray.forEach(logInfor);

