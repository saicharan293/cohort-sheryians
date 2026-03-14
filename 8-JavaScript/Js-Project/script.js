const board = document.querySelector(".board");
const startbtn = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");
const restartbtn = document.querySelector(".btn-over");

const highScoreEle = document.querySelector('#high-score');
const scoreEle = document.querySelector('#score');
const timeEle = document.querySelector('#time');

const blockht = 50;
const blockwdt = 50;

let highScore = localStorage.getItem("high") || 0;
highScoreEle.innerHTML = highScore;
let score = 0;
let time = `00-00`;

const cols = Math.floor(board.clientWidth/blockwdt);
const rows = Math.floor(board.clientHeight/blockht);

let intervalId = null;
let timerIntervalId = null;

let food = {x: Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)};


const blocks = [];

let snake = [
    {x: 1, y: 3}, 
];

let direction = 'right'

// for(let i = 0; i<rows*cols; i++){
//     const block = document.createElement("div");
//     block.classList.add("block");
//     board.appendChild(block);
// }

for (let row = 0; row < rows; row++){
    for (let col = 0; col < cols; col++){
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);
        block.innerText=`${row}-${col}`;
        blocks[`${row}-${col}`] = block;
    }
}

function renderSnake(){

    let head = null;

    blocks[`${food.x}-${food.y}`].classList.add("food");

    if(direction === "right"){
        head = {x: snake[0].x, y: snake[0].y+1}
    } else if(direction === "left"){
        head = {x: snake[0].x, y: snake[0].y-1}
    } else if(direction === "up"){
        head = {x: snake[0].x-1, y: snake[0].y}
    } else if(direction === "down"){
        head = {x: snake[0].x+1, y: snake[0].y}
    }

    if(head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols){
        clearInterval(intervalId);
        modal.style.display="flex";
        startModal.style.display = "none";
        gameOverModal.style.display = "flex";
        return;
    }


    if(head.x === food.x && head.y === food.y){
        blocks[`${food.x}-${food.y}`].classList.remove("food");
        food = {x: Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)};
        blocks[`${food.x}-${food.y}`].classList.add("food");
        
        snake.unshift(head);
        score+=1;
        scoreEle.innerText=score;

        if(score>highScore){
            highScore = score;
            localStorage.setItem("high", highScore.toString());
        }
    }

    snake.forEach((seg)=>{
        blocks[`${seg.x}-${seg.y}`].classList.remove("fill");
    });

    snake.unshift(head);
    snake.pop();

    snake.forEach((seg)=>{
        blocks[`${seg.x}-${seg.y}`].classList.add("fill");
    });

}


startbtn.addEventListener("click",()=>{
    modal.style.display = "none";
    intervalId = setInterval(()=>{
        renderSnake();
    }, 300);

    timerIntervalId = setInterval(() => {
        let [min, sec] = time.split("-");
    }, (1000));

})

function restartgame(){
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    snake.forEach(seg => {
        blocks[`${seg.x}-${seg.y}`].classList.remove("fill");
    })
    modal.style.display="none";
    snake = [{x: 1, y: 3}];
    food = { x: Math.floor(Math.random()*rows), y: Math.floor(Math.random()*cols)};
    direction = "down";
    score = 0;
    time = '00-00';
    scoreEle.innerText = score;
    timeEle.innerText = time;
    highScore.innerText = highScore;

    intervalId = setInterval(()=>{
        renderSnake();
    }, 300);
}
restartbtn.addEventListener("click", restartgame);

addEventListener("keydown", e => {
    if(e.key==="ArrowUp"){
        direction = "up";
    } else if(e.key === "ArrowRight"){
        direction = "right";
    } else if(e.key === "ArrowLeft"){
        direction = "left";
    } else if(e.key === "ArrowDown"){
        direction = "down";
    }
    
})