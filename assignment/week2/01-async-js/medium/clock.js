setInterval(updateTime, 1000);

function updateTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    

    console.log(`Time : ${hours} : ${minutes} : ${second}`);

}

updateTime();