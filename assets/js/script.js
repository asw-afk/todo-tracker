// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const todoCountSpan = document.querySelector('#todoList');


let id = [];
let fruitCake = [];


// Todo: create a function to generate a unique task id
function generateTaskId() {
    //increment by one
    
    //var sample array - [1, 2, 3,];
    //FOR LOOP

        
        let counter = 0;

        $("#btm").click(function incrememnt() {
            counter ++;
        }
        );
        console.log(counter);
}

// Todo: create a function to create a task card
function createTaskCard() {
    
    
    $("#dialog").dialog();
   console.log("AGGRFAGSRFARGDSAGDRS");

}




// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // const strawberry = window.localStorage.getItem("fruitCake");
    // const banana = JSON.parse(user_id)["fruitCake"]
    
    // const value = localStorage.getItem("fruitCake");
    // return JSON.parse(value);
       
        // todoList.innerHTML = '';
        // todoCountSpan.textContent = fruitCake.length;

        //render a new box
    for (let i = 0; i < fruitCake.length; i++){
        const froot = fruitCake[i];

        const li = document.createElement('li');
        li.textContent = froot; 
        li.setAttribute('data-index', i);

        const button = document.createElement('button');
        button.textContent = 'X';

        li.appendChild(button);
        todoList.appendChild(li); 
        console.log("bg3 good");
    }
} 





// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    console.log("FUCCKCCCC")

    //taskTitle
    //datepicker
    //taskDescr
    
    
         const title = taskTitle.value;
        const date = datepicker.value;
        const desc = taskDescr.value;
        console.log("smbody get me through this nightmaare");
    
        let Cake = {
            title: taskTitle.value,
            date: datepicker.value,
            desc: taskDescr.value,
        }
    
            fruitCake.push({Cake});
       
    
        localStorage.setItem('fruitCake', JSON.stringify(fruitCake));
        // localStorage.setItem('title', title);
        // localStorage.setItem('date', date);
        // localStorage.setItem('desc', desc)
        console.log("i  cant eat this sheeeeelf");
    
}


// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    $(function () {
        $('#skills-list').sortable({
          placeholder: 'ui-state-highlight',
        });
      });

}


function gregory() {

    const perry = JSON.parse(localStorage.getItem('fruitCake'));

    if (perry !== null) {
        fruitCake = perry;
    }

    renderTaskList();
}   


// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

$(function () {
    $("#datepicker").datepicker();
});

function fork(){
    handleAddTask();
    renderTaskList();
}

gregory();

$("#test").on('click', createTaskCard);
$("#pikap").click(fork);
