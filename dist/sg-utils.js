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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Object/clone.js":
/*!*****************************!*\
  !*** ./src/Object/clone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone\": () => (/* binding */ clone)\n/* harmony export */ });\n/*\r\n    浅拷贝方法\r\n          利用es5的语法: for...in\r\n*/\r\nfunction clone(target){\r\n  // 过滤掉不是对象和数组的情况\r\n  if(target === null || typeof target !== 'object')return target\r\n  // 如果是数组或者对象\r\n  let result = Array.isArray(target) ? [] : {}\r\n  for(let key in target){\r\n    result[key] = target[key]\r\n  }\r\n  return result\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/Object/clone.js?");

/***/ }),

/***/ "./src/Object/deepClone.js":
/*!*********************************!*\
  !*** ./src/Object/deepClone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deepClone1\": () => (/* binding */ deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* binding */ deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* binding */ deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* binding */ deepClone4)\n/* harmony export */ });\n/*\r\n    深拷贝方法\r\n      1). 大众乞丐版\r\n          问题1: 函数属性会丢失\r\n          问题2: 循环引用会出错\r\n      2). 面试基础版本\r\n          解决问题1: 函数属性会丢失\r\n      3). 面试加强版本\r\n          解决问题2: 循环引用会出错\r\n      4). 面试加强版本2（优化遍历性能）\r\n          数组: while | for | forEach() 优于 for-in | keys()&forEach()\r\n          对象: for-in 与 keys()&forEach() 差不多\r\n\r\n*/\r\n\r\nfunction deepClone1(target){\r\n  return JSON.parse(JSON.stringify(target))\r\n}\r\n\r\nfunction deepClone2(target){\r\n  // 过滤掉不是对象和数组的情况\r\n  if(target === null || typeof target !== 'object')return target\r\n  // 如果是数组或者对象\r\n  let result = Array.isArray(target) ? [] : {}\r\n  for(let key in target){\r\n    result[key] = deepClone2(target[key])\r\n  }\r\n  return result\r\n}\r\n\r\nfunction deepClone3(target, map = new Map()){\r\n  // 过滤掉不是对象和数组的情况\r\n  if(target === null || typeof target !== 'object')return target\r\n  let cloneTarget = map.get(target)\r\n  if(cloneTarget)return cloneTarget\r\n  // 如果是数组或者对象\r\n  cloneTarget = Array.isArray(target) ? [] : {}\r\n  map = map.set(target, cloneTarget)\r\n  for(let key in target){\r\n    cloneTarget[key] = deepClone3(target[key], map)\r\n  }\r\n  return cloneTarget\r\n}\r\n// 遍历数组时for in循环效率低下\r\nfunction deepClone4(target){\r\n  // 过滤掉不是对象和数组的情况\r\n  if(target === null || typeof target !== 'object')return target\r\n  // 如果是数组或者对象\r\n  let result\r\n  if(Array.isArray(target)){\r\n    result = []\r\n    target.forEach((el, index)=>{\r\n      result[index] = el\r\n    })\r\n  }\r\n  else{\r\n    result = {}\r\n    for(let key in target){\r\n      result[key] = deepClone2(target[key])\r\n    }\r\n  }\r\n  return result\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/Object/deepClone.js?");

/***/ }),

/***/ "./src/Object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/Object/mergeObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeObject\": () => (/* binding */ mergeObject)\n/* harmony export */ });\n/*\r\n     对象合并\r\n     mergeObject(...objs)\r\n     功能: 合并多个对象, 返回一个合并后的对象（不改变原对象）\r\n     合并前: \r\n          { a: [{ x:2}, { y: 4}], b:1}\r\n          { a: { z: 3}, b: [2, 3], c:'foo'}\r\n      合并后:\r\n          { a: [ { x : 2 },{ y : 4 },{ z: 3}], b:[ 1, 2, 3], c:'foo'}\r\n*/\r\nfunction mergeObject(...objs){\r\n  let result = {}\r\n  objs.forEach(obj => {\r\n    Object.keys(obj).forEach(key =>{\r\n      if(!result.hasOwnProperty(key)){\r\n        result[key] = obj[key] \r\n      }\r\n      else{\r\n        result[key] = [].concat(result[key], obj[key])\r\n      }\r\n    })\r\n  })\r\n  return result\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/Object/mergeObject.js?");

/***/ }),

