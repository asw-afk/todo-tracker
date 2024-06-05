// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const todoCountSpan = document.querySelector('#todoList');



//fruitCake is the tasks array
let fruitCake = [];


// Todo: create a function to generate a unique task id
function generateTaskId() {
    return Math.floor(Math.random() * 100000).toString();

}

// Todo: create a function to create a task card
function createTaskCard() {
    
    
    $("#dialog").dialog();
   console.log("AGGRFAGSRFARGDSAGDRS");

}




// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
 
        // render a new box
    for (let i = 0; i < fruitCake.length; i++){
        const froot = fruitCake[i];

        const li = document.createElement('li');
        li.className = 'task-card';
        li.id = 'sortable';

        //Title Input
        const toast =  document.createElement('div');
        toast.textContent = froot.title;
        
        //Date input
        const bread = document.createElement('div');
        bread.textContent = froot.date;

        //Description input
        const frenchToast = document.createElement('div');
        frenchToast.textContent = froot.desc;

        //Delete Button
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.id = 'del';
    

        li.appendChild(toast);
        li.appendChild(bread);
        li.appendChild(frenchToast);
        li.appendChild(button);
        

        todoList.appendChild(li); 
        console.log("bg3 good");
   }

   
} 



// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    
   
        console.log("smbody get me through this nightmaare");
    
        let Cake = {
            title: taskTitle.value,
            date: datepicker.value,
            desc: taskDescr.value,
        }
    
            fruitCake.push(Cake);
       
    
        localStorage.setItem('fruitCake', JSON.stringify(fruitCake));
        console.log("i  cant eat this sheeeeelf");
    
}


// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

const deleteCardId = $(event.target).parent().parent()[0].dataset.dialog;
fruitCake = fruitCake.filter((dialog) => {
    return dialog.id !== deleteCardId;
});


console.log("trst");
}


$("#del").click(handleDeleteTask);

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    $( function() {
        $( "#todoList" ).sortable();
      } );
    

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
handleDrop();

$("#test").on('click', createTaskCard);
$("#pikap").click(fork);    