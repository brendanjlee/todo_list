import TodoList from "./TodoList";
import TaskItem from "./taskItem";

export default function UI() {
    // Globals
    const todoList = new TodoList();
    const ALLTASKS = 0;
    const DAILYTASKS = 1;
    const WEEKLYTASKS = 2;
    const currentTask = ALLTASKS;

    // constants
    const sidebarDiv = document.querySelector('.sidebar');
    const contentDiv = document.querySelector('.content');
    const projectForm = document.querySelector('#projectForm');
    const customProjDiv = document.querySelector('.customProjectsContainer');

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

    function loadCurrentTasks() {
        const tasks = [];
        if (currentTask == ALLTASKS) {
            tasks = todoList.getAllTasks();
            tasks.forEach(tasks => {
                const element = document.createElement('div');
                element.classList.add('tasks');
            });
        }
    }

    // sidebar
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

    function initListeners() {
        projectForm.addEventListener('submit', addProjectListener);
    }

    // Event Listeners
    function addProjectListener(event) {
        event.preventDefault();
        const newProjName = event.target.elements.projectInput.value;
        todoList.addProject(newProjName);
        console.log(todoList)
        projectForm.reset();
        customProjDiv.innerHTML = ''; // clear html
        loadProjects(); // load projects when new is added
    }

    // Init program
    function init() {
        loadDefaultTodoList();
        initListeners();
        loadProjects();
        loadCurrentTasks();
    }

    init();
}