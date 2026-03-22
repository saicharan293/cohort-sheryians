
var btn = document.querySelector("button");
var main = document.querySelector("main");

btn.addEventListener("click", function(e){
    let div = document.createElement("div");
    let divSize = 50

    let rect = main.getBoundingClientRect();

    let x = Math.floor(Math.random()*rect.width);
    let y = Math.floor(Math.random()*rect.height);

    if(x+divSize>rect.width || y+divSize>rect.height){
        return;
    }
    let r = Math.floor(Math.random()*360);

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    div.style.height=divSize+'px';
    div.style.width = divSize+'px';
    div.style.backgroundColor=`rgb(${c1}, ${c2}, ${c3})`;
    div.style.left=`${x}px`;
    div.style.top=`${y}px`;
    div.style.rotate=`${r}deg`;
    div.style.position='absolute';

    main.appendChild(div)
})