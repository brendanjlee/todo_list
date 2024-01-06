export default function Components() {
  function createTaskElem(taskItem) {
    // Div Creation
    const taskElem = document.createElement('div');
    taskElem.classList.add('task-item');

    const taskItemLeft = document.createElement('div');
    const taskItemRight = document.createElement('div');
    taskItemLeft.classList.add('task-item-left');
    taskItemRight.classList.add('task-item-right');

    taskElem.appendChild(taskItemLeft);
    taskElem.appendChild(taskItemRight);

    // Left Div Items
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('name', 'taskCheck');
    checkBox.classList.add('taskCheck');
    const taskContent = document.createElement('p');
    taskContent.innerHTML = taskItem.getTitle();

    taskItemLeft.appendChild(checkBox);
    taskItemLeft.appendChild(taskContent);

    // Right Div Items
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.id = 'input-dueDate';
    if (taskItem.getDueDate() !== 'No Date') {
      dateInput.setAttribute('value', taskItem.getDueDate());
    }
    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'input-dueDate';
    dateLabel.innerHTML = 'Due Date';

    taskItemRight.appendChild(dateLabel);
    taskItemRight.appendChild(dateInput);

    return taskElem;
  }
}