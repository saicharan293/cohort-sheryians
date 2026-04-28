
function openFeatures(){
    let allElems = document.querySelectorAll(".elem");
    let allBackButtons = document.querySelectorAll(".fullElem .back");
    let allFullElems = document.querySelectorAll('.fullElem');

    allElems.forEach(function(elem){
        elem.addEventListener("click", function(){
            allFullElems.forEach(el => el.classList.remove("active"));
            allFullElems[elem.id].classList.add("active");
        })
    })

    allBackButtons.forEach(function(back) {
        back.addEventListener("click", function(){
            console.log(back.id);
            allFullElems[back.id].classList.remove("active");
        })
    });
}

openFeatures();

function TodoList(){
        
    let form = document.querySelector(".todo-container .addTask form");

    let allTask = document.querySelector(".todo-container .allTask");
    let taskInput = document.querySelector(".addTask form input");
    let taskArea = document.querySelector(".addTask form textarea");

    let taskImp = document.querySelector(".addTask .mark input#check");

    // demo purpose only
    let localTasks = [
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

    let currentTasks = JSON.parse(sessionStorage.getItem("tasks"))|| [];


    function save(){
        sessionStorage.setItem("tasks", JSON.stringify(currentTasks));
    }

    function renderTask(){
        if(currentTasks.length === 0){
            allTask.innerHTML=`<p class="nodata">No data added yet</p>`;
            return;
        }
        let sum = '';

        currentTasks.forEach(function(e, idx){
            sum += `
            <div class="task">
                <h5>${e.task} <span class="${e.imp}">imp</span></h5>
                <button id=${idx}>Mark as Completed</button>
            </div>
            `
        })

        allTask.innerHTML=sum;

    }

    renderTask();

    allTask.addEventListener("click", function(e){
        if(e.target.tagName == "BUTTON"){
            const index = e.target.id;
            currentTasks.splice(index, 1);
            save();
            renderTask();
        }
    });

    form.addEventListener("submit", function(e){
        e.preventDefault();
        currentTasks.push({
            task: taskInput.value, 
            details: taskArea.value,
            imp: taskImp.checked
        })
        sessionStorage.setItem("tasks", JSON.stringify(currentTasks));
        taskInput.value='';
        taskArea.value='';
        taskImp.checked = false;
        renderTask();
    });
}

TodoList();

// -----------------------
// Day Planner

function DailyPlanner(){
    const hours = Array.from({length: 18},(_, idx)=>`${6+idx}:00 - ${7+idx}:00`);


    const dayPlanner = document.querySelector(".day-planner");
    let wholeDaysum='';

    let dayPlannerInputs = JSON.parse(sessionStorage.getItem("dayPlanData")) || {};
    hours.forEach(function(elem,idx){
        let saved = dayPlannerInputs[idx]||'';
        wholeDaysum += `
            <div class="day-planner-time">
                <p>${elem}</p>
                <input id="${idx}" type="text" placeholder="..." value="${saved}">
            </div>
        `
    });
    dayPlanner.innerHTML=wholeDaysum;


    let inputs = dayPlanner.querySelectorAll("input");

    // inputs.forEach(function(elem){
    //     elem.addEventListener("input", function(){
    //         // console.log(elem.value)
    //         dayPlannerInputs[elem.id] = elem.value;
    //         sessionStorage.setItem("dayPlanData", JSON.stringify(dayPlannerInputs))
    //     })
    // })

    dayPlanner.addEventListener("input", function(e){
        if(e.target.tagName == "INPUT"){
            dayPlannerInputs[e.target.id] = e.target.value;
            sessionStorage.setItem("dayPlanData", JSON.stringify(dayPlannerInputs))
        }
    })

}

DailyPlanner();

let quoteEle = document.querySelector(".moti h3");
let author = document.querySelector(".author h4");

async function MotiQuote(){
    try {
        quoteEle.textContent = "Loading quote...";
        author.textContent = "...";

        let response = await fetch("https://dummyjson.com/quotes/random");
        if(!response.ok){
            throw new Error("API failed");
        }
        let data = await response.json();
        console.log(data);
        quoteEle.textContent = data.quote;
        author.textContent = data.author;
    } catch (error) {
        console.error(error);
        quoteEle.textContent = "Failed to load quote 😢";
        author.textContent = "";
    }
    
}

MotiQuote();
