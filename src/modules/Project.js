import { toDate, isToday, isThisWeek, subDays, compareAsc, compareDesc } from "date-fns";

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    /**
     * Returns the name of the project list
     * @returns String - name of project
     */
    getName() {return this.name;}
    setName(name) {this.name = name;}

    // Return all tasks in an array
    getTasks() {return this.tasks;}
    
    getTask(taskTitle) {
        const taskIdx = this.getTaskIndex(taskTitle);
        if (taskIdx == -1) return;
        return this.tasks[taskIdx];
    }

    /**
     * Returns the index of the task based on title
     * @param {String} taskTitle title of task to retrieve index
     * @returns index of the task
     */
    getTaskIndex(taskTitle) {
        for (let i=0; i < this.tasks.length; i++) {
            if (this.tasks[i].getTitle() === taskTitle) return i;
        }
        return -1;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    /**
     * 
     * @param {String} taskTitle title of task to delete
     * Deletes a singular task based on name
     */
    deleteTask(taskTitle) {
        for (let i=0; i < this.tasks.length; i++) {
            if (this.tasks[i].getTitle() === taskTitle) {
                this.tasks.splice(i, 1);
                break;
            }
        }
    }

    /**
     * Marks the task based on task title
     * @param {String} taskTitle title of task to mark
     */
    markTask(taskTitle) {
        const taskIdx = this.getTaskIndex(taskTitle);
        if (taskIdx == -1) return;
        this.tasks[taskIdx].markCompletion();
    }

    updateTaskDate(taskTitle, newDate) {
        const taskIdx = this.getTaskIndex(taskTitle);
        if (taskIdx == -1) return;
        this.tasks[taskIdx].setDueDate(newDate);
    }

    updateTaskPrio(taskTitle, newPriority){
        const taskIdx = this.getTaskIndex(taskTitle);
        if (taskIdx == -1) return;
        this.tasks[taskIdx].setPriority(newPriority);
    }

    // TODO: break tie with prio
    sortTasksByDate() {
        this.tasks.sort((a, b) => compareAsc(a.getDueDate(), b.getDueDate()));
    }

    // TODO: break tie with date
    sortTasksByPrio() {
        this.tasks.sort((a,b) => b.getPriority() - a.getPriority());
    }

    getTodayTasks() {
        return this.tasks.filter(task => {
            return isToday(task.getDueDate());
        });
    }

    getWeeklyTasks() {
        return this.tasks.filter(task => {
            return isThisWeek(task.getDueDate());
        });
    }
}