

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

let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let per = document.querySelector(".per");
let grow = 0;
let downloadbtn = document.querySelector("button");
let res = document.querySelector(".res");

downloadbtn.addEventListener("click", function(e){
    e.preventDefault();
    this.style.pointerEvents = "none";

    var num = 50 + Math.floor(Math.random()*50);

    let interval = setInterval((e)=>{
        grow++;
        per.innerHTML=grow+"%";
        inner.style.width = grow+"%";
    }, num);

    setTimeout(() => {
        clearInterval(interval);
        this.innerHTML="Downloaded";
        this.style.opacity=0.5;
        res.innerText= `Downloaded in ${num/10} seconds`;
    }, num*100);
})