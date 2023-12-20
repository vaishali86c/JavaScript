const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const obj = {
    user: "vaishali",
    id: 892
}
console.log(Object.keys(obj));
console.log(Object.values(obj));


