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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./transpiler/hotReload/corsLoader.js":
/*!********************************************!*\
  !*** ./transpiler/hotReload/corsLoader.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a,b,c){b.header(\"Access-Control-Allow-Origin\",\"*\"),b.header(\"Access-Control-Allow-Headers\",\"Origin, X-Requested-With, Content-Type, Accept\"),c()});\n\n//# sourceURL=webpack:///./transpiler/hotReload/corsLoader.js?");

/***/ }),

/***/ "./transpiler/hotReload/getSocketIO.js":
/*!*********************************************!*\
  !*** ./transpiler/hotReload/getSocketIO.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a,b){var c=path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"node_modules\",\"socket.io-client\",\"dist\",\"socket.io.js\");b.sendFile(c)});\n\n//# sourceURL=webpack:///./transpiler/hotReload/getSocketIO.js?");

/***/ }),

/***/ "./transpiler/hotReload/getTamper.js":
/*!*******************************************!*\
  !*** ./transpiler/hotReload/getTamper.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a,b){// const tamperPath = path.resolve('build', 'tamper.js');\nvar c=path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"services\",\"tamper.js\");b.sendFile(c)});\n\n//# sourceURL=webpack:///./transpiler/hotReload/getTamper.js?");

/***/ }),

/***/ "./transpiler/hotReload/index.js":
/*!***************************************!*\
  !*** ./transpiler/hotReload/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _corsLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corsLoader */ \"./transpiler/hotReload/corsLoader.js\");\n/* harmony import */ var _getSocketIO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getSocketIO */ \"./transpiler/hotReload/getSocketIO.js\");\n/* harmony import */ var _getTamper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getTamper */ \"./transpiler/hotReload/getTamper.js\");\n/* harmony import */ var _tamperSocket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tamperSocket */ \"./transpiler/hotReload/tamperSocket.js\");\n// Server Configuration\nvar app=express__WEBPACK_IMPORTED_MODULE_0___default()(),server=http__WEBPACK_IMPORTED_MODULE_1___default.a.Server(app),io=socket_io__WEBPACK_IMPORTED_MODULE_2___default()(server,{origins:\"*:*\"});// Loaders\n// Static Routes\n// Sockets\napp.use(_corsLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),app.get(\"/socket-io\",_getSocketIO__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),app.get(\"/tamper\",_getTamper__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),io.on(\"connection\",_tamperSocket__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),server.listen(4e3,function(){console.log(\"Server running on port 4000\")});\n\n//# sourceURL=webpack:///./transpiler/hotReload/index.js?");

/***/ }),

/***/ "./transpiler/hotReload/tamperSocket.js":
/*!**********************************************!*\
  !*** ./transpiler/hotReload/tamperSocket.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./transpiler/utils/index.js\");\nObject(dotenv__WEBPACK_IMPORTED_MODULE_2__[\"config\"])();// This needs to be here\nvar composeSource=new Promise(/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b){var c,d,e,f,g,h,i,j,k;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_utils__WEBPACK_IMPORTED_MODULE_4__[\"getActiveCursor\"];case 2:if(c=a.sent,c){a.next=5;break}return a.abrupt(\"return\",b({targetUrls:[],code:\"\"}));case 5:return d=c.nodePath,a.next=8,Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"readFile\"])(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(d,\"compiled\",\"source.js\"));case 8:return e=a.sent,a.next=11,Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"readFile\"])(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(d,\"compiled\",\"config.js\"));case 11:return f=a.sent,g=new Function(\"return \".concat(f))(),h=g.regex,i=g.targetUrls,j=g.initialize,k=\"(\".concat(j.toString(),\")(); \").concat(e),a.abrupt(\"return\",b({regex:h,targetUrls:i,code:k}));case 15:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}());/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b){var c,d,e,f,g;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,composeSource;case 2:c=a.sent,d=c.regex,e=void 0===d?null:d,f=c.targetUrls,g=c.code,b.emit(_utils__WEBPACK_IMPORTED_MODULE_4__[\"REQUEST_URL\"]),b.on(_utils__WEBPACK_IMPORTED_MODULE_4__[\"RESPONSE_URL\"],function(a){Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"testRegex\"])(e,a)||f.some(function(b){return b===a})?b.emit(_utils__WEBPACK_IMPORTED_MODULE_4__[\"VALID_URL\"]):b.disconnect(0)}),b.on(_utils__WEBPACK_IMPORTED_MODULE_4__[\"REQUEST_SOURCE\"],function(){b.emit(_utils__WEBPACK_IMPORTED_MODULE_4__[\"RESPONSE_SOURCE\"],g)});case 10:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}})());\n\n//# sourceURL=webpack:///./transpiler/hotReload/tamperSocket.js?");

/***/ }),

/***/ "./transpiler/utils/activeCursor/activateCursor.js":
/*!*********************************************************!*\
  !*** ./transpiler/utils/activeCursor/activateCursor.js ***!
  \*********************************************************/
/*! exports provided: activateCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateCursor\", function() { return activateCursor; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fs */ \"./transpiler/utils/fs/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./transpiler/utils/constants.js\");\n/* harmony import */ var _deactivateCursor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deactivateCursor */ \"./transpiler/utils/activeCursor/deactivateCursor.js\");\nvar activateCursor=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b){var c;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=path__WEBPACK_IMPORTED_MODULE_2___default.a.join(b,_constants__WEBPACK_IMPORTED_MODULE_4__[\"ACTIVE_FILE_NAME\"]),a.next=3,Object(_deactivateCursor__WEBPACK_IMPORTED_MODULE_5__[\"resetActiveCursors\"])();case 3:return a.next=5,Object(_fs__WEBPACK_IMPORTED_MODULE_3__[\"writeFile\"])(c,\"\");case 5:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();\n\n//# sourceURL=webpack:///./transpiler/utils/activeCursor/activateCursor.js?");

/***/ }),

/***/ "./transpiler/utils/activeCursor/deactivateCursor.js":
/*!***********************************************************!*\
  !*** ./transpiler/utils/activeCursor/deactivateCursor.js ***!
  \***********************************************************/
