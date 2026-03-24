

// --- Timer functions in JS

// - Settimeout => Do it later, but only once

// setTimeout(() => {
//   console.log("Hello!");
// }, 3000);

// This prints Hello after 3 seconds , only once

// - setinterval => Do it again and again at fixed intervals of time

// setInterval(() => {
//     console.log("hello!");    
// }, 2000);

// Hello is logged for every 2 seconds

// - clearTimeout => to stop the settimeout

// let timer = setTimeout(() => {
//     console.log("Hello !");
// }, 2000);

// clearTimeout(timer);

// - clearinterval => To stop the setinterval

// let interval = setInterval(() => {
//     console.log("Hello");
// }, 2000);

// clearInterval(interval);

let img = document.querySelector("img");

let heart = document.querySelector("i");

img.addEventListener("dblclick", function(e){
    console.log("dbl");
    
    heart.style.opacity=1;
    heart.style.transform=`translate(-50%, -50%) scale(1) rotate(0)`
    setTimeout(() => {
        heart.style.transform=`translate(-50%, -200%) scale(1) rotate(60deg)`
    }, 800);
    setTimeout(() => {
        heart.style.opacity=0;
    }, 1000);
    setTimeout(() => {
        heart.style.transform=`translate(-50%, -50%) scale(0) rotate(60deg)`
    }, 1200);
})