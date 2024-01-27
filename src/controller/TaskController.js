import { Task } from "../models/Task";

const TaskController = () => {
  function getActiveProject() {
    // get the acitve project
    const activeProjId = document.querySelector('.active').id;
    return JSON.parse(window.localStorage.getItem(activeProjId));
  }

  function createTask(name, dueDate, prio) {
    let project = getActiveProject();
    console.log(project)
    let task = Task(name, dueDate, prio);
    project.tasks.push(task);

    window.localStorage.setItem(project.projId, JSON.stringify(project));
  }

  function deleteTask(name) {
    let project = getActiveProject();
    let taskIndex = project.tasks.findIndex( x => x.taskName === name);
    project.tasks.splice(taskIndex, 1);

    window.localStorage.setItem(project.projId, JSON.stringify(project));
  }

  return {
    createTask,
    deleteTask
  }
}

export { TaskController };