/*! exports provided: resetActiveCursors, deactivateCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetActiveCursors\", function() { return resetActiveCursors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deactivateCursor\", function() { return deactivateCursor; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fs */ \"./transpiler/utils/fs/index.js\");\n/* harmony import */ var _infoCursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infoCursor */ \"./transpiler/utils/infoCursor/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./transpiler/utils/constants.js\");\nvar deactivateCursor=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b){var c;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=path__WEBPACK_IMPORTED_MODULE_2___default.a.join(b,_constants__WEBPACK_IMPORTED_MODULE_5__[\"ACTIVE_FILE_NAME\"]),a.prev=1,a.next=4,Object(_fs__WEBPACK_IMPORTED_MODULE_3__[\"unlink\"])(c);case 4:return a.abrupt(\"return\",a.sent);case 7:return a.prev=7,a.t0=a[\"catch\"](1),a.abrupt(\"return\",Promise.resolve());case 10:case\"end\":return a.stop();}},a,null,[[1,7]])}));return function(){return a.apply(this,arguments)}}(),deactivateAllCursors=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all(b.map(function(a){var b=a.nodePath;return new Promise(/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(c){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=c,a.next=3,deactivateCursor(b);case 3:return a.t1=a.sent,a.abrupt(\"return\",(0,a.t0)(a.t1));case 5:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}())}));case 2:return a.abrupt(\"return\",a.sent);case 3:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),resetActiveCursors=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(){var b;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_infoCursor__WEBPACK_IMPORTED_MODULE_4__[\"getActiveInfoCursors\"];case 2:return b=a.sent,a.next=5,deactivateAllCursors(b);case 5:return a.abrupt(\"return\",a.sent);case 6:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();\n\n//# sourceURL=webpack:///./transpiler/utils/activeCursor/deactivateCursor.js?");

/***/ }),

/***/ "./transpiler/utils/activeCursor/doesActiveCursorExist.js":
/*!****************************************************************!*\
  !*** ./transpiler/utils/activeCursor/doesActiveCursorExist.js ***!
  \****************************************************************/
/*! exports provided: default, doesActiveCursorExist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return doesActiveCursorExist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doesActiveCursorExist\", function() { return doesActiveCursorExist; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fs */ \"./transpiler/utils/fs/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./transpiler/utils/constants.js\");\nvar doesActiveCursorExist=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_fs__WEBPACK_IMPORTED_MODULE_3__[\"readFile\"])(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(b,_constants__WEBPACK_IMPORTED_MODULE_4__[\"ACTIVE_FILE_NAME\"]));case 3:return a.abrupt(\"return\",!0);case 6:return a.prev=6,a.t0=a[\"catch\"](0),a.abrupt(\"return\",!1);case 9:case\"end\":return a.stop();}},a,null,[[0,6]])}));return function(){return a.apply(this,arguments)}}();\n\n//# sourceURL=webpack:///./transpiler/utils/activeCursor/doesActiveCursorExist.js?");

/***/ }),

/***/ "./transpiler/utils/activeCursor/getActiveCursor.js":
/*!**********************************************************!*\
  !*** ./transpiler/utils/activeCursor/getActiveCursor.js ***!
  \**********************************************************/
/*! exports provided: default, getActiveCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getActiveCursor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActiveCursor\", function() { return getActiveCursor; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _infoCursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infoCursor */ \"./transpiler/utils/infoCursor/index.js\");\nvar sortCursors=function(c,d){var e=c.lastUpdated,f=void 0===e?0:e,a=d.lastUpdated,g=void 0===a?0:a;// Sort descending\nreturn f<g?1:f>g?-1:0;// Equal updatedAt timestamps\n},getActiveCursor=new Promise(/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b){var c,d,e,f;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_infoCursor__WEBPACK_IMPORTED_MODULE_3__[\"getActiveInfoCursors\"];case 3:if(c=a.sent,!c.length){a.next=7;break}return d=c.sort(sortCursors),e=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(d,1),f=e[0],a.abrupt(\"return\",b(f));case 7:return a.abrupt(\"return\",b(null));case 10:return a.prev=10,a.t0=a[\"catch\"](0),a.abrupt(\"return\",b(null));case 13:case\"end\":return a.stop();}},a,null,[[0,10]])}));return function(){return a.apply(this,arguments)}}());\n\n//# sourceURL=webpack:///./transpiler/utils/activeCursor/getActiveCursor.js?");

/***/ }),

/***/ "./transpiler/utils/activeCursor/index.js":
/*!************************************************!*\
  !*** ./transpiler/utils/activeCursor/index.js ***!
  \************************************************/
/*! exports provided: activateCursor, resetActiveCursors, deactivateCursor, doesActiveCursorExist, getActiveCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _activateCursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activateCursor */ \"./transpiler/utils/activeCursor/activateCursor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"activateCursor\", function() { return _activateCursor__WEBPACK_IMPORTED_MODULE_0__[\"activateCursor\"]; });\n\n/* harmony import */ var _deactivateCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deactivateCursor */ \"./transpiler/utils/activeCursor/deactivateCursor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resetActiveCursors\", function() { return _deactivateCursor__WEBPACK_IMPORTED_MODULE_1__[\"resetActiveCursors\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deactivateCursor\", function() { return _deactivateCursor__WEBPACK_IMPORTED_MODULE_1__[\"deactivateCursor\"]; });\n\n/* harmony import */ var _doesActiveCursorExist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doesActiveCursorExist */ \"./transpiler/utils/activeCursor/doesActiveCursorExist.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"doesActiveCursorExist\", function() { return _doesActiveCursorExist__WEBPACK_IMPORTED_MODULE_2__[\"doesActiveCursorExist\"]; });\n\n/* harmony import */ var _getActiveCursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getActiveCursor */ \"./transpiler/utils/activeCursor/getActiveCursor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getActiveCursor\", function() { return _getActiveCursor__WEBPACK_IMPORTED_MODULE_3__[\"getActiveCursor\"]; });\n\n\n\n//# sourceURL=webpack:///./transpiler/utils/activeCursor/index.js?");

/***/ }),

/***/ "./transpiler/utils/constants.js":
/*!***************************************!*\
  !*** ./transpiler/utils/constants.js ***!
  \***************************************/
/*! exports provided: INFO_FILE_NAME, ACTIVE_FILE_NAME, CLIENT_EXCLUDES, TEST_EXCLUDES, VARIATION_EXCLUDES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INFO_FILE_NAME\", function() { return INFO_FILE_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTIVE_FILE_NAME\", function() { return ACTIVE_FILE_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLIENT_EXCLUDES\", function() { return CLIENT_EXCLUDES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEST_EXCLUDES\", function() { return TEST_EXCLUDES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VARIATION_EXCLUDES\", function() { return VARIATION_EXCLUDES; });\nvar INFO_FILE_NAME=\"info.json\",ACTIVE_FILE_NAME=\".active\",CLIENT_EXCLUDES=[\"common\"],TEST_EXCLUDES=[\"@assets\"],VARIATION_EXCLUDES=[\"index.scss\"];\n\n//# sourceURL=webpack:///./transpiler/utils/constants.js?");

/***/ }),

/***/ "./transpiler/utils/fs/common.js":
/*!***************************************!*\
  !*** ./transpiler/utils/fs/common.js ***!
  \***************************************/
