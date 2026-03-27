
var h1 = document.querySelector("h1");
var sounds = {
    KeyA: new Audio('./keyboardAudios/24.mp3'),
    KeyS: new Audio('./keyboardAudios/29.mp3'),
    KeyD: new Audio('./keyboardAudios/36.mp3'),
    KeyF: new Audio('./keyboardAudios/41.mp3'),
    KeyG: new Audio('./keyboardAudios/48.mp3'),
    KeyH: new Audio('./keyboardAudios/53.mp3'),
    KeyJ: new Audio('./keyboardAudios/60.mp3')
};


document.body.addEventListener("keydown", function(e){
    h1.innerText = e.code;
    if(sounds[e.code]){
        sounds[e.code].currentTime = 0;
        sounds[e.code].play();
    }
})