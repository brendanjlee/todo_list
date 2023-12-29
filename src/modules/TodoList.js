import Project from "./Project";
import TaskItem from "./taskItem";

const DEFAULT_PROJ = 0;

export default class TodoList {
    constructor() {
        this.projects = []              // all todo lists
        this.projectNames = new Set();  // set to track unique names
    }

    /**
     * 
     * @param {String} project to add to the TODO List
     * Creates a new project item to add to the TODO list.
     * Automatically numbers project if no name is provided. 
     */
    addProject(projectName) {
        if (!projectName) {
            let projNumber = this.projects.length + 1;
            projectName = `List${projNumber}`;
        }

        // avoid name clashing with set
        let i = 1;
        while (this.projectNames.has(projectName)) {
            projectName = `${projectName}${i++}`;
        }
        this.projectNames.add(projectName);
        this.projects.push(new Project(projectName));
    }

    /**
     * 
     * @param {String} projectName name of project to delete
     */
    deleteProject(projectName) {
        let projIdx = this.getProjectIndex(projectName);
        if (projIdx == -1) return;
        this.projects.splice(projIdx, 1);
        this.projectNames.delete(projectName);

        // for (let i=0; i<this.projects.length; i++) {
        //     if (this.projects[i].getName() === projectName) {
        //         this.projects.splice(i, 1);
        //         this.projectNames.delete(projectName);
        //     }
        // }
    }

    /**
     * Returns the index of the project based on name
     * @param {String} projectName name of project to search
     * @returns index i if found, -1 if not found
     */
    getProjectIndex(projectName) {
        for (let i=0; i < this.projects.length; i++) {
            if (this.projects[i].getName() === projectName) return i;
        }
        return -1;  
    }

    /**
     * Returns all tasks from all projects
     * @returns an array of all tasks in the list. null if there are none
     */
    getAllTasks() {
        if (this.projects.length == 0) return null;
        let tasks = [];
        this.projects.forEach(project => {
            tasks = tasks.concat(project.tasks);
        });
        if (tasks.length == 0) return null;
        return tasks;
    }

    getAllDailyTasks() {
        let tasks = [];
        this.projects.forEach(project => {
            tasks = tasks.concat(project.getTodayTasks());
        });
        return tasks;
    }

    getAllWeeklyTasks() {
        let tasks = [];
        this.projects.forEach(project => {
            tasks = tasks.concat(project.getWeeklyTasks());
        });
        return tasks;
    }

    /**
     * Returns a project from the list based on the name
     * @param {String} projectName name of project to retrieve
     * @returns Project if found. null otherwise 
     */
    getProject(projectName) {
        let projIdx = this.getProjectIndex(projectName);
        if (projIdx == -1) return null;
        return this.projects[projIdx];
    }

    /**
     * Adds a new task to specified project
     * @param {String} projectName name of project to add task to
     * @param {TaskItem} task task name to add to project
     */
    addTaskToProject(projectName, task) {
        let projIdx = this.getProjectIndex(projectName);
        if (projIdx == -1) return;
        this.projects[projIdx].addTask(task);
    }

    /**
     * Deletes a task from specified project
     * @param {String} projectName project name to delete task from
     * @param {String} taskTitle task title to delete from project
     */
    deleteTaskFromProject(projectName, taskTitle) {
        let projIdx = this.getProjectIndex(projectName);
        if (projIdx == -1) return;
        this.projects[projIdx].deleteTask(taskTitle);
    }

    /**
     * Negates the completion flag of the task from project
     * @param {String} projectName project name to mark task from
     * @param {String} taskTitle task title to negate completion
     */
    markTaskFromProject(projectName, taskTitle) { 
        let projIdx = this.getProjectIndex(projectName);
        if (projIdx == -1) return;
        this.projects[projIdx].markTask(taskTitle);
    }

    /**
     * 
     * @param {String} projectName name of project where task is
     * @param {String} taskTitle title of task to update
     * @param {String} newDate new datestring yyyy-mm-dd
     */
    updateTaskDateFromProject(projectName, taskTitle, newDate) {
        let projIdx = this.getProjectIndex(projectName);
        if (projIdx == -1) return;
        this.projects[projIdx].updateTaskDate(taskTitle, newDate);
    }

    updateTaskPrioFromProject(projectName, taskTitle, newPriority) {
        let projIdx = this.getProjectIndex(projectName);
        if (projIdx == -1) return;
        this.projects[projIdx].updateTaskPrio(taskTitle, newPriority);
    }
}