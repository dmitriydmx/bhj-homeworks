let taskInput = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');
let tasksForm = document.getElementById('tasks__form');

function addTask(event) {
    event.preventDefault();
    const taskValue = taskInput.value.trim()    
    if (taskValue) {
        let task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        `;
        let removeButton = task.querySelector('.task__remove');
        removeButton.addEventListener('click', removeTask);

        tasksList.appendChild(task);
        taskInput.value = '';
    }
}

function removeTask(event) {
    event.preventDefault(); 
    let taskToRemove = this.closest('.task');
    taskToRemove.remove();
}
tasksForm.addEventListener('submit', addTask);

let savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
    tasksList.innerHTML = savedTasks;
}

let removeButtons = document.querySelectorAll('.task__remove');
for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeTask);
}
tasksList.addEventListener('DOMSubtreeModified', function () {
    localStorage.setItem('tasks', tasksList.innerHTML);
});
