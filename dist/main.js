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

/***/ "./src/controller/ProjectController.js":
/*!*********************************************!*\
  !*** ./src/controller/ProjectController.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectController: () => (/* binding */ ProjectController)\n/* harmony export */ });\n/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Project */ \"./src/models/Project.js\");\n\n\nconst ProjectController = () => {\n  // create project and store in local\n  function createProject(project) {\n    //let project = Project(projectName);\n    window.localStorage.setItem(project.projId, JSON.stringify(project));\n  }\n\n  function deleteProject(projId) {\n    window.localStorage.removeItem(projId);\n  }\n\n  return {\n    createProject,\n    deleteProject\n  }\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/controller/ProjectController.js?");

/***/ }),

/***/ "./src/controller/TaskController.js":
/*!******************************************!*\
  !*** ./src/controller/TaskController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskController: () => (/* binding */ TaskController)\n/* harmony export */ });\n/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Task */ \"./src/models/Task.js\");\n\n\nconst TaskController = () => {\n  function getActiveProject() {\n    // get the acitve project\n    const activeProjId = document.querySelector('.active').id;\n    console.log(activeProjId)\n    return JSON.parse(window.localStorage.getItem(activeProjId));\n  }\n\n  function createTask(name, dueDate, prio) {\n    let project = getActiveProject();\n    console.log(project)\n    let task = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__.Task)(name, dueDate, prio);\n    project.tasks.push(task);\n\n    window.localStorage.setItem(project.projId, JSON.stringify(project));\n  }\n\n  function deleteTask(name) {\n    let project = getActiveProject();\n    let taskIndex = project.tasks.findIndex( x => x.taskName === name);\n    project.tasks.splice(taskIndex, 1);\n\n    window.localStorage.setItem(project.projId, JSON.stringify(project));\n  }\n\n  return {\n    createTask,\n    deleteTask\n  }\n}\n\n\n\n\n\n//# sourceURL=webpack://todo_list/./src/controller/TaskController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Task */ \"./src/models/Task.js\");\n/* harmony import */ var _views_taskView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/taskView */ \"./src/views/taskView.js\");\n/* harmony import */ var _views_projectView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/projectView */ \"./src/views/projectView.js\");\n/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Project */ \"./src/models/Project.js\");\n/* harmony import */ var _controller_ProjectController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller/ProjectController */ \"./src/controller/ProjectController.js\");\n/* harmony import */ var _controller_TaskController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller/TaskController */ \"./src/controller/TaskController.js\");\n\n\n\n\n\n\n\nconst projectBtn = document.querySelector('.createProjectBtn'); \nprojectBtn.addEventListener('click', () => {\n  let person = prompt('name: ')\n})\n\nconst taskList = document.querySelector('.tasklist')\n\nlet task = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__.Task)('garbage');\n\nconst taskView = (0,_views_taskView__WEBPACK_IMPORTED_MODULE_1__.TaskView)();\n\nlet activeTask = taskView.createTaskElement(task)\ntaskList.appendChild(activeTask)\ntaskList.appendChild(taskView.createTaskElement((0,_models_Task__WEBPACK_IMPORTED_MODULE_0__.Task)('laundry')))\ntaskList.appendChild(taskView.createTaskElement((0,_models_Task__WEBPACK_IMPORTED_MODULE_0__.Task)('other')))\n\nconst projectView = (0,_views_projectView__WEBPACK_IMPORTED_MODULE_2__.ProjectView)();\n\nconst projContainer = document.querySelector('.projectsContainer');\nconst newProject = (0,_models_Project__WEBPACK_IMPORTED_MODULE_3__.Project)('Chores');\nconst projbtn = projectView.createProjectElement(newProject);\nprojbtn.classList.add('active');\nprojContainer.appendChild(projbtn);\n\n// controller\nconst projectController = (0,_controller_ProjectController__WEBPACK_IMPORTED_MODULE_4__.ProjectController)();\nconst taskController = (0,_controller_TaskController__WEBPACK_IMPORTED_MODULE_5__.TaskController)();\n\nprojectController.createProject(newProject)\ntaskController.createTask('t1', 'none', 1);\ntaskController.createTask('t2', 'none', 1);\ntaskController.createTask('t3', 'none', 1);\ntaskController.createTask('t4', 'none', 1);\n\ntaskController.deleteTask('t2')\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/models/Project.js":
