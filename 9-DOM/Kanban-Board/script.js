const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const tasks = document.querySelectorAll(".task");
const addTaskBtn = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const modalBg= document.querySelector(".bg");
const submitTaskBtn = document.querySelector("#add-new-task");
const center = document.querySelector(".center");
const deleteTask = document.querySelector("#delete")
let tasksData = {};
let draggedElement = null;

if(localStorage.getItem("tasks")){
    let data = JSON.parse(localStorage.getItem("tasks"));
    
    for(let col in data){
        let column = document.querySelector(`#${col}`);

        data[col].forEach(task => {
            createTaskElement(task.title, task.desc, column);
        });        
    }
    updateTaskCount();
}

tasks.forEach((task)=>{
    task.addEventListener("drag",(e)=>{
        draggedElement = task;
    })
});

function createTaskElement(title, desc, column){
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");

    div.innerHTML=`
        <h2>${title}</h2>
        <p>${desc}</p>
        <button id="delete">Delete</button>
    `;

    column.appendChild(div);

    div.addEventListener("drag",(e)=>{
        draggedElement=div;
    });

    const deletebtn = div.querySelector("button");
    deletebtn.addEventListener("click", ()=>{
        div.remove();
        updateTaskCount();
    })
}

function updateTaskCount(){
    [todo, progress, done].forEach(col => {
        let tasks = col.querySelectorAll(".task");
        let count = col.querySelector(".right");

        tasksData[col.id] = Array.from(tasks).map(t => {
            return {
                title : t.querySelector("h2").innerText,
                desc : t.querySelector("p").innerText
            }
        })

        localStorage.setItem("tasks", JSON.stringify(tasksData));
        count.innerText = tasks.length;
    });
}

function addDragEventsOnColumn(column){
    column.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        column.classList.add("hover-over");
    });

    column.addEventListener("dragleave", (e)=>{
        e.preventDefault();
        column.classList.remove("hover-over");
    });

    column.addEventListener("dragover", (e)=>{
        e.preventDefault();
    })

    column.addEventListener("drop", (e)=>{
        e.preventDefault();


        column.appendChild(draggedElement);
        column.classList.remove("hover-over");
        
        updateTaskCount();
    })
}


addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

addTaskBtn.addEventListener("click",(e)=>{
    modal.classList.toggle("active");
})

modalBg.addEventListener("click",(e)=>{
    modal.classList.toggle("active");
})

submitTaskBtn.addEventListener("click",(e)=>{
    const taskTitle = document.querySelector(".title").value;
    const desc = document.querySelector(".desc").value;

    createTaskElement(taskTitle, desc, todo);
    updateTaskCount();
    modal.classList.remove("active");
    center.querySelector(".title").value = "";
    center.querySelector(".desc").value = "";
})