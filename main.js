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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoData */ \"./src/todoData.js\");\n\n\n//dom stuff\n\nconst inputTodo = (e) => {\n  if (e.key === \"Enter\") {\n    const input = e.target.value;\n    _todoData__WEBPACK_IMPORTED_MODULE_0__.todoData.createTodo(input);\n    textInput.value = \"\";\n  }\n};\n\nconst textInput = document.querySelector(\".todoInput\");\ntextInput.addEventListener(\"keypress\", inputTodo);\n\nconst content = document.querySelector(\"#content\");\n\n// const addTodo = document.createElement(\"button\");\n// addTodo.textContent = \"Add a todo\";\n// content.appendChild(addTodo);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todoData.js":
/*!*************************!*\
  !*** ./src/todoData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoData\": () => (/* binding */ todoData)\n/* harmony export */ });\n/* harmony import */ var _todoModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoModel */ \"./src/todoModel.js\");\n\n\nconst todoData = (() => {\n  const todos = [];\n  let id = 0;\n  const getID = () => id;\n  const createTodo = (name) => {\n    const newTodo = (0,_todoModel__WEBPACK_IMPORTED_MODULE_0__.todoModel)(name);\n    newTodo.id = id;\n    todos.push(newTodo);\n    id++;\n    getTodos();\n  };\n  const getTodos = () => {\n    console.log(todos);\n    return todos;\n  };\n  return { createTodo, getTodos, getID };\n})();\n\n//add model folder, create two different files, todoItem.js, category.js\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoData.js?");

/***/ }),

/***/ "./src/todoModel.js":
/*!**************************!*\
  !*** ./src/todoModel.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoModel\": () => (/* binding */ todoModel)\n/* harmony export */ });\nconst todoModel = (name) => {\n  const sayName = () => console.log(`My title is: ${name}`);\n  return { name, sayName };\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoModel.js?");

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