/*! exports provided: readFile, writeFile, exec, readdir, copy, stat, unlink, rename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readFile\", function() { return readFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"writeFile\", function() { return writeFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exec\", function() { return exec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readdir\", function() { return readdir; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copy\", function() { return copy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stat\", function() { return stat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unlink\", function() { return unlink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rename\", function() { return rename; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\nvar child_process=__webpack_require__(/*! child_process */ \"child_process\"),fs=__webpack_require__(/*! fs */ \"fs\"),fse=__webpack_require__(/*! fs-extra */ \"fs-extra\"),util=__webpack_require__(/*! util */ \"util\"),readFile=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,util.promisify(fs.readFile)(b,\"utf8\");case 2:return a.abrupt(\"return\",a.sent);case 3:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),writeFile=util.promisify(fs.writeFile),exec=util.promisify(child_process.exec),readdir=util.promisify(fs.readdir),copy=util.promisify(fse.copy),unlink=util.promisify(fs.unlink),stat=util.promisify(fs.stat),rename=util.promisify(fs.rename);\n\n//# sourceURL=webpack:///./transpiler/utils/fs/common.js?");

/***/ }),

/***/ "./transpiler/utils/fs/directory.js":
/*!******************************************!*\
  !*** ./transpiler/utils/fs/directory.js ***!
  \******************************************/
/*! exports provided: doesDirectoryExist, makeDirectory, getDirectories, listDirectories, recurseDirectories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doesDirectoryExist\", function() { return doesDirectoryExist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeDirectory\", function() { return makeDirectory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDirectories\", function() { return getDirectories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listDirectories\", function() { return listDirectories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recurseDirectories\", function() { return recurseDirectories; });\n/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ \"@babel/runtime/helpers/toArray\");\n/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common */ \"./transpiler/utils/fs/common.js\");\n/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stat */ \"./transpiler/utils/fs/stat.js\");\nvar doesDirectoryExist=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function a(b){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_common__WEBPACK_IMPORTED_MODULE_6__[\"readdir\"])(b);case 3:return a.abrupt(\"return\",!!a.sent);case 6:return a.prev=6,a.t0=a[\"catch\"](0),a.abrupt(\"return\",Promise.resolve(!1));case 9:case\"end\":return a.stop();}},a,null,[[0,6]])}));return function(){return a.apply(this,arguments)}}(),makeDirectory=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function a(b){var c;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,doesDirectoryExist(b);case 3:if(c=a.sent,c){a.next=10;break}return a.next=7,Object(_common__WEBPACK_IMPORTED_MODULE_6__[\"exec\"])(\"mkdir \\\"\".concat(b,\"\\\"\"));case 7:return a.abrupt(\"return\",!0);case 10:return a.abrupt(\"return\",!1);case 11:a.next=16;break;case 13:return a.prev=13,a.t0=a[\"catch\"](0),a.abrupt(\"return\",!0);case 16:case\"end\":return a.stop();}},a,null,[[0,13]])}));return function(){return a.apply(this,arguments)}}(),getDirectories=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function a(b){var c,d,e,f,g=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=1<g.length&&void 0!==g[1]?g[1]:/*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function a(){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt(\"return\",!0);case 1:case\"end\":return a.stop();}},a)})),a.next=3,Object(_common__WEBPACK_IMPORTED_MODULE_6__[\"readdir\"])(b);case 3:return d=a.sent,e=d.map(function(a){return new Promise(/*#__PURE__*/function(){var d=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function d(e){var f,g,h;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return f=path__WEBPACK_IMPORTED_MODULE_5___default.a.join(b,a),d.next=3,Object(_common__WEBPACK_IMPORTED_MODULE_6__[\"stat\"])(f);case 3:if(g=d.sent,h=g.isDirectory(),d.t0=h,!d.t0){d.next=10;break}return d.next=9,c(f);case 9:d.t0=d.sent;case 10:if(!d.t0){d.next=14;break}e(a),d.next=15;break;case 14:e(null);case 15:case\"end\":return d.stop();}},d)}));return function(){return d.apply(this,arguments)}}())}),a.next=7,Promise.all(e);case 7:return f=a.sent,a.abrupt(\"return\",f.filter(function(a){return!!a}));case 9:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),listDirectories=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function a(b){var c,d,e=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=1<e.length&&void 0!==e[1]?e[1]:[],a.next=3,Object(_stat__WEBPACK_IMPORTED_MODULE_7__[\"getNodeListStats\"])(b);case 3:return d=a.sent,a.abrupt(\"return\",d.reduce(function(a,b){var d=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(b,2),e=d[0],f=d[1],g=f.isDirectory()&&!c.includes(e);return g?[].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(a),[e]):a},[]));case 5:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),recurseDirectories=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function a(b,c){var d,e,f,g,h,i,j=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=2<j.length&&void 0!==j[2]?j[2]:[],e=_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(d),f=e[0],g=e.slice(1),a.t0=recurseDirectories,a.t1=b,a.t2=g,a.next=7,listDirectories(b,f);case 7:return a.t3=a.sent,h={recurseDirectories:a.t0,nodePath:a.t1,nextFilters:a.t2,directories:a.t3},a.next=11,Promise.all(c(h));case 11:return i=a.sent,a.abrupt(\"return\",i.filter(function(a){return!!a}).flatMap(function(a){return a}));case 13:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();\n\n//# sourceURL=webpack:///./transpiler/utils/fs/directory.js?");

/***/ }),

/***/ "./transpiler/utils/fs/file.js":
/*!*************************************!*\
  !*** ./transpiler/utils/fs/file.js ***!
  \*************************************/
/*! exports provided: doesFileExist, listFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doesFileExist\", function() { return doesFileExist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listFiles\", function() { return listFiles; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ \"./transpiler/utils/fs/common.js\");\n/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stat */ \"./transpiler/utils/fs/stat.js\");\nvar doesFileExist=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function a(b){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,new Promise(/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function a(c){var d;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_common__WEBPACK_IMPORTED_MODULE_5__[\"stat\"])(b);case 3:return d=a.sent,a.abrupt(\"return\",c(null!==d));case 7:return a.prev=7,a.t0=a[\"catch\"](0),a.abrupt(\"return\",c(!1));case 10:case\"end\":return a.stop();}},a,null,[[0,7]])}));return function(){return a.apply(this,arguments)}}());case 2:return a.abrupt(\"return\",a.sent);case 3:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),listFiles=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function a(b){var c,d,e,f=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=1<f.length&&void 0!==f[1]?f[1]:[],d=2<f.length&&void 0!==f[2]?f[2]:\".js\",a.prev=2,a.next=5,Object(_stat__WEBPACK_IMPORTED_MODULE_6__[\"getNodeListStats\"])(b);case 5:return e=a.sent,a.abrupt(\"return\",e.reduce(function(a,b){var e=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(b,2),f=e[0],g=e[1],h=g.isFile()&&path__WEBPACK_IMPORTED_MODULE_4___default.a.extname(f)===d&&!c.includes(f);return h?[].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(a),[f]):a},[]));case 9:return a.prev=9,a.t0=a[\"catch\"](2),a.abrupt(\"return\",[]);case 12:case\"end\":return a.stop();}},a,null,[[2,9]])}));return function(){return a.apply(this,arguments)}}();\n\n//# sourceURL=webpack:///./transpiler/utils/fs/file.js?");

/***/ }),

