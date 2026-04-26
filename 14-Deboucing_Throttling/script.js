
// debouncing and throtting

// Debounce → “I will only act after things have been quiet for some time. if not timer resets”
// use case: to avoid too many rapid requests

// Throttle → “While user is active, I run at a fixed rate”

function debouce(fn, delay){
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(fn, delay);
    }
}

document.querySelector(".search").addEventListener("input", 
    debouce(function(){
        console.log("chala")
    }, 400));


// Throttle

function throttle(fn, delay){
    let last = 0;
    return function(){
        const now = Date.now();
        if(now - last >= delay){
            last = now;
            fn();
        }
    }
}


window.addEventListener("mousemove", throttle(function(){
    console.log("anu")
}, 2000))