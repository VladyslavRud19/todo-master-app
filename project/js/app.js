import { renderTasks, addTaskToUI } from './ui.js';
import { saveTasks, loadTasks } from './storage.js';

const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = loadTasks();

// Initial render
renderTasks(tasks, taskList);

// Add task
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const newTask = { text: taskText, completed: false };
  tasks.push(newTask);

  addTaskToUI(newTask, taskList);
  saveTasks(tasks);

  taskInput.value = '';
});

// Handle task actions
taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.dataset.index;
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks(tasks, taskList);
  } else if (e.target.tagName === 'LI') {
    const index = e.target.dataset.index;
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    renderTasks(tasks, taskList);
  }
});
