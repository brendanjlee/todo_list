// render task elements
const TaskView = () => {
  function createTaskElement(task) {
    const taskItemElem = document.createElement('div');
    taskItemElem.classList.add('taskItem');
    taskItemElem.setAttribute('id', task.taskId);

    const taskElemLeft = document.createElement('div');
    const taskElemRight = document.createElement('div');
    taskElemLeft.classList.add('taskItemLeft');
    taskElemRight.classList.add('taskItemRight');
    taskItemElem.appendChild(taskElemLeft);
    taskItemElem.appendChild(taskElemRight);

    // Left Item
    const taskCheckElem = document.createElement('input');
    taskCheckElem.setAttribute('type', 'checkbox');
    taskCheckElem.classList.add('taskCheck');
    taskElemLeft.appendChild(taskCheckElem);

    const taskContentElem = document.createElement('p');
    taskContentElem.classList.add('taskContent');
    taskContentElem.innerHTML = task.taskName;  // Input task name
    taskElemLeft.appendChild(taskContentElem);

    // Right Item
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'input-dueDate');
    dateLabel.innerHTML = 'Due Date';
    taskElemRight.appendChild(dateLabel);

    const calendar = document.createElement('input');
    calendar.setAttribute('type', 'date');
    calendar.setAttribute('id', 'input-dueDate');
    calendar.classList.add('input-dueDate');
    if (task.taskDueDate === 'none') calendar.setAttribute('value', '2024-01-06');
    else calendar.setAttribute('value', task.taskDueDate);
    taskElemRight.appendChild(calendar);

    // add taskName to id (task?)

    return taskItemElem;
  }

  return {
    createTaskElement
  }
}

export {TaskView}