const { rejects } = require("assert");
const { resolve } = require("path");

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("our shop is closed"));
        }
    });
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
.then(() =>{
    return order(1000, () => console.log("Production has started"));
})