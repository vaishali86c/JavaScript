if (2 == "2") {
    console.log("true");
}

// strickly check 


// cant't run
if ( 2 === "2") {
    console.log("it is not same because its datatypes is not same");
}

// if 
// if else
// loops
// 

// false values
// false, 0, -0, bigint, 0n, "", null, undefinned, NaN

// truly values
// "0", 'false', " ", [], {}, function() {}

// how to check object is empty or not

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty ");
}

// if (false == 0)   true
// if (false == '')  true
// if (0 == '')   true

// nullish coalscing operator (??) : null and undefined

let val;

val = 5 ?? 10
console.log(val);