/***/ "./src/Object/myInstanceof.js":
/*!************************************!*\
  !*** ./src/Object/myInstanceof.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myInstanceof\": () => (/* binding */ myInstanceof)\n/* harmony export */ });\nfunction myInstanceof(obj, Fn){\r\n  // 得到第一个原型对象\r\n  let protoObj = obj.__proto__\r\n  while (protoObj !== null) { // 存在原型对象\r\n    // 如果就是Fn的原型对象, 直接返回true\r\n    if(protoObj === Fn.prototype){\r\n      return true\r\n    }\r\n    // 取出下一个原型对象, 并保存\r\n    protoObj = protoObj.__proto__\r\n  }\r\n  return false\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/Object/myInstanceof.js?");

/***/ }),

/***/ "./src/Object/newInstance.js":
/*!***********************************!*\
  !*** ./src/Object/newInstance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => (/* binding */ newInstance)\n/* harmony export */ });\nfunction newInstance(Fn, ...args) {\r\n  let obj = {};\r\n  const result = Fn.call(obj, ...args);\r\n  obj.__proto__ = Fn.prototype;\r\n  if (result instanceof Object) {\r\n    return result;\r\n  }\r\n  return obj;\r\n}\r\n\n\n//# sourceURL=webpack://sgUtils/./src/Object/newInstance.js?");

/***/ }),

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\n// 自己写的方法\r\nfunction chunk(array, size =1){\r\n  const arr = []\r\n  let times = Math.ceil(array.length / size)\r\n  for(let i=0; i<times; i++){\r\n      arr.push(array.slice(i* size , (i+1)*size))\r\n  }\r\n  return arr\r\n}\r\n\n\n//# sourceURL=webpack://sgUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compact\": () => (/* binding */ compact)\n/* harmony export */ });\nfunction compact(array){\r\n  return array.filter(item=> item)\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/array/compact.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* binding */ concat)\n/* harmony export */ });\n/*\r\n \r\n*/\r\nfunction concat(array,...args){\r\n  const arr = [...array]\r\n  // 遍历args,将value或者value的元素添加到arr中\r\n  args.forEach(item =>{\r\n    if(Array.isArray(item)){\r\n      arr.push(...item)\r\n    }\r\n    else{\r\n      arr.push(item)\r\n    }\r\n  })\r\n  return arr\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declare.js":
/*!******************************!*\
  !*** ./src/array/declare.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"forEach\": () => (/* binding */ forEach),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"every\": () => (/* binding */ every),\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\nfunction map(array, callback) {\r\n  let arr = []\r\n  for (let i = 0; i < array.length; i++) {\r\n    arr[i] = callback(array[i], i)\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction forEach(array, callback){\r\n  for (let i = 0; i < array.length; i++) {\r\n    callback(array[i], i)\r\n  }\r\n}\r\n\r\nfunction reduce(array, callback, initValue = 0) {\r\n  for (let i = 0; i < array.length; i++) {\r\n    initValue = callback(initValue, array[i], i)\r\n  }\r\n  return initValue\r\n}\r\n\r\nfunction filter(array, callback) {\r\n  let arr = []\r\n  for (let i = 0; i < array.length; i++) {\r\n    if(callback( array[i], i))arr.push(array[i])\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction find(array, callback) {\r\n  for (let i = 0; i < array.length; i++) {\r\n    if(callback( array[i], i))return array[i]\r\n  }\r\n}\r\n\r\nfunction findIndex(array, callback) {\r\n  for (let i = 0; i < array.length; i++) {\r\n    if(callback( array[i], i))return i\r\n  }\r\n}\r\n\r\nfunction every(array, callback) {\r\n  for (let i = 0; i < array.length; i++) {\r\n    if(!callback( array[i], i))return false\r\n  }\r\n  return true\r\n}\r\n\r\nfunction some(array, callback) {\r\n  for (let i = 0; i < array.length; i++) {\r\n    if(callback( array[i], i))return true\r\n  }\r\n  return false\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/array/declare.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => (/* binding */ difference)\n/* harmony export */ });\n/*\r\n      difference(arr1, arr2): 得到当前数组中所有不在arr2中的元素组成的数组(不改变原数组)\r\n        如: difference([1, 3, 5, 7], [5, 8]) ===> [1, 3, 7]\r\n*/\r\n\r\nfunction difference(arr1, arr2) {\r\n  const arr = [];\r\n  arr1.forEach((el) => {\r\n    if (arr2.indexOf(el) === -1) {\r\n      arr.push(el);\r\n    }\r\n  });\r\n  return arr;\r\n\r\n  return arr1.filter(item=> arr2.indexOf(item) === -1)\r\n\r\n}\r\n\n\n//# sourceURL=webpack://sgUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => (/* binding */ drop),\n/* harmony export */   \"dropRight\": () => (/* binding */ dropRight)\n/* harmony export */ });\n/*\r\n      1.drop(array, count): 得到数组过滤掉左边count个后剩余元素组成的数组\r\n        说明: 不改变当前数组, count默认值为1\r\n        如:drop([1, 3, 5, 7], 2) ===> [5, 7]\r\n      2.dropRight(array, values): 得到数组过滤掉右边count个后剩余元素组成的数组\r\n        说明: 不改变当前数组, count默认值为1\r\n        如:dropRight([1, 3, 5, 7], 2) ===> [1, 3]\r\n    */\r\nfunction drop(array, count = 1) {\r\n  const result = [];\r\n  if(count < 1 )count = 1\r\n  for (let index = count ; index < array.length ; index++) {\r\n    result.push(array[index]);\r\n  }\r\n  // filter也行\r\n  return result;\r\n}\r\n\r\nfunction dropRight(array, count = 1) {\r\n  const result = [];\r\n  if(count < 1 )count = 1\r\n  for (let index = 0; index < array.length - count; index++) {\r\n    result.push(array[index]);\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://sgUtils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flatten1\": () => (/* binding */ flatten1),\n/* harmony export */   \"flatten2\": () => (/* binding */ flatten2),\n/* harmony export */   \"flatten3\": () => (/* binding */ flatten3)\n/* harmony export */ });\n/*\r\n数组扁平化\r\n1. 理解:\r\n    取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\r\n    如: [1, [3, [2, 4]]] ==> [1, 2, 3, 4]\r\n2. 实现:\r\n    方法一: 递归 + push()\r\n    方法二: 递归 + reduce() + concat()\r\n    方法三: ... + some() + concat()   \r\n*/\r\n// 个人写的 递归 + push()\r\nfunction flatten1(array) {\r\n  const arr = [];\r\n  function pushFn(array) {\r\n    for (let i = 0; i < array.length; i++) {\r\n      if (Array.isArray(array[i])) {\r\n        pushFn(array[i]);\r\n      } else {\r\n        arr.push(array[i]);\r\n      }\r\n    }\r\n  }\r\n  pushFn(array);\r\n  return arr;\r\n}\r\n// 方法二: 递归 + reduce() + concat() [1, [3, [2, 4]]] ==> [1, 2, 3, 4]\r\nfunction flatten2(array) {\r\n  return array.reduce(\r\n    (preTotal, item) => {\r\n      if (Array.isArray(item)) {\r\n        preTotal = preTotal.concat(flatten2(item));\r\n      } else {\r\n        preTotal.push(item);\r\n      }\r\n      return preTotal;\r\n    },\r\n    []\r\n  );\r\n}\r\n//方法三: ... + some() + concat() [1, [3, [2, 4]]] ==> [1, 2, 3, 4]\r\nfunction flatten3(array) {\r\n  while (array.some( item => Array.isArray(item))){\r\n    array = [].concat(...array)\r\n  }\r\n  return array\r\n}\r\n\n\n//# sourceURL=webpack://sgUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/mergeArray.js":
