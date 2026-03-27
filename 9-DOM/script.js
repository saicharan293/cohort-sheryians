

// Events
// click, 
// dblclick, 
// mouseenter, 
// mouseleave, 
// mousemove, 
// wheel (on body), 
// keydown, 
// keypress

let main = document.querySelector("main");
let cursor = document.querySelector("#cursor");
main.addEventListener("mousemove", function(e){
    cursor.style.left = e.x+'px';
    cursor.style.top = e.y+'px';
})