/*!*******************************!*\
  !*** ./src/models/Project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nconst Project = (name) => {\n  let projName = name;\n  let tasks = [];\n  const projId = Math.floor(Date.now() * Math.random()) + 1;\n\n  return {\n    projName, tasks, projId\n  };\n};\n\n\n\n//# sourceURL=webpack://todo_list/./src/models/Project.js?");

/***/ }),

/***/ "./src/models/Task.js":
/*!****************************!*\
  !*** ./src/models/Task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nconst Task = (name, dueDate='none', priority=1) => {\n  let taskName = name;\n  let taskDueDate = dueDate;\n  let taskPrio = priority;\n  let isComplete = false;\n  const taskId = Math.floor(Date.now() * Math.random());\n\n  return {\n    taskName, taskDueDate, taskPrio, isComplete, taskId\n  };\n};\n\n\n\n\n//# sourceURL=webpack://todo_list/./src/models/Task.js?");

/***/ }),

/***/ "./src/views/projectView.js":
/*!**********************************!*\
  !*** ./src/views/projectView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectView: () => (/* binding */ ProjectView)\n/* harmony export */ });\nconst ProjectView = () =>  {\n  function createProjectElement(project) {\n    const projectBtn = document.createElement('button');\n    projectBtn.classList.add('projectBtn');\n    projectBtn.setAttribute('id', project.projId);\n    projectBtn.innerHTML = project.projName;\n\n    return projectBtn;\n  }\n\n  return {\n    createProjectElement\n  }\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/views/projectView.js?");

/***/ }),

/***/ "./src/views/taskView.js":
/*!*******************************!*\
  !*** ./src/views/taskView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskView: () => (/* binding */ TaskView)\n/* harmony export */ });\n// render task elements\nconst TaskView = () => {\n  function createTaskElement(task) {\n    const taskItemElem = document.createElement('div');\n    taskItemElem.classList.add('taskItem');\n    taskItemElem.setAttribute('id', task.taskId);\n\n    const taskElemLeft = document.createElement('div');\n    const taskElemRight = document.createElement('div');\n    taskElemLeft.classList.add('taskItemLeft');\n    taskElemRight.classList.add('taskItemRight');\n    taskItemElem.appendChild(taskElemLeft);\n    taskItemElem.appendChild(taskElemRight);\n\n    // Left Item\n    const taskCheckElem = document.createElement('input');\n    taskCheckElem.setAttribute('type', 'checkbox');\n    taskCheckElem.classList.add('taskCheck');\n    taskElemLeft.appendChild(taskCheckElem);\n\n    const taskContentElem = document.createElement('p');\n    taskContentElem.classList.add('taskContent');\n    taskContentElem.innerHTML = task.taskName;  // Input task name\n    taskElemLeft.appendChild(taskContentElem);\n\n    // Right Item\n    const dateLabel = document.createElement('label');\n    dateLabel.setAttribute('for', 'input-dueDate');\n    dateLabel.innerHTML = 'Due Date';\n    taskElemRight.appendChild(dateLabel);\n\n    const calendar = document.createElement('input');\n    calendar.setAttribute('type', 'date');\n    calendar.setAttribute('id', 'input-dueDate');\n    calendar.classList.add('input-dueDate');\n    if (task.taskDueDate === 'none') calendar.setAttribute('value', '2024-01-06');\n    else calendar.setAttribute('value', task.taskDueDate);\n    taskElemRight.appendChild(calendar);\n\n    // add taskName to id (task?)\n\n    return taskItemElem;\n  }\n\n  return {\n    createTaskElement\n  }\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/views/taskView.js?");

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