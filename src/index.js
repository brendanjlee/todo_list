import { Task } from "./models/Task";
import { TaskView } from "./views/taskView";
import { ProjectView } from "./views/projectView";
import { Project } from "./models/Project";
import { ProjectController } from "./controller/ProjectController";
import { TaskController } from "./controller/TaskController";

const projectBtn = document.querySelector('.createProjectBtn'); 
projectBtn.addEventListener('click', () => {
  let person = prompt('name: ')
})

const taskList = document.querySelector('.tasklist')

let task = Task('garbage');

const taskView = TaskView();

let activeTask = taskView.createTaskElement(task)
taskList.appendChild(activeTask)
taskList.appendChild(taskView.createTaskElement(Task('laundry')))
taskList.appendChild(taskView.createTaskElement(Task('other')))

const projectView = ProjectView();

const projContainer = document.querySelector('.projectsContainer');
const newProject = Project('Chores');
const projbtn = projectView.createProjectElement(newProject);
projbtn.classList.add('active');
projContainer.appendChild(projbtn);

// controller
const projectController = ProjectController();
const taskController = TaskController();