/***/ "./transpiler/utils/fs/index.js":
/*!**************************************!*\
  !*** ./transpiler/utils/fs/index.js ***!
  \**************************************/
/*! exports provided: readFile, writeFile, exec, readdir, copy, stat, unlink, rename, doesDirectoryExist, makeDirectory, getDirectories, listDirectories, recurseDirectories, doesFileExist, listFiles, getNodeListStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./transpiler/utils/fs/common.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"readFile\", function() { return _common__WEBPACK_IMPORTED_MODULE_0__[\"readFile\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"writeFile\", function() { return _common__WEBPACK_IMPORTED_MODULE_0__[\"writeFile\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"exec\", function() { return _common__WEBPACK_IMPORTED_MODULE_0__[\"exec\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"readdir\", function() { return _common__WEBPACK_IMPORTED_MODULE_0__[\"readdir\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"copy\", function() { return _common__WEBPACK_IMPORTED_MODULE_0__[\"copy\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stat\", function() { return _common__WEBPACK_IMPORTED_MODULE_0__[\"stat\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unlink\", function() { return _common__WEBPACK_IMPORTED_MODULE_0__[\"unlink\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rename\", function() { return _common__WEBPACK_IMPORTED_MODULE_0__[\"rename\"]; });\n\n/* harmony import */ var _directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory */ \"./transpiler/utils/fs/directory.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"doesDirectoryExist\", function() { return _directory__WEBPACK_IMPORTED_MODULE_1__[\"doesDirectoryExist\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"makeDirectory\", function() { return _directory__WEBPACK_IMPORTED_MODULE_1__[\"makeDirectory\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getDirectories\", function() { return _directory__WEBPACK_IMPORTED_MODULE_1__[\"getDirectories\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listDirectories\", function() { return _directory__WEBPACK_IMPORTED_MODULE_1__[\"listDirectories\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"recurseDirectories\", function() { return _directory__WEBPACK_IMPORTED_MODULE_1__[\"recurseDirectories\"]; });\n\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file */ \"./transpiler/utils/fs/file.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"doesFileExist\", function() { return _file__WEBPACK_IMPORTED_MODULE_2__[\"doesFileExist\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listFiles\", function() { return _file__WEBPACK_IMPORTED_MODULE_2__[\"listFiles\"]; });\n\n/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat */ \"./transpiler/utils/fs/stat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getNodeListStats\", function() { return _stat__WEBPACK_IMPORTED_MODULE_3__[\"getNodeListStats\"]; });\n\n\n\n//# sourceURL=webpack:///./transpiler/utils/fs/index.js?");

/***/ }),

/***/ "./transpiler/utils/fs/stat.js":
/*!*************************************!*\
  !*** ./transpiler/utils/fs/stat.js ***!
  \*************************************/
/*! exports provided: getNodeListStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNodeListStats\", function() { return getNodeListStats; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ \"./transpiler/utils/fs/common.js\");\nvar getNodeListStats=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b){var c;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_common__WEBPACK_IMPORTED_MODULE_3__[\"readdir\"])(b);case 3:return c=a.sent,a.next=6,Promise.all(c.map(function(a){return new Promise(/*#__PURE__*/function(){var c=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function c(d){var e,f;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=path__WEBPACK_IMPORTED_MODULE_2___default.a.join(b,a),c.next=3,Object(_common__WEBPACK_IMPORTED_MODULE_3__[\"stat\"])(e);case 3:return f=c.sent,c.abrupt(\"return\",d([a,f]));case 5:case\"end\":return c.stop();}},c)}));return function(){return c.apply(this,arguments)}}())}));case 6:return a.abrupt(\"return\",a.sent);case 9:return a.prev=9,a.t0=a[\"catch\"](0),a.abrupt(\"return\",[]);case 12:case\"end\":return a.stop();}},a,null,[[0,9]])}));return function(){return a.apply(this,arguments)}}();\n\n//# sourceURL=webpack:///./transpiler/utils/fs/stat.js?");

/***/ }),

/***/ "./transpiler/utils/fuzzy.js":
/*!***********************************!*\
  !*** ./transpiler/utils/fuzzy.js ***!
  \***********************************/
/*! exports provided: default, fuzzySearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fuzzySearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fuzzySearch\", function() { return fuzzySearch; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\nvar fuzzy=__webpack_require__(/*! fuzzy */ \"fuzzy\"),fuzzySearch=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:\"\",b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:[];return new Promise(function(d){var e=fuzzy.filter(a,b);d([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(e.map(function(a){var b=a.original;return b})),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(c)))})};\n\n//# sourceURL=webpack:///./transpiler/utils/fuzzy.js?");

/***/ }),

/***/ "./transpiler/utils/index.js":
/*!***********************************!*\
  !*** ./transpiler/utils/index.js ***!
  \***********************************/
