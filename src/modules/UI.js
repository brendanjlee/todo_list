import TodoList from "./TodoList";
import TaskItem from "./taskItem";

export default function UI() {
    // Globals
    const todoList = new TodoList();

    // For loading test
    function loadDefaultTodoList() {
        const task1 = new TaskItem('Do homework');
        const task2 = new TaskItem('Laundry');
        const task3 = new TaskItem('Throw out trash') 
        task1.setDueDate('2023-12-30')
        task2.setDueDate('2023-12-30')
        task3.setDueDate('2023-12-29')
        todoList.addProject('Default');
        todoList.addTaskToProject('Default', task1);
        todoList.addTaskToProject('Default', task2);
        todoList.addTaskToProject('Default', task3);
    }

    // constants
    const sidebarDiv = document.querySelector('.sidebar');
    const contentDiv = document.querySelector('.content');
    const projectForm = document.querySelector('#projectForm');
    const customProjDiv = document.querySelector('.customProjectsContainer');

    function generateProjectBtn(projectName) {
        const projectElem = document.createElement('button');
    }

    function loadProjects() {
        // get all projects from current list
        // clear the projects dom and then load
        const projects = todoList.getAllProjects()
        projects.forEach(project => {
            const projectName = project.getName();
            const btn = document.createElement('button');
            btn.classList.add('nav-btn');
            btn.textContent = projectName;
            customProjDiv.appendChild(btn);
        });
    }
}