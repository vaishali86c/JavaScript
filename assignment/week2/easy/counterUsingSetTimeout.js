
let count = 0;
// setTimeout(() => {
//     count++;
//     console.log("counter: ", count);
// }, 1000)

function updateCounter() {
    count++;
    console.log("counter : ", count);

    setTimeout(updateCounter, 1000);
}

updateCounter();
