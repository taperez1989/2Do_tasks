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

// creates a random lettered ID for the task cards
function randomId() {
    let letterId = '';
    for (let i = 0; i < 4; i++) {
        letterId += generateTaskId();
    }
    return letterId;
};

// created click event for the random ID


addTaskBtnEl.addEventListener('click', function () {
    const newLetterId = randomId();
    const modalContainer = document.querySelector('modal-container');
    modalContainer.classList.add('modal-container');

    console.log(newLetterId);
});

// console.log(randomId);


// Todo: create a function to create a task card

const submitTask = document.getElementById('submit');

function createTaskCard() {
    const tasks = {
        taskTitle: title.value,
        dateDate: date.value,
        taskDescription: description.value,
        taskId: randomId()
    };

    const task = JSON.parse(localStorage.getItem("tasks")) || [];

    task.push(tasks);

    // sets values of the oject in local storage
    localStorage.setItem('task', JSON.stringify(tasks));

};

submitTask.addEventListener('click', function (event) {
    event.preventDefault();

    const taskTitle = document.getElementById('title').value;
    const dateDate = document.getElementById('date').value;
    const taskDescription = document.getElementById('description').value;

    // if task list form has no content in it, function alerts user to add a task
    if (taskTitle === '' || dateDate === '' || taskDescription === '') {
        window.alert("Add task");

        return;
    };

    createTaskCard();
});


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const taskList = document.getElementById('todo-cards');
    // let taskList = JSON.parse(localStorage.getItem("tasks"));


    // this clears the task list of any existing content
    taskList.innerHTML = '';

    tasks.forEach(tasks => {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        taskCard.textContent = tasks.tasks;

        taskList.appendChild(taskCard);
    });

    renderTaskList();
};
console.log(renderTaskList);

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
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

    // console.log(random);
});