/*! exports provided: REQUEST_URL, RESPONSE_URL, VALID_URL, REQUEST_SOURCE, RESPONSE_SOURCE, fuzzySearch, testRegex, readFile, writeFile, exec, readdir, copy, stat, unlink, rename, doesDirectoryExist, makeDirectory, getDirectories, listDirectories, recurseDirectories, doesFileExist, listFiles, getNodeListStats, activateCursor, resetActiveCursors, deactivateCursor, doesActiveCursorExist, getActiveCursor, createInfoCursor, getActiveInfoCursors, listInfoDirectories, memoListInfoDirectories, setInfoCursor, getInfoCursor, directoryResolver, renameStaleInfoDirectories, composeAggregated, listDecompileFiles, memoListDecompileFiles, listTemplates, memoListTemplates, cloneTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fs */ \"./transpiler/utils/fs/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"readFile\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"readFile\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"writeFile\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"writeFile\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"exec\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"exec\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"readdir\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"readdir\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"copy\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"copy\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stat\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"stat\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unlink\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"unlink\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rename\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"rename\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"doesDirectoryExist\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"doesDirectoryExist\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"makeDirectory\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"makeDirectory\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getDirectories\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"getDirectories\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listDirectories\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"listDirectories\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"recurseDirectories\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"recurseDirectories\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"doesFileExist\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"doesFileExist\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listFiles\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"listFiles\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getNodeListStats\", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__[\"getNodeListStats\"]; });\n\n/* harmony import */ var _fuzzy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fuzzy */ \"./transpiler/utils/fuzzy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fuzzySearch\", function() { return _fuzzy__WEBPACK_IMPORTED_MODULE_1__[\"fuzzySearch\"]; });\n\n/* harmony import */ var _activeCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activeCursor */ \"./transpiler/utils/activeCursor/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"activateCursor\", function() { return _activeCursor__WEBPACK_IMPORTED_MODULE_2__[\"activateCursor\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resetActiveCursors\", function() { return _activeCursor__WEBPACK_IMPORTED_MODULE_2__[\"resetActiveCursors\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deactivateCursor\", function() { return _activeCursor__WEBPACK_IMPORTED_MODULE_2__[\"deactivateCursor\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"doesActiveCursorExist\", function() { return _activeCursor__WEBPACK_IMPORTED_MODULE_2__[\"doesActiveCursorExist\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getActiveCursor\", function() { return _activeCursor__WEBPACK_IMPORTED_MODULE_2__[\"getActiveCursor\"]; });\n\n/* harmony import */ var _infoCursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infoCursor */ \"./transpiler/utils/infoCursor/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createInfoCursor\", function() { return _infoCursor__WEBPACK_IMPORTED_MODULE_3__[\"createInfoCursor\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getActiveInfoCursors\", function() { return _infoCursor__WEBPACK_IMPORTED_MODULE_3__[\"getActiveInfoCursors\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listInfoDirectories\", function() { return _infoCursor__WEBPACK_IMPORTED_MODULE_3__[\"listInfoDirectories\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"memoListInfoDirectories\", function() { return _infoCursor__WEBPACK_IMPORTED_MODULE_3__[\"memoListInfoDirectories\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setInfoCursor\", function() { return _infoCursor__WEBPACK_IMPORTED_MODULE_3__[\"setInfoCursor\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getInfoCursor\", function() { return _infoCursor__WEBPACK_IMPORTED_MODULE_3__[\"getInfoCursor\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"directoryResolver\", function() { return _infoCursor__WEBPACK_IMPORTED_MODULE_3__[\"directoryResolver\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renameStaleInfoDirectories\", function() { return _infoCursor__WEBPACK_IMPORTED_MODULE_3__[\"renameStaleInfoDirectories\"]; });\n\n/* harmony import */ var _inquire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inquire */ \"./transpiler/utils/inquire/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"composeAggregated\", function() { return _inquire__WEBPACK_IMPORTED_MODULE_4__[\"composeAggregated\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listDecompileFiles\", function() { return _inquire__WEBPACK_IMPORTED_MODULE_4__[\"listDecompileFiles\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"memoListDecompileFiles\", function() { return _inquire__WEBPACK_IMPORTED_MODULE_4__[\"memoListDecompileFiles\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listTemplates\", function() { return _inquire__WEBPACK_IMPORTED_MODULE_4__[\"listTemplates\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"memoListTemplates\", function() { return _inquire__WEBPACK_IMPORTED_MODULE_4__[\"memoListTemplates\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cloneTemplate\", function() { return _inquire__WEBPACK_IMPORTED_MODULE_4__[\"cloneTemplate\"]; });\n\n/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./regex */ \"./transpiler/utils/regex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"testRegex\", function() { return _regex__WEBPACK_IMPORTED_MODULE_5__[\"testRegex\"]; });\n\n/* harmony import */ var _socketProtocols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./socketProtocols */ \"./transpiler/utils/socketProtocols.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_URL\", function() { return _socketProtocols__WEBPACK_IMPORTED_MODULE_6__[\"REQUEST_URL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RESPONSE_URL\", function() { return _socketProtocols__WEBPACK_IMPORTED_MODULE_6__[\"RESPONSE_URL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VALID_URL\", function() { return _socketProtocols__WEBPACK_IMPORTED_MODULE_6__[\"VALID_URL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_SOURCE\", function() { return _socketProtocols__WEBPACK_IMPORTED_MODULE_6__[\"REQUEST_SOURCE\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RESPONSE_SOURCE\", function() { return _socketProtocols__WEBPACK_IMPORTED_MODULE_6__[\"RESPONSE_SOURCE\"]; });\n\n\n\n//# sourceURL=webpack:///./transpiler/utils/index.js?");

/***/ }),

/***/ "./transpiler/utils/infoCursor/createInfoCursor.js":
/*!*********************************************************!*\
  !*** ./transpiler/utils/infoCursor/createInfoCursor.js ***!
  \*********************************************************/
/*! exports provided: createInfoCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createInfoCursor\", function() { return createInfoCursor; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fs */ \"./transpiler/utils/fs/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./transpiler/utils/constants.js\");\nvar createInfoCursor=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b,c){var d,e,f;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=path__WEBPACK_IMPORTED_MODULE_2___default.a.join(c,_constants__WEBPACK_IMPORTED_MODULE_4__[\"INFO_FILE_NAME\"]),e={name:b,lastUpdated:new Date().getTime()},f=JSON.stringify(e,null,4),a.next=5,Object(_fs__WEBPACK_IMPORTED_MODULE_3__[\"writeFile\"])(d,f);case 5:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();\n\n//# sourceURL=webpack:///./transpiler/utils/infoCursor/createInfoCursor.js?");

/***/ }),

/***/ "./transpiler/utils/infoCursor/directoryResolver.js":
/*!**********************************************************!*\
  !*** ./transpiler/utils/infoCursor/directoryResolver.js ***!
  \**********************************************************/
/*! exports provided: default, directoryResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return directoryResolver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"directoryResolver\", function() { return directoryResolver; });\nvar filterCharacters=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:\" \";return b.reduce(function(a,b){return a.split(b).join(c)},a)},directoryResolver=function(a){return filterCharacters(a,[\"[\",\"]\",\"{\",\"}\",\"(\",\")\",\"|\"]).trim()};// Resolves to a safe naming system\n\n\n//# sourceURL=webpack:///./transpiler/utils/infoCursor/directoryResolver.js?");

/***/ }),

/***/ "./transpiler/utils/infoCursor/getActiveInfoCursors.js":
/*!*************************************************************!*\
  !*** ./transpiler/utils/infoCursor/getActiveInfoCursors.js ***!
  \*************************************************************/
