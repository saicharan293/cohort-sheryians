const menu = document.getElementById("context-menu");

const main = document.querySelector("main");

main.addEventListener("contextmenu", function(e){
    e.preventDefault();
    
    menu.style.display = "block";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
});

document.addEventListener("click", function(){
    menu.style.display= "none";
});