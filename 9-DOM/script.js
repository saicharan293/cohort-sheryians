// DOM - Document Object Model

// DOM - has 4 pillars

// - Selecting an element
// - Changing HTML
// - Changing CSS
// - Event Listeners


// --- Selecting an element

// var h1 = document.querySelector("h1");
// var h1 = document.getElementById("hero");
// var h1 = document.getElementsByClassName("firstHead");
// to select all similar elements = querySelectorAll(--element)

// --- Changing an element (HTML)

// h1.innerHTML = "changed!"

// --- Changing CSS
// h1.style.color = "red";

// --- Event listerners
// h1.addEventListener("click", function(){
//     console.log("hello");
//     h1.innerHTML="<i>event clicked</i>";
//     h1.style.color = "blue"
// })

// ------------------
// --- Randomness
// - Math.random() produces result between o to 1
// 0.6264800898330077
// 0.7675811233203904
// 0.3878393475118578

// - Math.random()*10 - range between 0 and 10
// 5.419751312498194
// 3.7607559966471706

// Note : Math.random()*n, to fetch data between 0 and n


// But for whole numbers, .floor() to get least close whole number
// Math.floor(Math.random()*10)