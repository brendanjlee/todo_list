import TaskItem from "./modules/taskItem";
import Project from "./modules/Project";
import { isToday } from "date-fns";

let newtask1 = new TaskItem('joe');
newtask1.setDate('2023-12-10');
let newtask2 = new TaskItem('zoe');
newtask2.setDate('2023-12-28');
let newtask3 = new TaskItem('goe');
newtask3.setDate('1999-12-9');
newtask3.setPriority(3);

const project = new Project('default');
project.addTask(newtask1);
project.addTask(newtask2);
project.addTask(newtask3);

console.log(project.getTasks())

// date testing
const date = document.getElementById('dateInput')
date.addEventListener("change", function() {
    var input = this.value;
    newtask1.setDate(input);
    project.sortTasksByDate();
    console.log(project.getWeeklyTasks());
})

project.sortTasksByPrio();
console.log(project.getTasks())
