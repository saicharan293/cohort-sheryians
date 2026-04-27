
function openFeatures(){
    let allElems = document.querySelectorAll(".elem");
    let allBackButtons = document.querySelectorAll(".fullElem .back");
    let allFullElems = document.querySelectorAll('.fullElem');

    allElems.forEach(function(elem){
        elem.addEventListener("click", function(){
            allFullElems[elem.id].style.display = 'block';
        })
    })

    allBackButtons.forEach(function(back) {
        back.addEventListener("click", function(){
            console.log(back.id);
            allFullElems[back.id].style.display = 'none';
        })
    });
}

openFeatures();

let form = document.querySelector(".todo-container .addTask form");

let allTask = document.querySelector(".todo-container .allTask");
let taskInput = document.querySelector(".addTask form input");
let taskArea = document.querySelector(".addTask form textarea");

let taskImp = document.querySelector(".addTask .mark input#check");

let currenTasks = [
    {
        task: 'Mandir jao',
        details: 'Hanuman',
        imp: true
    },
    {
        task: 'Coding shuru',
        details: 'Cohort 2',
        imp: true
    },
    {
        task: 'Lunch kar',
        details: 'Food',
        imp: false
    },
]



function renderTask(){
    var sum = '';
    currenTasks.forEach(function(e){
        sum += `
        <div class="task">
            <h5>${e.task} <span class="${e.imp}">imp</span></h5>
            <button>Mark as Completed</button>
        </div>
        `
    })

    allTask.innerHTML=sum;
}

renderTask();

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     let task = document.createElement("div");
//     task.className="task";
//     let button = document.createElement("button");
//     button.innerHTML="Mark as Completed"
//     let h5 = document.createElement("h5");
//     h5.innerText=taskInput.value;
//     task.append(h5, button);
//     allTask.appendChild(task);
//     console.log(taskImp.checked);  
// })


form.addEventListener("submit", function(e){
    e.preventDefault();
    currenTasks.push({
        task: taskInput.value, 
        details: taskArea.value,
        imp: taskImp.checked
    })
    taskInput.value='';
    taskArea.value='';
    taskImp.checked = false;
    renderTask();
});