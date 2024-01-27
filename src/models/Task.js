const Task = (name, dueDate='none', priority=1) => {
  let taskName = name;
  let taskDueDate = dueDate;
  let taskPrio = priority;
  let isComplete = false;
  const taskId = Math.floor(Date.now() * Math.random());

  return {
    taskName, taskDueDate, taskPrio, isComplete, taskId
  };
};

export { Task };