/*!*********************************!*\
  !*** ./src/array/mergeArray.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeArray\": () => (/* binding */ mergeArray)\n/* harmony export */ });\n/*\r\n      mergeArray(arr1, arr2): 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组只合并原数组不存在的)\r\n        如: mergeArray([1, 3, 5, 7, 5], [1, 5, 8]) ===> [1, 3, 5, 7, 5, 8]\r\n*/\r\n\r\nfunction mergeArray(arr1, ...arrays) {\r\n  const result = [...arr1];\r\n  arrays.forEach(itemB => {\r\n    itemB.forEach(item => {\r\n      if (arr1.indexOf(item) === -1) {\r\n        result.push(item);\r\n      }\r\n    });\r\n  });\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://sgUtils/./src/array/mergeArray.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => (/* binding */ pull),\n/* harmony export */   \"pullAll\": () => (/* binding */ pullAll)\n/* harmony export */ });\n/*\r\n      1.pull(array, ...values): 删除数组中与value相同的元素,返回所有删除元素的数组\r\n        说明: 数组发生了改变\r\n        如: pull([1, 3, 5, 3, 7], 2, 7, 3, 7) ===> 数组变为[1, 5],返回值为[3, 3, 7]\r\n      2.pullAll(array, values): 功能与pull一直,只是参数变为数组\r\n        如: pullAll([1, 3, 5, 3, 7], [2, 7, 3, 7]) ===> 数组变为[1, 5],返回值为[3, 3, 7]\r\n    */\r\nfunction pull(array, ...values) {\r\n  const result = [];\r\n  for(let i=0; i<array.length; i++){\r\n    let item = array[i]\r\n    if(values.indexOf(item) !== -1){\r\n      array.splice(i, 1);\r\n      result.push(item);\r\n      // 下标-1 实际数组长度-1后正确的下标 \r\n      i--\r\n    }\r\n  }\r\n  // 此处是错误写法 在array中splice后数组长度-1 下一次循环就会跳过一个数据\r\n  // array.forEach((item, index) => {\r\n  //   if (values.indexOf(item) !== -1) {\r\n  //     array.splice(index, 1);\r\n  //     result.push(item);\r\n  //   }\r\n  // });\r\n  return result;\r\n}\r\n\r\nfunction pullAll(array, values) {\r\n  return pull(array, ...values)\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\nfunction slice(array, start, end) {\r\n  const arr = [];\r\n  // 如果没有指定start和end返回array\r\n  start = start || 0;\r\n  end = end || array.length;\r\n  // 原数组为空数组\r\n  if (array.length === 0) {\r\n    return array;\r\n  }\r\n  // 如果start小于0\r\n  if (start < 0) {\r\n    start = 0;\r\n  }\r\n  // 如果end超过array.length-1\r\n  if (end > array.length ) {\r\n    end = array.length;\r\n  }\r\n\r\n  for (let index = start; index < end; index++) {\r\n    arr.push(array[index]);\r\n  }\r\n\r\n  return arr;\r\n}\r\n\n\n//# sourceURL=webpack://sgUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique1\": () => (/* binding */ unique1),\n/* harmony export */   \"unique2\": () => (/* binding */ unique2),\n/* harmony export */   \"unique3\": () => (/* binding */ unique3)\n/* harmony export */ });\n/*\r\n  去重实现:\r\n\r\n    方法1: 利用forEach()和indexOf\r\n\r\n    方法2: 利用forEach()加对象容器\r\n         说明:只需一次遍历，效率高\r\n    方法3: es6 new Set()\r\n \r\n */\r\nfunction unique1(array) {\r\n  const arr = [];\r\n  array.forEach((item) => {\r\n    if (arr.indexOf(item) < 0) {\r\n      arr.push(item);\r\n    }\r\n  });\r\n  return arr;\r\n}\r\n\r\nfunction unique2(array) {\r\n  const arr = [];\r\n  const obj = {};\r\n  array.forEach((item) => {\r\n    // if (!obj.item) {\r\n    if (!obj.hasOwnProperty(item)) {\r\n      arr.push(item);\r\n      obj[item] = true;\r\n    }\r\n  });\r\n  return arr;\r\n}\r\n\r\nfunction unique3(array) {\r\n  return Array.from(new Set(array));\r\n  return [...new Set(array)];\r\n}\r\n\n\n//# sourceURL=webpack://sgUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\nfunction apply(fn, obj, args) {\r\n  // this指向call调用的函数\r\n  // 思路:obj对象中添加一个临时方法obj.fn，就改变了原方法中的指向obj\r\n\r\n  //处理obj是undefined和null的情况\r\n  if (obj === undefined || obj === null) {\r\n    obj = window;\r\n  }\r\n\r\n  // 给obj添加方法tempFn\r\n  obj.tempFn = fn;\r\n\r\n  // 调用obj的tempFn方法 获取返回值result\r\n  const result = obj.tempFn(...args);\r\n\r\n  // 删除临时方法tempFn\r\n  delete obj.tempFn;\r\n\r\n  // 返回返回值\r\n  return result;\r\n};\n\n//# sourceURL=webpack://sgUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\nfunction bind(fn, obj, ...args) {\r\n  return  (...args2) => {\r\n    return (0,_call__WEBPACK_IMPORTED_MODULE_0__.call)(fn, obj, ...args, ...args2);\r\n  };\r\n};\n\n//# sourceURL=webpack://sgUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\nfunction call(fn, obj, ...args) {\r\n  // this指向call调用的函数\r\n  // 思路:obj对象中添加一个临时方法obj.fn，就改变了原方法中的指向obj\r\n\r\n  //处理obj是undefined和null的情况\r\n  if (obj === undefined || obj === null) {\r\n    obj = window;\r\n  }\r\n\r\n  // 给obj添加方法tempFn\r\n  obj.tempFn = fn;\r\n\r\n  // 调用obj的tempFn方法 获取返回值result\r\n  const result = obj.tempFn(...args);\r\n\r\n  // 删除临时方法tempFn\r\n  delete obj.tempFn;\r\n\r\n  // 返回返回值\r\n  return result;\r\n};\r\n\n\n//# sourceURL=webpack://sgUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\nfunction debounce(callback, delay) {\r\n  // let timeId = null\r\n  return function (event) {\r\n    // if(timeId)clearTimeout(timeId)\r\n    // timeId = setTimeout(callback.bind(this,event),delay)\r\n    if (callback.hasOwnProperty('timeout')) {\r\n      clearTimeout(callback.timeout)\r\n    }\r\n    callback.timeout = setTimeout(() => {\r\n      (0,_call__WEBPACK_IMPORTED_MODULE_0__.call)(callback, this, event)\r\n      delete callback.timeout\r\n    }, delay)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://sgUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\nfunction throttle(callback, delay) {\r\n  let pre = 0\r\n  return function (event) { // return的是handleClick事件 event为点击事件的参数 this为触发事件的button\r\n    let current = Date.now()\r\n    if (current - pre > delay) {\r\n      callback.call(this, event)\r\n      pre = current\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_0__.call),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_1__.bind),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_2__.apply),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_3__.debounce),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_4__.throttle),\n/* harmony export */   \"map\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.reduce),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.findIndex),\n/* harmony export */   \"every\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.some),\n/* harmony export */   \"unique1\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique1),\n/* harmony export */   \"unique2\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique2),\n/* harmony export */   \"unique3\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique3),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_7__.concat),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _array_slice__WEBPACK_IMPORTED_MODULE_8__.slice),\n/* harmony export */   \"flatten1\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_9__.flatten1),\n/* harmony export */   \"flatten2\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_9__.flatten2),\n/* harmony export */   \"flatten3\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_9__.flatten3),\n/* harmony export */   \"compact\": () => (/* reexport safe */ _array_compact__WEBPACK_IMPORTED_MODULE_10__.compact),\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_11__.chunk),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_12__.difference),\n/* harmony export */   \"mergeArray\": () => (/* reexport safe */ _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__.mergeArray),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_14__.pull),\n/* harmony export */   \"pullAll\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_14__.pullAll),\n/* harmony export */   \"drop\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_15__.drop),\n/* harmony export */   \"dropRight\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_15__.dropRight),\n/* harmony export */   \"newInstance\": () => (/* reexport safe */ _Object_newInstance__WEBPACK_IMPORTED_MODULE_16__.newInstance),\n/* harmony export */   \"myInstanceof\": () => (/* reexport safe */ _Object_myInstanceof__WEBPACK_IMPORTED_MODULE_17__.myInstanceof),\n/* harmony export */   \"mergeObject\": () => (/* reexport safe */ _Object_mergeObject__WEBPACK_IMPORTED_MODULE_18__.mergeObject),\n/* harmony export */   \"clone\": () => (/* reexport safe */ _Object_clone__WEBPACK_IMPORTED_MODULE_19__.clone),\n/* harmony export */   \"deepClone1\": () => (/* reexport safe */ _Object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* reexport safe */ _Object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* reexport safe */ _Object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* reexport safe */ _Object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone4),\n/* harmony export */   \"reverseString\": () => (/* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_21__.reverseString),\n/* harmony export */   \"palindrome\": () => (/* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_21__.palindrome),\n/* harmony export */   \"truncate\": () => (/* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_21__.truncate)\n/* harmony export */ });\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _array_declare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declare */ \"./src/array/declare.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/mergeArray */ \"./src/array/mergeArray.js\");\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony import */ var _Object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Object/newInstance */ \"./src/Object/newInstance.js\");\n/* harmony import */ var _Object_myInstanceof__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Object/myInstanceof */ \"./src/Object/myInstanceof.js\");\n/* harmony import */ var _Object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Object/mergeObject */ \"./src/Object/mergeObject.js\");\n/* harmony import */ var _Object_clone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Object/clone */ \"./src/Object/clone.js\");\n/* harmony import */ var _Object_deepClone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Object/deepClone */ \"./src/Object/deepClone.js\");\n/* harmony import */ var _string_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./string/index */ \"./src/string/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sgUtils/./src/main.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString),\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome),\n/* harmony export */   \"truncate\": () => (/* binding */ truncate)\n/* harmony export */ });\nfunction reverseString(str){\r\n  return str.split('').reverse().join('')\r\n}\r\n\r\nfunction palindrome(str){\r\n  return reverseString(str) === str\r\n}\r\n\r\nfunction truncate(str, num){\r\n  if(str.length <= num)return str\r\n  return str.substring(0,num) + '...'\r\n  // return str.split('').slice(0, num).join('') + '...'\r\n}\n\n//# sourceURL=webpack://sgUtils/./src/string/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});