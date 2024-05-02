// Retrieve tasks and nextId from localStorage
$(document).ready(function () {
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
console.log(taskList);
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


// Todo: create a function to create a task card

const submitButton = document.getElementById('submit');

function createTaskCard(task,date,description) {
    
    const singleTask = {
        taskTitle: task,
        dateDate: date,
        taskDescription: description,
        taskId: randomId()
    };

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(singleTask);

    // sets values of the oject in local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

};

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    const taskTitle = document.getElementById('title').value;
    const dateDate = document.getElementById('date').value;
    const taskDescription = document.getElementById('description').value;

    // if task list form has no content in it, function alerts user to add a task
    if (taskTitle === '' || dateDate === '' || taskDescription === '') {
        window.alert("Add task");

        return;
    };
    createTaskCard(taskTitle, dateDate, taskDescription);

    renderTaskList();
});

    function renderTaskList() {
    // Todo: create a function to render the task list and make cards draggable
    const taskContainer = document.getElementById('todo-cards');
        let taskList = JSON.parse(localStorage.getItem("tasks")) || [];


    // this clears the task list of any existing content
    taskContainer.innerHTML = '';

    // loop for rendering task card
    taskList.forEach(task => {
        const taskCard = $('<div class="task-card"></div>');
        const letterId = $('<h6></h6>').text(task.taskId);
        const taskTitle = $('<h2></h2>').text(task.taskTitle);
        const dateDate = $('<h3></h3>').text(task.taskDescription);
        const taskDescription = $('<p></p>').text(task.dateDate);
        const deleteBtn = $('<button>Delete Task</button>');

        taskCard.append(letterId, taskTitle, dateDate, taskDescription, deleteBtn);
        $('#todo-cards').append(taskCard);

        // Make task card draggable
        taskCard.draggable();
    });
}


// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
// $(document).ready(function () {
   

    // });
    renderTaskList()
});