/*! exports provided: getActiveInfoCursors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActiveInfoCursors\", function() { return getActiveInfoCursors; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fs */ \"./transpiler/utils/fs/index.js\");\n/* harmony import */ var _activeCursor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../activeCursor */ \"./transpiler/utils/activeCursor/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./transpiler/utils/constants.js\");\nfunction ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var composeActiveNodeStatPromises=function(a){var b=a.recurseDirectories,c=a.nodePath,d=a.nextFilters,e=a.directories;return e.map(function(a){return new Promise(/*#__PURE__*/function(){var e=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function e(f){var g,h,i,j;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=path__WEBPACK_IMPORTED_MODULE_3___default.a.join(c,a,_constants__WEBPACK_IMPORTED_MODULE_6__[\"INFO_FILE_NAME\"]),e.next=3,Object(_fs__WEBPACK_IMPORTED_MODULE_4__[\"doesFileExist\"])(g);case 3:if(h=e.sent,!h){e.next=28;break}if(i=path__WEBPACK_IMPORTED_MODULE_3___default.a.join(c,a),!d.length){e.next=14;break}return e.t0=f,e.next=10,b(i,composeActiveNodeStatPromises,d);case 10:return e.t1=e.sent,e.abrupt(\"return\",(0,e.t0)(e.t1));case 14:return e.next=16,Object(_activeCursor__WEBPACK_IMPORTED_MODULE_5__[\"doesActiveCursorExist\"])(i);case 16:if(j=e.sent,!j){e.next=28;break}return e.t2=f,e.t3=_objectSpread,e.t4={nodePath:i,node:a},e.t5=JSON,e.next=24,Object(_fs__WEBPACK_IMPORTED_MODULE_4__[\"readFile\"])(g);case 24:return e.t6=e.sent,e.t7=e.t5.parse.call(e.t5,e.t6),e.t8=(0,e.t3)(e.t4,e.t7),e.abrupt(\"return\",(0,e.t2)(e.t8));case 28:return e.abrupt(\"return\",f(null));case 29:case\"end\":return e.stop();}},e)}));return function(){return e.apply(this,arguments)}}())})},getActiveInfoCursors=new Promise(/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=b,a.next=3,Object(_fs__WEBPACK_IMPORTED_MODULE_4__[\"recurseDirectories\"])(\"src\",composeActiveNodeStatPromises,[_constants__WEBPACK_IMPORTED_MODULE_6__[\"CLIENT_EXCLUDES\"],_constants__WEBPACK_IMPORTED_MODULE_6__[\"TEST_EXCLUDES\"],_constants__WEBPACK_IMPORTED_MODULE_6__[\"VARIATION_EXCLUDES\"]]);case 3:return a.t1=a.sent,a.abrupt(\"return\",(0,a.t0)(a.t1));case 5:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}());\n\n//# sourceURL=webpack:///./transpiler/utils/infoCursor/getActiveInfoCursors.js?");

/***/ }),

/***/ "./transpiler/utils/infoCursor/getInfoCursor.js":
/*!******************************************************!*\
  !*** ./transpiler/utils/infoCursor/getInfoCursor.js ***!
  \******************************************************/
/*! exports provided: default, getInfoCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getInfoCursor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInfoCursor\", function() { return getInfoCursor; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fs */ \"./transpiler/utils/fs/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./transpiler/utils/constants.js\");\nfunction ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var getInfoCursor=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b){var c,d,e,f=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=!!(1<f.length&&void 0!==f[1])&&f[1],d=path__WEBPACK_IMPORTED_MODULE_3___default.a.join(b,_constants__WEBPACK_IMPORTED_MODULE_5__[\"INFO_FILE_NAME\"]),a.t0=JSON,a.next=5,Object(_fs__WEBPACK_IMPORTED_MODULE_4__[\"readFile\"])(d);case 5:return a.t1=a.sent,e=a.t0.parse.call(a.t0,a.t1),a.abrupt(\"return\",_objectSpread({},e,{},c?{nodePath:b}:{}));case 8:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();\n\n//# sourceURL=webpack:///./transpiler/utils/infoCursor/getInfoCursor.js?");

/***/ }),

/***/ "./transpiler/utils/infoCursor/index.js":
/*!**********************************************!*\
  !*** ./transpiler/utils/infoCursor/index.js ***!
  \**********************************************/
/*! exports provided: createInfoCursor, getActiveInfoCursors, listInfoDirectories, memoListInfoDirectories, setInfoCursor, getInfoCursor, directoryResolver, renameStaleInfoDirectories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createInfoCursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createInfoCursor */ \"./transpiler/utils/infoCursor/createInfoCursor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createInfoCursor\", function() { return _createInfoCursor__WEBPACK_IMPORTED_MODULE_0__[\"createInfoCursor\"]; });\n\n/* harmony import */ var _getActiveInfoCursors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getActiveInfoCursors */ \"./transpiler/utils/infoCursor/getActiveInfoCursors.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getActiveInfoCursors\", function() { return _getActiveInfoCursors__WEBPACK_IMPORTED_MODULE_1__[\"getActiveInfoCursors\"]; });\n\n/* harmony import */ var _listInfoDirectories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listInfoDirectories */ \"./transpiler/utils/infoCursor/listInfoDirectories.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listInfoDirectories\", function() { return _listInfoDirectories__WEBPACK_IMPORTED_MODULE_2__[\"listInfoDirectories\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"memoListInfoDirectories\", function() { return _listInfoDirectories__WEBPACK_IMPORTED_MODULE_2__[\"memoListInfoDirectories\"]; });\n\n/* harmony import */ var _setInfoCursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setInfoCursor */ \"./transpiler/utils/infoCursor/setInfoCursor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setInfoCursor\", function() { return _setInfoCursor__WEBPACK_IMPORTED_MODULE_3__[\"setInfoCursor\"]; });\n\n/* harmony import */ var _getInfoCursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getInfoCursor */ \"./transpiler/utils/infoCursor/getInfoCursor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getInfoCursor\", function() { return _getInfoCursor__WEBPACK_IMPORTED_MODULE_4__[\"getInfoCursor\"]; });\n\n/* harmony import */ var _directoryResolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directoryResolver */ \"./transpiler/utils/infoCursor/directoryResolver.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"directoryResolver\", function() { return _directoryResolver__WEBPACK_IMPORTED_MODULE_5__[\"directoryResolver\"]; });\n\n/* harmony import */ var _renameStaleInfoDirectories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renameStaleInfoDirectories */ \"./transpiler/utils/infoCursor/renameStaleInfoDirectories.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renameStaleInfoDirectories\", function() { return _renameStaleInfoDirectories__WEBPACK_IMPORTED_MODULE_6__[\"renameStaleInfoDirectories\"]; });\n\n\n\n//# sourceURL=webpack:///./transpiler/utils/infoCursor/index.js?");

/***/ }),

/***/ "./transpiler/utils/infoCursor/listInfoDirectories.js":
/*!************************************************************!*\
  !*** ./transpiler/utils/infoCursor/listInfoDirectories.js ***!
  \************************************************************/
