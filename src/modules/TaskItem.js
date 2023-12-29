import { toDate } from "date-fns";

export default class TaskItem {
    constructor(title, desc="", dueDate="No Date", priority=1, completed=false) {
        this.title = title,
        this.desc = desc,
        this.dueDate = dueDate,     // yyyy-mm-dd: store as date from Project
        this.priority = priority,   // 1 - lowest, 2, 3 - highest
        this.completed = completed
    }

    getTitle() { return this.title; }
    setTitle(newTitle) { this.title = newTitle; }

    getDesc() { return this.desc; }
    setDesc(newDesc) { this.desc = newDesc; }

    getDueDate() { return this.dueDate; }  // yyyy-mm-dd
    getFormattedDate() {    // formatted DATE fns
        const dateString = this.dueDate.split('-');
        return toDate(new Date(dateString[0], dateString[1], dateString[2]));
    }
    /**
     * Sets a new due date  
     * @param {String} newDate yyyy-mm-dd
     */
    setDueDate(newDate) { this.dueDate = newDate; }

    getPriority() { return this.priority; }
    setPriority(newPriority) { this.priority = newPriority; }

    /**
     * @returns boolean flag for completion
     */
    getCompletion() {return this.completed; }

    /**
     * Negates the completion flag of the task
     */
    markCompletion() { this.completed = !this.completed; }
}