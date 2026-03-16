const board = document.querySelector(".board");
const startbtn = document.querySelector(".btn-start");
const restartBtn = document.querySelector(".btn-restart");
const modal = document.querySelector(".modal");

const startGameModal = document.querySelector(".start-game");
const restartGameModal = document.querySelector(".game-over");

const highScoreEle = document.querySelector("#high-score");
const scoreEle = document.querySelector("#score");
const TimeEle = document.querySelector("#time");


const blockHt = 50;
const blockWd = 50;

let highest = localStorage.getItem("high") || 0;
highScoreEle.innerText = highest;

let score = 0;
let timer = "00:00";
TimeEle.innerText = timer;
let speed = 500;

const cols = Math.floor(board.clientWidth/blockWd);
const rows = Math.floor(board.clientHeight/blockHt);

const blocks =[]

let snake = [
    {x: 1, y: 3},
];

let food = foodGenerator();

let direction = "right";

let intervalId = null;
let timeIntervalId = null;

board.innerHTML = "";

for(let row = 0; row < rows; row++){
    for(let col = 0; col < cols; col++){
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);
        // block.innerText = `${row}-${col}`;
        blocks[`${row}-${col}`] = block;
    }
}


function snakeStart(){
    snake.forEach((seg,id) => {
        const block = blocks[`${seg.x}-${seg.y}`];
        if(id === 0) block.classList.add("head");
        else block.classList.add("fill")
    })
}

function startGame (){
    let head = null;
    // timer = "00:00";
    blocks[`${food.x}-${food.y}`].classList.add("food");

    if(direction === "left"){
        head = {x: snake[0].x, y: snake[0].y-1}
    } else if(direction === "right"){
        head = {x: snake[0].x, y: snake[0].y+1}
    } else if (direction === "up"){
        head = {x: snake[0].x - 1, y: snake[0].y} 
    } else if (direction === "down"){
        head = {x: snake[0].x + 1, y: snake[0].y}
    }

    if(head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols){
        clearInterval(intervalId);
        modal.style.display = "flex";
        startGameModal.style.display  ="none";
        restartGameModal.style.display = "flex";
        return;
    }

    if(snake.some(seg=>seg.x===head.x && seg.y === head.y)){
        clearInterval(intervalId);
        clearInterval(timeIntervalId);
        modal.style.display="flex";
        startGameModal.style.display = "none";
        restartGameModal.style.display = "flex";
        return;
    }

    snake.forEach((seg, id) => {
        const block = blocks[`${seg.x}-${seg.y}`];
        block.classList.remove("fill", "head");
    })

    snake.unshift(head);


    if(head.x === food.x && head.y === food.y){
        blocks[`${food.x}-${food.y}`].classList.remove("food");
        food = foodGenerator();
        blocks[`${food.x}-${food.y}`].classList.add("food");
        // snake.unshift(head);
        score++;
        scoreEle.innerText = score;

        if(score>highest){
            highest = score;
            localStorage.setItem("high", score);
            highScoreEle.innerText = score;
        }

        if(score % 5 === 0 && speed > 100){
            speed -= 50;
            clearInterval(intervalId);
            intervalId = setInterval(startGame, speed)
        }
    } else {
        snake.pop();
    }
    
    
    snakeStart();
}

startbtn.addEventListener("click",()=>{
    modal.style.display = "none";
    intervalId = setInterval(startGame, speed);
    
    timeIntervalId = setInterval(() => {
        let [mm, ss] = timer.split(":").map(Number);
        if(ss == 59){
            mm += 1;
            ss = 0;
        } 
        else ss++;

        timer = `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
        TimeEle.innerText=timer;
    }, 1000)
})

function foodGenerator(){
    let newFood;
    
    do{
        newFood = {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols)
        }
    } while (snake.some(seg => seg.x === newFood.x && seg.y === newFood.y));

    return newFood;
}

restartBtn.addEventListener("click", restart);

function restart(){
    clearInterval(timeIntervalId);
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    score = 0;
    timer = "00:00";
    speed = 500;

    scoreEle.innerText = score;
    TimeEle.innerText = timer;
    highScoreEle.innerText = highest;
    snake.forEach(seg =>{
        const block =  blocks[`${seg.x}-${seg.y}`];
        block.classList.remove("fill", "head");
    })
    modal.style.display = "none";
    snake = [{x: 1, y: 3}];
    direction = "right";
    food = foodGenerator();
    intervalId = setInterval(startGame, speed);
}

addEventListener("keydown", e => {
    if(e.key === "ArrowUp" && direction != "down"){
        direction = "up";
    } else if (e.key === "ArrowDown" && direction != "up"){
        direction = "down";
    } else if (e.key === "ArrowRight" && direction != "left"){
        direction = "right";
    } else if (e.key === "ArrowLeft" && direction != "right"){
        direction = "left";
    }
})