/*! exports provided: listInfoDirectories, memoListInfoDirectories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listInfoDirectories\", function() { return listInfoDirectories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"memoListInfoDirectories\", function() { return memoListInfoDirectories; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fs */ \"./transpiler/utils/fs/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./transpiler/utils/constants.js\");\nfunction ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var listInfoDirectories=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function a(b){var c,d,e,f,g,h=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=1<h.length&&void 0!==h[1]?h[1]:[],d=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function a(b){var c;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=path__WEBPACK_IMPORTED_MODULE_4___default.a.join(b,_constants__WEBPACK_IMPORTED_MODULE_6__[\"INFO_FILE_NAME\"]),a.next=3,Object(_fs__WEBPACK_IMPORTED_MODULE_5__[\"doesFileExist\"])(c);case 3:return a.abrupt(\"return\",a.sent);case 4:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),a.next=4,Object(_fs__WEBPACK_IMPORTED_MODULE_5__[\"getDirectories\"])(b,d);case 4:return e=a.sent,f=e.filter(function(a){return!c.includes(a)}).map(function(a){return new Promise(/*#__PURE__*/function(){var c=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function c(d){var e,f,g;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=path__WEBPACK_IMPORTED_MODULE_4___default.a.join(b,a,_constants__WEBPACK_IMPORTED_MODULE_6__[\"INFO_FILE_NAME\"]),c.t0=JSON,c.next=4,Object(_fs__WEBPACK_IMPORTED_MODULE_5__[\"readFile\"])(e);case 4:return c.t1=c.sent,f=c.t0.parse.call(c.t0,c.t1),g=f.name,c.abrupt(\"return\",d([g,a]));case 8:case\"end\":return c.stop();}},c)}));return function(){return c.apply(this,arguments)}}())}),a.next=8,Promise.all(f);case 8:return g=a.sent,a.abrupt(\"return\",g.reduce(function(a,b){var c=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(b,2),d=c[0],e=c[1];return _objectSpread({},a,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},d,e))},{}));case 10:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),memoListInfoDirectories=function(){var a={};return(/*#__PURE__*/function(){var b=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function b(c){var d,e,f,g,h=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(d=1<h.length&&void 0!==h[1]?h[1]:[],e=c.toUpperCase(),f=Object.keys(a).some(function(a){return a===e}),!f){b.next=7;break}return b.abrupt(\"return\",a[e]);case 7:return b.next=9,listInfoDirectories(c,d);case 9:return g=b.sent,a[e]=g,b.abrupt(\"return\",g);case 12:case\"end\":return b.stop();}},b)}));return function(){return b.apply(this,arguments)}}())};\n\n//# sourceURL=webpack:///./transpiler/utils/infoCursor/listInfoDirectories.js?");

/***/ }),

/***/ "./transpiler/utils/infoCursor/renameStaleInfoDirectories.js":
/*!*******************************************************************!*\
  !*** ./transpiler/utils/infoCursor/renameStaleInfoDirectories.js ***!
  \*******************************************************************/
/*! exports provided: default, renameStaleInfoDirectories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renameStaleInfoDirectories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renameStaleInfoDirectories\", function() { return renameStaleInfoDirectories; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./transpiler/utils/constants.js\");\n/* harmony import */ var _directoryResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directoryResolver */ \"./transpiler/utils/infoCursor/directoryResolver.js\");\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fs */ \"./transpiler/utils/fs/index.js\");\n/* harmony import */ var _activeCursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../activeCursor */ \"./transpiler/utils/activeCursor/index.js\");\nvar composeStaleDirectoryPromises=function(a){var b=a.recurseDirectories,c=a.nodePath,d=a.nextFilters,e=a.directories;return e.map(function(a){return new Promise(/*#__PURE__*/function(){var e=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function e(f){var g,h,i,j,k,l,m,n;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=path__WEBPACK_IMPORTED_MODULE_2___default.a.join(c,a,_constants__WEBPACK_IMPORTED_MODULE_3__[\"INFO_FILE_NAME\"]),e.next=3,Object(_fs__WEBPACK_IMPORTED_MODULE_5__[\"doesFileExist\"])(g);case 3:if(h=e.sent,!h){e.next=29;break}if(i=path__WEBPACK_IMPORTED_MODULE_2___default.a.join(c,a),!d.length){e.next=9;break}return e.next=9,b(i,composeStaleDirectoryPromises,d);case 9:return e.t0=JSON,e.next=12,Object(_fs__WEBPACK_IMPORTED_MODULE_5__[\"readFile\"])(g);case 12:if(e.t1=e.sent,j=e.t0.parse.call(e.t0,e.t1),k=j.name,l=a===Object(_directoryResolver__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(k),l){e.next=29;break}return m=path__WEBPACK_IMPORTED_MODULE_2___default.a.join(c,Object(_directoryResolver__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(k)),e.next=20,Object(_activeCursor__WEBPACK_IMPORTED_MODULE_6__[\"doesActiveCursorExist\"])(i);case 20:if(n=e.sent,!n){e.next=24;break}return e.next=24,Object(_activeCursor__WEBPACK_IMPORTED_MODULE_6__[\"deactivateCursor\"])(i);case 24:return e.next=26,Object(_fs__WEBPACK_IMPORTED_MODULE_5__[\"rename\"])(i,m);case 26:if(!n){e.next=29;break}return e.next=29,Object(_activeCursor__WEBPACK_IMPORTED_MODULE_6__[\"activateCursor\"])(m);case 29:return e.abrupt(\"return\",f());case 30:case\"end\":return e.stop();}},e)}));return function(){return e.apply(this,arguments)}}())})},renameStaleInfoDirectories=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(_fs__WEBPACK_IMPORTED_MODULE_5__[\"recurseDirectories\"])(\"src\",composeStaleDirectoryPromises,[_constants__WEBPACK_IMPORTED_MODULE_3__[\"CLIENT_EXCLUDES\"],_constants__WEBPACK_IMPORTED_MODULE_3__[\"TEST_EXCLUDES\"],_constants__WEBPACK_IMPORTED_MODULE_3__[\"VARIATION_EXCLUDES\"]]);case 2:return a.abrupt(\"return\",a.sent);case 3:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();\n\n//# sourceURL=webpack:///./transpiler/utils/infoCursor/renameStaleInfoDirectories.js?");

/***/ }),

/***/ "./transpiler/utils/infoCursor/setInfoCursor.js":
/*!******************************************************!*\
  !*** ./transpiler/utils/infoCursor/setInfoCursor.js ***!
  \******************************************************/
/*! exports provided: default, setInfoCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setInfoCursor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setInfoCursor\", function() { return setInfoCursor; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _getInfoCursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getInfoCursor */ \"./transpiler/utils/infoCursor/getInfoCursor.js\");\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fs */ \"./transpiler/utils/fs/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./transpiler/utils/constants.js\");\nfunction ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var setInfoCursor=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b,c){var d,e,f,g,h;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=path__WEBPACK_IMPORTED_MODULE_3___default.a.join(b,_constants__WEBPACK_IMPORTED_MODULE_6__[\"INFO_FILE_NAME\"]),a.next=3,Object(_getInfoCursor__WEBPACK_IMPORTED_MODULE_4__[\"getInfoCursor\"])(b);case 3:return e=a.sent,f=c(e),g=_objectSpread({},f,{lastUpdated:new Date().getTime()}),h=JSON.stringify(g,null,4),a.next=9,Object(_fs__WEBPACK_IMPORTED_MODULE_5__[\"writeFile\"])(d,h);case 9:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();\n\n//# sourceURL=webpack:///./transpiler/utils/infoCursor/setInfoCursor.js?");

/***/ }),

/***/ "./transpiler/utils/inquire/aggregated.js":
/*!************************************************!*\
  !*** ./transpiler/utils/inquire/aggregated.js ***!
  \************************************************/
