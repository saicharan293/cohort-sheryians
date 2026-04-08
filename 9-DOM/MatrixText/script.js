let para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

let iteration = 0;

function randomText(){
    const randomString = text.split('').map((char, idx)=>{
        if(idx < iteration){
            return char;
        }
        return characters.split('')[Math.floor(Math.random()*52)];
    }).join("");

    para.innerText = randomString;

    iteration += 0.5;
}

para.addEventListener("mouseenter",()=>{
    let interval = setInterval(randomText,30);
})
