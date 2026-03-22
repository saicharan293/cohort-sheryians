
var btn = document.querySelector("button");
var main = document.querySelector("main");

var arr = ['Hey! I am Sai Charan', 'Sheryians is Best','JavaScript is Tricky','React is Library', 'Next is Framework','Angular is Framework'];


btn.addEventListener("click", function(e){
    var h1 = document.createElement("h1");
    var x = Math.random()*80;
    var y = Math.random()*80;
    var scale = Math.random()*3;

    var num = Math.floor(Math.random()*arr.length);
    
    h1.innerText=arr[num];
    h1.style.position='absolute';
    h1.style.left = x+'%';
    h1.style.top = y+'%';
    h1.style.scale=scale;
    main.appendChild(h1);
})