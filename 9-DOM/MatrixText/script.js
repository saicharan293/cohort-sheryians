let para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

let iteration = 0;
let interval = null; 

function randomText(){
    const randomString = text.split('').map((char, idx)=>{
        if(idx < iteration) return char;
        // if(idx >= text.length - iteration){
        //     return char;
        // }
        return characters.split('')[Math.floor(Math.random()*52)];
    }).join("");

    para.innerText = randomString;

    iteration += 0.5;

    if(iteration >= text.length) clearInterval(interval);
}

para.addEventListener("mouseenter",()=>{
    iteration = 0;
    clearInterval(interval);
    para.innerText = text;
    interval = setInterval(randomText,30);
})
