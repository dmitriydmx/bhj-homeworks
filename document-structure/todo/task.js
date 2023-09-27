let taskInput = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');
let tasksForm = document.getElementById('tasks__form');

let tasksArray = [];

function addTask(event) {
    event.preventDefault();

    const taskValue = taskInput.value.trim()
    
    if (taskValue) {
        tasksArray.push(taskValue);
        updateTasks();
        taskInput.value = '';
    }
}

function removeTask(event) {
    event.preventDefault();
    let taskIndex = Array.from(tasksList.children).indexOf(this.closest('.task'));
    tasksArray.splice(taskIndex, 1);
    updateTasks();
}

function updateTasks() {
    tasksList.innerHTML = '';
    for (let i = 0; i < tasksArray.length; i++) {
        let task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
            <div class="task__title">
                ${tasksArray[i]}
            </div>
            <a href="#" class="task__remove">&times;</a>`
        ;
        let removeButton = task.querySelector('.task__remove');
        removeButton.addEventListener('click', removeTask);

        tasksList.appendChild(task);
    }
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

tasksForm.addEventListener('submit', addTask);

let savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
    tasksArray = JSON.parse(savedTasks);
    updateTasks();
}
