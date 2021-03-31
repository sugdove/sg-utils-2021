/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sgUtils"] = factory();
	else
		root["sgUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/declare.js":
/*!******************************!*\
  !*** ./src/array/declare.js ***!
  \******************************/
/***/ (() => {

eval("function map(array, callback) {\r\n  let arr = []\r\n  for (let i = 0; i < array.length; i++) {\r\n    arr[i] = callback(array[i], i)\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction reduce(array, callback, initValue = 0) {\r\n  for (let i = 0; i < array.length; i++) {\r\n    initValue = callback(initValue, array[i], i)\r\n  }\r\n  return initValue\r\n}\r\n\r\nfunction filter(array, callback) {\r\n  let arr = []\r\n  for (let i = 0; i < array.length; i++) {\r\n    if(callback( array[i], i))arr.push(array[i])\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction find(array, callback) {\r\n  for (let i = 0; i < array.length; i++) {\r\n    if(callback( array[i], i))return array[i]\r\n  }\r\n}\r\n\r\nfunction findIndex(array, callback) {\r\n  for (let i = 0; i < array.length; i++) {\r\n    if(callback( array[i], i))return i\r\n  }\r\n}\r\n\r\nfunction every(array, callback) {\r\n  for (let i = 0; i < array.length; i++) {\r\n    if(!callback( array[i], i))return false\r\n  }\r\n  return true\r\n}\r\n\r\nfunction some(array, callback) {\r\n  for (let i = 0; i < array.length; i++) {\r\n    if(callback( array[i], i))return true\r\n  }\r\n  return false\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/array/declare.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\nfunction apply(fn, obj, args) {\r\n  // this指向call调用的函数\r\n  // 思路:obj对象中添加一个临时方法obj.fn，就改变了原方法中的指向obj\r\n\r\n  //处理obj是undefined和null的情况\r\n  if (obj === undefined || obj === null) {\r\n    obj = window;\r\n  }\r\n\r\n  // 给obj添加方法tempFn\r\n  obj.tempFn = fn;\r\n\r\n  // 调用obj的tempFn方法 获取返回值result\r\n  const result = obj.tempFn(...args);\r\n\r\n  // 删除临时方法tempFn\r\n  delete obj.tempFn;\r\n\r\n  // 返回返回值\r\n  return result;\r\n};\n\n//# sourceURL=webpack://sgUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\nfunction bind(fn, obj, ...args) {\r\n  return  (...args2) => {\r\n    return (0,_call__WEBPACK_IMPORTED_MODULE_0__.call)(fn, obj, ...args, ...args2);\r\n  };\r\n};\n\n//# sourceURL=webpack://sgUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\nfunction call(fn, obj, ...args) {\r\n  // this指向call调用的函数\r\n  // 思路:obj对象中添加一个临时方法obj.fn，就改变了原方法中的指向obj\r\n\r\n  //处理obj是undefined和null的情况\r\n  if (obj === undefined || obj === null) {\r\n    obj = window;\r\n  }\r\n\r\n  // 给obj添加方法tempFn\r\n  obj.tempFn = fn;\r\n\r\n  // 调用obj的tempFn方法 获取返回值result\r\n  const result = obj.tempFn(...args);\r\n\r\n  // 删除临时方法tempFn\r\n  delete obj.tempFn;\r\n\r\n  // 返回返回值\r\n  return result;\r\n};\n\n//# sourceURL=webpack://sgUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\nfunction debounce(callback, delay) {\r\n  // let timeId = null\r\n  return function (event) {\r\n    // if(timeId)clearTimeout(timeId)\r\n    // timeId = setTimeout(callback.bind(this,event),delay)\r\n    if (callback.hasOwnProperty('timeout')) {\r\n      clearTimeout(callback.timeout)\r\n    }\r\n    callback.timeout = setTimeout(() => {\r\n      (0,_call__WEBPACK_IMPORTED_MODULE_0__.call)(callback, this, event)\r\n      delete callback.timeout\r\n    }, delay)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://sgUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\nfunction throttle(callback, delay) {\r\n  let pre = 0\r\n  return function (event) { // return的是handleClick事件 event为点击事件的参数 this为触发事件的button\r\n    let current = Date.now()\r\n    if (current - pre > delay) {\r\n      callback.call(this, event)\r\n      pre = current\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_0__.call),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_1__.bind),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_2__.apply),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_3__.debounce),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_4__.throttle),\n/* harmony export */   \"map\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.reduce),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.findIndex),\n/* harmony export */   \"every\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.some)\n/* harmony export */ });\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _array_declare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declare */ \"./src/array/declare.js\");\n/* harmony import */ var _array_declare__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_array_declare__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sgUtils/./src/main.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});