/*! exports provided: default, composeAggregated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return composeAggregated; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"composeAggregated\", function() { return composeAggregated; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);\nfunction ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var composeAggregated=function(a){var b=a,c=function(a){var c=_objectSpread({},b,{},a);b=Object.entries(c).reduce(function(a,b){var c=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(b,2),d=c[0],e=c[1];return e?_objectSpread({},a,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()({},d,e)):a},{})},d=function(){return b},e={getAnswers:d,setAnswers:c};return{aggregated:function aggregated(a){var b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];return(/*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function d(){var f,g,h,i,j,k,l,m,n,o=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:for(f=[],g=o.length,h=Array(g),i=0;i<g;i++)h[i]=o[i];return b?(j=h[0],k=h[1],l=h.slice(2),c(k),f=[j,e].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(l))):(m=h[0],n=h.slice(1),c(m),f=[e].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(n))),d.next=5,a.apply(null,f);case 5:return d.abrupt(\"return\",d.sent);case 6:case\"end\":return d.stop();}},d)})))},getAnswers:d,setAnswers:c}};\n\n//# sourceURL=webpack:///./transpiler/utils/inquire/aggregated.js?");

/***/ }),

/***/ "./transpiler/utils/inquire/index.js":
/*!*******************************************!*\
  !*** ./transpiler/utils/inquire/index.js ***!
  \*******************************************/
/*! exports provided: composeAggregated, listDecompileFiles, memoListDecompileFiles, listTemplates, memoListTemplates, cloneTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aggregated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregated */ \"./transpiler/utils/inquire/aggregated.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"composeAggregated\", function() { return _aggregated__WEBPACK_IMPORTED_MODULE_0__[\"composeAggregated\"]; });\n\n/* harmony import */ var _listDecompileFiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listDecompileFiles */ \"./transpiler/utils/inquire/listDecompileFiles.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listDecompileFiles\", function() { return _listDecompileFiles__WEBPACK_IMPORTED_MODULE_1__[\"listDecompileFiles\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"memoListDecompileFiles\", function() { return _listDecompileFiles__WEBPACK_IMPORTED_MODULE_1__[\"memoListDecompileFiles\"]; });\n\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ \"./transpiler/utils/inquire/templates.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"listTemplates\", function() { return _templates__WEBPACK_IMPORTED_MODULE_2__[\"listTemplates\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"memoListTemplates\", function() { return _templates__WEBPACK_IMPORTED_MODULE_2__[\"memoListTemplates\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cloneTemplate\", function() { return _templates__WEBPACK_IMPORTED_MODULE_2__[\"cloneTemplate\"]; });\n\n\n\n//# sourceURL=webpack:///./transpiler/utils/inquire/index.js?");

/***/ }),

/***/ "./transpiler/utils/inquire/listDecompileFiles.js":
/*!********************************************************!*\
  !*** ./transpiler/utils/inquire/listDecompileFiles.js ***!
  \********************************************************/
/*! exports provided: listDecompileFiles, memoListDecompileFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listDecompileFiles\", function() { return listDecompileFiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"memoListDecompileFiles\", function() { return memoListDecompileFiles; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fs */ \"./transpiler/utils/fs/index.js\");\n/* harmony import */ var _infoCursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infoCursor */ \"./transpiler/utils/infoCursor/index.js\");\nvar listDecompileFiles=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b,c){var d,e,f,g,h,i,j,k=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=2<k.length&&void 0!==k[2]?k[2]:[],a.next=3,Object(_infoCursor__WEBPACK_IMPORTED_MODULE_4__[\"getInfoCursor\"])(b);case 3:return e=a.sent,f=e.buildOutput,g=void 0===f?[\"build.js\"]:f,h=1===g.length?g:[],i=[].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(d),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(h)),a.next=10,Object(_fs__WEBPACK_IMPORTED_MODULE_3__[\"listFiles\"])(b,i);case 10:return j=a.sent,a.abrupt(\"return\",j.map(function(a){return\"\".concat(c,\" '\").concat(a,\"'\")}));case 12:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),memoListDecompileFiles=function(){var a={};return(/*#__PURE__*/function(){var b=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function b(c,d){var e,f,g,h,i=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(e=2<i.length&&void 0!==i[2]?i[2]:[],f=c.toUpperCase(),g=Object.keys(a).some(function(a){return a===f}),!g){b.next=7;break}return b.abrupt(\"return\",a[f]);case 7:return b.next=9,listDecompileFiles(c,d,e);case 9:return h=b.sent,a[f]=h,b.abrupt(\"return\",h);case 12:case\"end\":return b.stop();}},b)}));return function(){return b.apply(this,arguments)}}())};\n\n//# sourceURL=webpack:///./transpiler/utils/inquire/listDecompileFiles.js?");

/***/ }),

/***/ "./transpiler/utils/inquire/templates.js":
/*!***********************************************!*\
  !*** ./transpiler/utils/inquire/templates.js ***!
  \***********************************************/
/*! exports provided: listTemplates, memoListTemplates, cloneTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listTemplates\", function() { return listTemplates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"memoListTemplates\", function() { return memoListTemplates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneTemplate\", function() { return cloneTemplate; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fs */ \"./transpiler/utils/fs/index.js\");\nvar listTemplates=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(_fs__WEBPACK_IMPORTED_MODULE_3__[\"getDirectories\"])(\"templates\");case 2:return a.abrupt(\"return\",a.sent);case 3:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),memoListTemplates=function(){var a=[];return(/*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function b(){var c;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(!a.length){b.next=4;break}return b.abrupt(\"return\",a);case 4:return b.next=6,listTemplates();case 6:return c=b.sent,a=c,b.abrupt(\"return\",c);case 9:case\"end\":return b.stop();}},b)})))},cloneTemplate=/*#__PURE__*/function(){var a=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function a(b,c){var d;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=path__WEBPACK_IMPORTED_MODULE_2___default.a.join(\"templates\",c),a.next=3,Object(_fs__WEBPACK_IMPORTED_MODULE_3__[\"copy\"])(d,b);case 3:case\"end\":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();\n\n//# sourceURL=webpack:///./transpiler/utils/inquire/templates.js?");

/***/ }),

/***/ "./transpiler/utils/regex.js":
/*!***********************************!*\
  !*** ./transpiler/utils/regex.js ***!
  \***********************************/
/*! exports provided: testRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testRegex\", function() { return testRegex; });\nvar testRegex=function(a,b){var c=!1;return!a||(c=a.test(b),a.lastIndex=0),c};\n\n//# sourceURL=webpack:///./transpiler/utils/regex.js?");

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

/***/ 1:
/*!*********************************************!*\
  !*** multi ./transpiler/hotReload/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\matth\\WebstormProjects\\echo-transpiler\\transpiler\\hotReload\\index.js */\"./transpiler/hotReload/index.js\");\n\n\n//# sourceURL=webpack:///multi_./transpiler/hotReload/index.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toArray":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/toArray" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs-extra\");\n\n//# sourceURL=webpack:///external_%22fs-extra%22?");

/***/ }),

/***/ "fuzzy":
/*!************************!*\
  !*** external "fuzzy" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fuzzy\");\n\n//# sourceURL=webpack:///external_%22fuzzy%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });