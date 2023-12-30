import TaskItem from "./modules/taskItem";
import Project from "./modules/Project";
import { isToday, nextThursday } from "date-fns";
import TodoList from "./modules/TodoList";
import UI from "./modules/UI";

UI();



// const project = new Project('default');
// project.addTask(newtask1);
// project.addTask(newtask2);
// project.addTask(newtask3);

// console.log(project.getTasks())

// // date testing
// const date = document.getElementById('dateInput')
// date.addEventListener("change", function() {
//     var input = this.value;
//     newtask1.setDate(input);
//     project.sortTasksByDate();
//     console.log(project.getWeeklyTasks());
// })

// project.sortTasksByPrio();
// console.log(project.getTasks())

// TODO list testing
// const mylist = new TodoList();
// mylist.addProject('homework');
// mylist.addProject('projects');
// mylist.addProject('something');
// console.log(mylist);

// for (let i=0; i < 20; i++) {
//     let task = new TaskItem(`task${i}`);
//     if (i % 2 == 0) {
//         task.setDueDate(`2023-12-29`);
//         mylist.addTaskToProject('homework', task);
//     } else {
//         task.setDueDate('2023-11-29');
//         mylist.addTaskToProject('projects', task);
//     }
// }

// console.log(mylist.getAllTasks());

// let newtask = new TaskItem('newtask');
// newtask.setDueDate('2023-12-28');
// mylist.addTaskToProject('homework', newtask);
// console.log(mylist.getAllDailyTasks())
// console.log(mylist.getAllWeeklyTasks());

// console.log('testing deleting from project')
// mylist.deleteTaskFromProject('homework', 'task0');
// console.log(mylist.getProject('homework'));

// console.log('testing marking task from proj')
// mylist.markTaskFromProject('homework', 'newtask');
// console.log(mylist.getProject('homework'))
// mylist.markTaskFromProject('homework', 'newtask');
// console.log(mylist.getProject('homework'))

// console.log('testing update date')
// mylist.updateTaskDateFromProject('homework', 'newtask', '1999-08-26')
// console.log(mylist.getProject('homework'))

// console.log('testing updating prio')
// mylist.updateTaskPrioFromProject('homework', 'newtask', 2)
// console.log(mylist.getProject('homework'))
