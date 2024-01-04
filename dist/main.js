/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_taskItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/taskItem */ \"./src/modules/taskItem.js\");\n/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _modules_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/TodoList */ \"./src/modules/TodoList.js\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_UI__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\r\n\r\n// const project = new Project('default');\r\n// project.addTask(newtask1);\r\n// project.addTask(newtask2);\r\n// project.addTask(newtask3);\r\n\r\n// console.log(project.getTasks())\r\n\r\n// // date testing\r\n// const date = document.getElementById('dateInput')\r\n// date.addEventListener(\"change\", function() {\r\n//     var input = this.value;\r\n//     newtask1.setDate(input);\r\n//     project.sortTasksByDate();\r\n//     console.log(project.getWeeklyTasks());\r\n// })\r\n\r\n// project.sortTasksByPrio();\r\n// console.log(project.getTasks())\r\n\r\n// TODO list testing\r\n// const mylist = new TodoList();\r\n// mylist.addProject('homework');\r\n// mylist.addProject('projects');\r\n// mylist.addProject('something');\r\n// console.log(mylist);\r\n\r\n// for (let i=0; i < 20; i++) {\r\n//     let task = new TaskItem(`task${i}`);\r\n//     if (i % 2 == 0) {\r\n//         task.setDueDate(`2023-12-29`);\r\n//         mylist.addTaskToProject('homework', task);\r\n//     } else {\r\n//         task.setDueDate('2023-11-29');\r\n//         mylist.addTaskToProject('projects', task);\r\n//     }\r\n// }\r\n\r\n// console.log(mylist.getAllTasks());\r\n\r\n// let newtask = new TaskItem('newtask');\r\n// newtask.setDueDate('2023-12-28');\r\n// mylist.addTaskToProject('homework', newtask);\r\n// console.log(mylist.getAllDailyTasks())\r\n// console.log(mylist.getAllWeeklyTasks());\r\n\r\n// console.log('testing deleting from project')\r\n// mylist.deleteTaskFromProject('homework', 'task0');\r\n// console.log(mylist.getProject('homework'));\r\n\r\n// console.log('testing marking task from proj')\r\n// mylist.markTaskFromProject('homework', 'newtask');\r\n// console.log(mylist.getProject('homework'))\r\n// mylist.markTaskFromProject('homework', 'newtask');\r\n// console.log(mylist.getProject('homework'))\r\n\r\n// console.log('testing update date')\r\n// mylist.updateTaskDateFromProject('homework', 'newtask', '1999-08-26')\r\n// console.log(mylist.getProject('homework'))\r\n\r\n// console.log('testing updating prio')\r\n// mylist.updateTaskPrioFromProject('homework', 'newtask', 2)\r\n// console.log(mylist.getProject('homework'))\r\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/compareAsc.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/isToday.mjs\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/isThisWeek.mjs\");\n\r\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n\r\n    /**\r\n     * Returns the name of the project list\r\n     * @returns String - name of project\r\n     */\r\n    getName() {return this.name;}\r\n    setName(name) {this.name = name;}\r\n\r\n    // Return all tasks in an array\r\n    getTasks() {return this.tasks;}\r\n    \r\n    getTask(taskTitle) {\r\n        const taskIdx = this.getTaskIndex(taskTitle);\r\n        if (taskIdx == -1) return;\r\n        return this.tasks[taskIdx];\r\n    }\r\n\r\n    /**\r\n     * Returns the index of the task based on title\r\n     * @param {String} taskTitle title of task to retrieve index\r\n     * @returns index of the task\r\n     */\r\n    getTaskIndex(taskTitle) {\r\n        for (let i=0; i < this.tasks.length; i++) {\r\n            if (this.tasks[i].getTitle() === taskTitle) return i;\r\n        }\r\n        return -1;\r\n    }\r\n\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {String} taskTitle title of task to delete\r\n     * Deletes a singular task based on name\r\n     */\r\n    deleteTask(taskTitle) {\r\n        for (let i=0; i < this.tasks.length; i++) {\r\n            if (this.tasks[i].getTitle() === taskTitle) {\r\n                this.tasks.splice(i, 1);\r\n                break;\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Marks the task based on task title\r\n     * @param {String} taskTitle title of task to mark\r\n     */\r\n    markTask(taskTitle) {\r\n        const taskIdx = this.getTaskIndex(taskTitle);\r\n        if (taskIdx == -1) return;\r\n        this.tasks[taskIdx].markCompletion();\r\n    }\r\n\r\n    updateTaskDate(taskTitle, newDate) {\r\n        const taskIdx = this.getTaskIndex(taskTitle);\r\n        if (taskIdx == -1) return;\r\n        this.tasks[taskIdx].setDueDate(newDate);\r\n    }\r\n\r\n    updateTaskPrio(taskTitle, newPriority){\r\n        const taskIdx = this.getTaskIndex(taskTitle);\r\n        if (taskIdx == -1) return;\r\n        this.tasks[taskIdx].setPriority(newPriority);\r\n    }\r\n\r\n    // TODO: break tie with prio\r\n    sortTasksByDate() {\r\n        this.tasks.sort((a, b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.compareAsc)(a.getDueDate(), b.getDueDate()));\r\n    }\r\n\r\n    // TODO: break tie with date\r\n    sortTasksByPrio() {\r\n        this.tasks.sort((a,b) => b.getPriority() - a.getPriority());\r\n    }\r\n\r\n    getTodayTasks() {\r\n        return this.tasks.filter(task => {\r\n            return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isToday)(task.getDueDate());\r\n        });\r\n    }\r\n\r\n    getWeeklyTasks() {\r\n        return this.tasks.filter(task => {\r\n            return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isThisWeek)(task.getDueDate());\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://todo_list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _taskItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskItem */ \"./src/modules/taskItem.js\");\n\r\n\r\n\r\nconst DEFAULT_PROJ = 0;\r\n\r\nclass TodoList {\r\n    constructor() {\r\n        this.projects = []              // all todo lists\r\n        this.projectNames = new Set();  // set to track unique names\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {String} project to add to the TODO List\r\n     * Creates a new project item to add to the TODO list.\r\n     * Automatically numbers project if no name is provided. \r\n     */\r\n    addProject(projectName) {\r\n        if (!projectName) {\r\n            let projNumber = this.projects.length + 1;\r\n            projectName = `List${projNumber}`;\r\n        }\r\n\r\n        // avoid name clashing with set\r\n        let i = 1;\r\n        while (this.projectNames.has(projectName)) {\r\n            projectName = `${projectName}${i++}`;\r\n        }\r\n        this.projectNames.add(projectName);\r\n        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName));\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {String} projectName name of project to delete\r\n     */\r\n    deleteProject(projectName) {\r\n        let projIdx = this.getProjectIndex(projectName);\r\n        if (projIdx == -1) return;\r\n        this.projects.splice(projIdx, 1);\r\n        this.projectNames.delete(projectName);\r\n\r\n        // for (let i=0; i<this.projects.length; i++) {\r\n        //     if (this.projects[i].getName() === projectName) {\r\n        //         this.projects.splice(i, 1);\r\n        //         this.projectNames.delete(projectName);\r\n        //     }\r\n        // }\r\n    }\r\n\r\n    /**\r\n     * Returns the index of the project based on name\r\n     * @param {String} projectName name of project to search\r\n     * @returns index i if found, -1 if not found\r\n     */\r\n    getProjectIndex(projectName) {\r\n        for (let i=0; i < this.projects.length; i++) {\r\n            if (this.projects[i].getName() === projectName) return i;\r\n        }\r\n        return -1;  \r\n    }\r\n\r\n    /**\r\n     * Returns all tasks from all projects\r\n     * @returns an array of all tasks in the list. null if there are none\r\n     */\r\n    getAllTasks() {\r\n        if (this.projects.length == 0) return null;\r\n        let tasks = [];\r\n        this.projects.forEach(project => {\r\n            tasks = tasks.concat(project.tasks);\r\n        });\r\n        if (tasks.length == 0) return null;\r\n        return tasks;\r\n    }\r\n\r\n    getAllDailyTasks() {\r\n        let tasks = [];\r\n        this.projects.forEach(project => {\r\n            tasks = tasks.concat(project.getTodayTasks());\r\n        });\r\n        return tasks;\r\n    }\r\n\r\n    getAllWeeklyTasks() {\r\n        let tasks = [];\r\n        this.projects.forEach(project => {\r\n            tasks = tasks.concat(project.getWeeklyTasks());\r\n        });\r\n        return tasks;\r\n    }\r\n\r\n    /**\r\n     * Returns all projects in the current todolist\r\n     * @returns an array of Projects in the todo list\r\n     */\r\n    getAllProjects() {\r\n        return this.projects;\r\n    }\r\n\r\n    /**\r\n     * Returns a project from the list based on the name\r\n     * @param {String} projectName name of project to retrieve\r\n     * @returns Project if found. null otherwise \r\n     */\r\n    getProject(projectName) {\r\n        let projIdx = this.getProjectIndex(projectName);\r\n        if (projIdx == -1) return null;\r\n        return this.projects[projIdx];\r\n    }\r\n\r\n    /**\r\n     * Adds a new task to specified project\r\n     * @param {String} projectName name of project to add task to\r\n     * @param {TaskItem} task task name to add to project\r\n     */\r\n    addTaskToProject(projectName, task) {\r\n        let projIdx = this.getProjectIndex(projectName);\r\n        if (projIdx == -1) return;\r\n        this.projects[projIdx].addTask(task);\r\n    }\r\n\r\n    /**\r\n     * Deletes a task from specified project\r\n     * @param {String} projectName project name to delete task from\r\n     * @param {String} taskTitle task title to delete from project\r\n     */\r\n    deleteTaskFromProject(projectName, taskTitle) {\r\n        let projIdx = this.getProjectIndex(projectName);\r\n        if (projIdx == -1) return;\r\n        this.projects[projIdx].deleteTask(taskTitle);\r\n    }\r\n\r\n    /**\r\n     * Negates the completion flag of the task from project\r\n     * @param {String} projectName project name to mark task from\r\n     * @param {String} taskTitle task title to negate completion\r\n     */\r\n    markTaskFromProject(projectName, taskTitle) { \r\n        let projIdx = this.getProjectIndex(projectName);\r\n        if (projIdx == -1) return;\r\n        this.projects[projIdx].markTask(taskTitle);\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {String} projectName name of project where task is\r\n     * @param {String} taskTitle title of task to update\r\n     * @param {String} newDate new datestring yyyy-mm-dd\r\n     */\r\n    updateTaskDateFromProject(projectName, taskTitle, newDate) {\r\n        let projIdx = this.getProjectIndex(projectName);\r\n        if (projIdx == -1) return;\r\n        this.projects[projIdx].updateTaskDate(taskTitle, newDate);\r\n    }\r\n\r\n    updateTaskPrioFromProject(projectName, taskTitle, newPriority) {\r\n        let projIdx = this.getProjectIndex(projectName);\r\n        if (projIdx == -1) return;\r\n        this.projects[projIdx].updateTaskPrio(taskTitle, newPriority);\r\n    }\r\n}\n\n//# sourceURL=webpack://todo_list/./src/modules/TodoList.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/modules/TodoList.js\");\n/* harmony import */ var _taskItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskItem */ \"./src/modules/taskItem.js\");\n\r\n\r\n\r\nfunction UI() {\r\n    // Globals\r\n    const todoList = new _TodoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    const ALLTASKS = 0;\r\n    const DAILYTASKS = 1;\r\n    const WEEKLYTASKS = 2;\r\n    const currentTask = ALLTASKS;\r\n\r\n    // constants\r\n    const sidebarDiv = document.querySelector('.sidebar');\r\n    const contentDiv = document.querySelector('.content');\r\n    const projectForm = document.querySelector('#projectForm');\r\n    const customProjDiv = document.querySelector('.customProjectsContainer');\r\n\r\n    // For loading test\r\n    function loadDefaultTodoList() {\r\n        const task1 = new _taskItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Do homework');\r\n        const task2 = new _taskItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Laundry');\r\n        const task3 = new _taskItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Throw out trash') \r\n        task1.setDueDate('2023-12-30')\r\n        task2.setDueDate('2023-12-30')\r\n        task3.setDueDate('2023-12-29')\r\n        todoList.addProject('Default');\r\n        todoList.addTaskToProject('Default', task1);\r\n        todoList.addTaskToProject('Default', task2);\r\n        todoList.addTaskToProject('Default', task3);\r\n    }\r\n\r\n    function loadCurrentTasks() {\r\n        const tasks = [];\r\n        if (currentTask == ALLTASKS) {\r\n            tasks = todoList.getAllTasks();\r\n            tasks.forEach(tasks => {\r\n                const element = document.createElement('div');\r\n                element.classList.add('tasks');\r\n            });\r\n        }\r\n    }\r\n\r\n    // sidebar\r\n    function loadProjects() {\r\n        // get all projects from current list\r\n        // clear the projects dom and then load\r\n        const projects = todoList.getAllProjects()\r\n        projects.forEach(project => {\r\n            const projectName = project.getName();\r\n            const btn = document.createElement('button');\r\n            btn.classList.add('nav-btn');\r\n            btn.textContent = projectName;\r\n            customProjDiv.appendChild(btn);\r\n        });\r\n    }\r\n\r\n    function initListeners() {\r\n        projectForm.addEventListener('submit', addProjectListener);\r\n    }\r\n\r\n    // Event Listeners\r\n    function addProjectListener(event) {\r\n        event.preventDefault();\r\n        const newProjName = event.target.elements.projectInput.value;\r\n        todoList.addProject(newProjName);\r\n        console.log(todoList)\r\n        projectForm.reset();\r\n        customProjDiv.innerHTML = ''; // clear html\r\n        loadProjects(); // load projects when new is added\r\n    }\r\n\r\n    // Init program\r\n    function init() {\r\n        loadDefaultTodoList();\r\n        initListeners();\r\n        loadProjects();\r\n        loadCurrentTasks();\r\n    }\r\n\r\n    init();\r\n}\n\n//# sourceURL=webpack://todo_list/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/taskItem.js":
/*!*********************************!*\
  !*** ./src/modules/taskItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskItem)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/toDate.mjs\");\n\r\n\r\nclass TaskItem {\r\n    constructor(title, desc=\"\", dueDate=\"No Date\", priority=1, completed=false) {\r\n        this.title = title,\r\n        this.desc = desc,\r\n        this.dueDate = dueDate,     // yyyy-mm-dd: store as date from Project\r\n        this.priority = priority,   // 1 - lowest, 2, 3 - highest\r\n        this.completed = completed\r\n    }\r\n\r\n    getTitle() { return this.title; }\r\n    setTitle(newTitle) { this.title = newTitle; }\r\n\r\n    getDesc() { return this.desc; }\r\n    setDesc(newDesc) { this.desc = newDesc; }\r\n\r\n    getDueDate() { return this.dueDate; }  // yyyy-mm-dd\r\n    getFormattedDate() {    // formatted DATE fns\r\n        const dateString = this.dueDate.split('-');\r\n        return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.toDate)(new Date(dateString[0], dateString[1], dateString[2]));\r\n    }\r\n    /**\r\n     * Sets a new due date  \r\n     * @param {String} newDate yyyy-mm-dd\r\n     */\r\n    setDueDate(newDate) { this.dueDate = newDate; }\r\n\r\n    getPriority() { return this.priority; }\r\n    setPriority(newPriority) { this.priority = newPriority; }\r\n\r\n    /**\r\n     * @returns boolean flag for completion\r\n     */\r\n    getCompletion() {return this.completed; }\r\n\r\n    /**\r\n     * Negates the completion flag of the task\r\n     */\r\n    markCompletion() { this.completed = !this.completed; }\r\n}\n\n//# sourceURL=webpack://todo_list/./src/modules/taskItem.js?");

