export function renderTasks(tasks, container) {
    container.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task.text;
      li.dataset.index = index;
      if (task.completed) li.classList.add('completed');
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.dataset.index = index;
  
      li.appendChild(deleteBtn);
      container.appendChild(li);
    });
  }
  
  export function addTaskToUI(task, container) {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) li.classList.add('completed');
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    container.appendChild(li);
  }
  