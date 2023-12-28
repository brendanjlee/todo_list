import { toDate, isToday, isThisWeek, subDays, compareAsc, compareDesc } from "date-fns";

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() {return this.name;}
    setName(name) {this.name = name;}

    // Return all tasks in an array
    getTasks() {return this.tasks;}
    
    getTask(taskTitle) {
        return this.tasks.find((task) => task.getTitle() === taskTitle);
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(taskTitle) {
        for (let i=0; i < this.tasks.length; i++) {
            if (this.tasks[i].getTitle() === taskTitle) {
                this.tasks.splice(i, 1);
                break;
            }
        }
    }

    // TODO: break tie with prio
    sortTasksByDate() {
        this.tasks.sort((a, b) => compareAsc(a.getDate(), b.getDate()));
    }

    // TODO: break tie with date
    sortTasksByPrio() {
        this.tasks.sort((a,b) => b.priority - a.priority);
    }

    getTodayTasks() {
        return this.tasks.filter(task => {
            return isToday(task.getDate());
        });
    }

    getWeeklyTasks() {
        return this.tasks.filter(task => {
            return isThisWeek(task.getDate());
        });
    }
}