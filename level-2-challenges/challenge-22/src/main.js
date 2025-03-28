export let tasks = [];

export function addTask(task, priority) {
  // Add a new task and render the updated list
  console.log(task, priority);
  const taskObj = {
    id: Date.now(),
    task,
    priority,
    createdAt: new Date(),
  };
  tasks.push(taskObj);
  renderTasks();
}

export function deleteTask(taskId) {
  // Remove the task with the given ID and render the updated list
  tasks = tasks.filter((t) => t.id !== taskId);
  renderTasks();
}

export function filterTasks(priority) {
  // return filtered tasks
  console.log('Filter changed');
  return priority === 'all'
    ? tasks
    : tasks.filter((t) => t.priority === priority);
}

export function sortTasks(tasks, sortBy) {
  // return sorted tasks
  console.log('Sort changed');
  if (sortBy === 'priority') {
    const priorities = { high: 3, medium: 2, low: 1 };
    return tasks.sort(
      (current, next) =>
        priorities[next.priority] - priorities[current.priority]
    );
  } else if (sortBy === 'time') {
    return tasks.sort((current, next) => current[sortBy] - next[sortBy]);
  }
  return tasks;
}

// Expects a task object
export function createTaskElement(task) {
  const li = document.createElement('li');

  li.className = `priority-${task.priority}`;
  li.innerHTML = `
    <span>${task.task}</span>
    <span class="priority-label">${task.priority}</span>
    <button class="delete-btn" data-id="${task.id}">Delete</button>
  `;
  return li;
}

export function renderTasks() {
  const taskList = document.getElementById('task-list');
  const filterSelect = document.getElementById('filter-select');
  const sortSelect = document.getElementById('sort-select');

  const liFragments = new DocumentFragment();
  taskList.innerHTML = '';
  let tasksToRender = tasks;
  if (filterSelect.value) {
    tasksToRender = filterTasks(filterSelect.value);
  }
  if (sortSelect.value) {
    tasksToRender = sortTasks(tasksToRender, sortSelect.value);
  }

  tasksToRender.forEach((task) => {
    const taskEl = createTaskElement(task);
    const deleteBtn = taskEl.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      const taskId = parseInt(deleteBtn.getAttribute('data-id'));
      deleteTask(taskId);
    });
    liFragments.append(taskEl);
  });
  taskList.append(liFragments);
}

export function main() {
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const prioritySelect = document.getElementById('priority-select');
  const filterSelect = document.getElementById('filter-select');
  const sortSelect = document.getElementById('sort-select');
  // Add event listeners and handle task addition, filtering, and sorting here
  addTaskBtn.addEventListener('click', () => {
    const taskValue = taskInput.value.trim();
    if (!taskValue) {
      return;
    }

    addTask(taskValue, prioritySelect.value);
    taskInput.value = '';
  });
  filterSelect.addEventListener('change', () => {
    renderTasks();
  });
  sortSelect.addEventListener('change', () => {
    renderTasks();
  });
  renderTasks();
}
