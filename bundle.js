/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// src/index.js
	var greet = __webpack_require__(1);   // Import the greet function
	var image = __webpack_require__(2);



	greet('Webpack');

	image('http://placekitten.com/g/400/200');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// src/greet.js
	function greet(who) {
	    document.write('Hello ' + who + '!');
	};

	module.exports = greet;

/***/ },
/* 2 */
/***/ function(module, exports) {

	function foto(src){
		document.write('<img src=' + src + '>');
		// document.getElementById("'+ id +'").innerHTML = '<img src=' + src + '>';
	};

	module.exports = foto;

/***/ }
/******/ ]);