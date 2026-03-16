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

h1.innerHTML = "changed!"

// --- Changing CSS
h1.style.color = "red";

// --- Event listerners
h1.addEventListener("click", function(){
    console.log("hello");
    h1.innerHTML="<i>event clicked</i>";
    h1.style.color = "blue"
})