/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nlet defaultOptions = {};\n\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\n\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n\n//# sourceURL=webpack://todo_list/./node_modules/date-fns/_lib/defaultOptions.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/compareAsc.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compareAsc: () => (/* binding */ compareAsc),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The first date to compare\n * @param dateRight - The second date to compare\n *\n * @returns The result of the comparison\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\nfunction compareAsc(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const diff = _dateLeft.getTime() - _dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1;\n    // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);\n\n\n//# sourceURL=webpack://todo_list/./node_modules/date-fns/compareAsc.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isSameDay: () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ \"./node_modules/date-fns/startOfDay.mjs\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The first date to check\n * @param dateRight - The second date to check\n\n * @returns The dates are in the same day (and year and month)\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\nfunction isSameDay(dateLeft, dateRight) {\n  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);\n  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);\n\n  return +dateLeftStartOfDay === +dateRightStartOfDay;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);\n\n\n//# sourceURL=webpack://todo_list/./node_modules/date-fns/isSameDay.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/isSameWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isSameWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isSameWeek: () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ \"./node_modules/date-fns/startOfWeek.mjs\");\n\n\n/**\n * The {@link isSameWeek} function options.\n */\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The first date to check\n * @param dateRight - The second date to check\n * @param options - An object with options\n *\n * @returns The dates are in the same week (and month and year)\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n *\n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dateLeft, dateRight, options) {\n  const dateLeftStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateLeft, options);\n  const dateRightStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateRight, options);\n\n  return +dateLeftStartOfWeek === +dateRightStartOfWeek;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameWeek);\n\n\n//# sourceURL=webpack://todo_list/./node_modules/date-fns/isSameWeek.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/isThisWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isThisWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isThisWeek: () => (/* binding */ isThisWeek)\n/* harmony export */ });\n/* harmony import */ var _isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameWeek.mjs */ \"./node_modules/date-fns/isSameWeek.mjs\");\n\n\n/**\n * The {@link isThisWeek} function options.\n */\n\n/**\n * @name isThisWeek\n * @category Week Helpers\n * @summary Is the given date in the same week as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same week as the current date?\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to check\n * @param options - The object with options\n *\n * @returns The date is in this week\n *\n * @example\n * // If today is 25 September 2014, is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21))\n * //=> true\n *\n * @example\n * // If today is 25 September 2014 and week starts with Monday\n * // is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })\n * //=> false\n */\nfunction isThisWeek(date, options) {\n  return (0,_isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)(date, Date.now(), options);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisWeek);\n\n\n//# sourceURL=webpack://todo_list/./node_modules/date-fns/isThisWeek.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isToday: () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ \"./node_modules/date-fns/isSameDay.mjs\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to check\n *\n * @returns The date is today\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * const result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\nfunction isToday(date) {\n  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);\n\n\n//# sourceURL=webpack://todo_list/./node_modules/date-fns/isToday.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfDay: () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n *\n * @returns The start of a day\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  _date.setHours(0, 0, 0, 0);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);\n\n\n//# sourceURL=webpack://todo_list/./node_modules/date-fns/startOfDay.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ \"./node_modules/date-fns/_lib/defaultOptions.mjs\");\n\n\n\n/**\n * The {@link startOfWeek} function options.\n */\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n * @param options - An object with options\n *\n * @returns The start of a week\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfWeek(date, options) {\n  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();\n  const weekStartsOn =\n    options?.weekStartsOn ??\n    options?.locale?.options?.weekStartsOn ??\n    defaultOptions.weekStartsOn ??\n    defaultOptions.locale?.options?.weekStartsOn ??\n    0;\n\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);\n  const day = _date.getDay();\n  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n\n  _date.setDate(_date.getDate() - diff);\n  _date.setHours(0, 0, 0, 0);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);\n\n\n//# sourceURL=webpack://todo_list/./node_modules/date-fns/startOfWeek.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  const argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (\n    argument instanceof Date ||\n    (typeof argument === \"object\" && argStr === \"[object Date]\")\n  ) {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new argument.constructor(+argument);\n  } else if (\n    typeof argument === \"number\" ||\n    argStr === \"[object Number]\" ||\n    typeof argument === \"string\" ||\n    argStr === \"[object String]\"\n  ) {\n    // TODO: Can we get rid of as?\n    return new Date(argument);\n  } else {\n    // TODO: Can we get rid of as?\n    return new Date(NaN);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack://todo_list/./node_modules/date-fns/toDate.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;