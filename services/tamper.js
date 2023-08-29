/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./transpiler/tamper/awaitSocketIO.js":
/*!********************************************!*\
  !*** ./transpiler/tamper/awaitSocketIO.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar LOCAL_URL=\"http://localhost:4000\",awaitSocketIO=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:25;try{var c=io.connect(LOCAL_URL);a(c)}catch(c){setTimeout(function(){return awaitSocketIO(a)},b)}};/* harmony default export */ __webpack_exports__[\"default\"] = (function(a){var b=\"\".concat(LOCAL_URL,\"/socket-io\"),c=document.createElement(\"script\");c.id=\"socket-io-tamper\",c.setAttribute(\"src\",\"http://localhost:4000/socket-io\"),document.body.appendChild(c),awaitSocketIO(a)});\n\n//# sourceURL=webpack:///./transpiler/tamper/awaitSocketIO.js?");

/***/ }),

/***/ "./transpiler/tamper/index.js":
/*!************************************!*\
  !*** ./transpiler/tamper/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _awaitSocketIO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awaitSocketIO */ \"./transpiler/tamper/awaitSocketIO.js\");\n/* harmony import */ var _socketHandshake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socketHandshake */ \"./transpiler/tamper/socketHandshake.js\");\nObject(_awaitSocketIO__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_socketHandshake__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./transpiler/tamper/index.js?");

/***/ }),

/***/ "./transpiler/tamper/socketHandshake.js":
/*!**********************************************!*\
  !*** ./transpiler/tamper/socketHandshake.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_socketProtocols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/socketProtocols */ \"./transpiler/utils/socketProtocols.js\");\n// Validate & Evaluate Source Code\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a){var b=!0;a.on(_utils_socketProtocols__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_URL\"],function(){a.emit(_utils_socketProtocols__WEBPACK_IMPORTED_MODULE_0__[\"RESPONSE_URL\"],window.location.href)}),a.on(_utils_socketProtocols__WEBPACK_IMPORTED_MODULE_0__[\"VALID_URL\"],function(){b?a.emit(_utils_socketProtocols__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_SOURCE\"]):window.location.reload(!1)}),a.on(_utils_socketProtocols__WEBPACK_IMPORTED_MODULE_0__[\"RESPONSE_SOURCE\"],function(a){var c=new Function(a);c(),b=!1})});\n\n//# sourceURL=webpack:///./transpiler/tamper/socketHandshake.js?");

/***/ }),

/***/ "./transpiler/utils/socketProtocols.js":
/*!*********************************************!*\
  !*** ./transpiler/utils/socketProtocols.js ***!
  \*********************************************/
/*! exports provided: REQUEST_URL, RESPONSE_URL, VALID_URL, REQUEST_SOURCE, RESPONSE_SOURCE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_URL\", function() { return REQUEST_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESPONSE_URL\", function() { return RESPONSE_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VALID_URL\", function() { return VALID_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_SOURCE\", function() { return REQUEST_SOURCE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESPONSE_SOURCE\", function() { return RESPONSE_SOURCE; });\n// Server Side\nvar composeServerProtocol=function(a){return\"@@server --> \".concat(a)},composeTamperProtocol=function(a){return\"@@tamper --> \".concat(a)};var REQUEST_URL=composeServerProtocol(\"request-url\");var RESPONSE_URL=composeTamperProtocol(\"response-url\");var VALID_URL=composeServerProtocol(\"valid-url\");var REQUEST_SOURCE=composeTamperProtocol(\"request-source\");var RESPONSE_SOURCE=composeServerProtocol(\"response-source\");\n\n//# sourceURL=webpack:///./transpiler/utils/socketProtocols.js?");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./transpiler/tamper/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/smazad/Workspace/echologyx/echo-transpiler/transpiler/tamper/index.js */\"./transpiler/tamper/index.js\");\n\n\n//# sourceURL=webpack:///multi_./transpiler/tamper/index.js?");

/***/ })

/******/ });