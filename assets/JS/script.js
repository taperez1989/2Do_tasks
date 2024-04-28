// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTaskBtnEl = document.querySelector('.addTask');
// Todo: create a function to generate a unique task id
function generateTaskId() {
    const randomNumber = Math.floor(Math.random() * 26);

    const randomLetters = String.fromCharCode(65 + randomNumber);

    return randomLetters;
  
};

function randomId() {
    let letterId = '';
    for (let i = 0; i < 4; i++) {
        letterId += generateTaskId();
    }
    return letterId;
};

addTaskBtnEl.addEventListener('click', function () {
    const newLetterId = randomId();
    console.log(newLetterId);
});

console.log(randomId);


// Todo: create a function to create a task card
const title = document.querySelector('.title');
const date = document.querySelector('.date');
const description = document.querySelector('.description');
const submitTask = document.querySelector('.submit');

function createTaskCard() {
    let task = {
        taskTitle: title.value,
        dateDate: date.value,
        taskDescription: description.value,
        taskId: randomId()
    };
localStorage.setItem('task', JSON.stringify(task))
}

submitTask.addEventListener('click', function (event) {
    event.preventDefault();

    console.log("submitTask");
    createTaskCard();
})
// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
   
    let random = randomId();

    console.log(random);
});
