const currentDate = new Date();

console.log(currentDate);


console.log("Date:", currentDate.getDate());
console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
console.log("Year:", currentDate.getFullYear());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());


// we can also set a date and all using set methods
