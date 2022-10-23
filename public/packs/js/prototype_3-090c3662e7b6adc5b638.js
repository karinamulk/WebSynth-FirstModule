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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_3.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_3.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/prototype_3.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototypes_prototype_1_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prototypes/prototype_1/utilities */ "./app/javascript/prototypes/prototype_1/utilities.js");

document.addEventListener('DOMContentLoaded', function () {
  console.log('Test ', Object(_prototypes_prototype_1_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(0, 1));
  var container = document.getElementById('prototype_3');
  var framebox = document.createElement('div');
  var frame = document.createElement('div');
  var frame2 = document.createElement('div');
  var frame3 = document.createElement('div');
  var frame4 = document.createElement('div');
  var frame5 = document.createElement('div');
  var frame6 = document.createElement('div');
  var frame7 = document.createElement('div');
  var frame8 = document.createElement('div');
  var frame9 = document.createElement('div');
  var man = document.createElement('div');
  var manbody = document.createElement('div');
  var ear = document.createElement('div');
  var ear2 = document.createElement('div');
  var eye = document.createElement('div');
  var eye2 = document.createElement('div');
  var mouth = document.createElement('div');
  var teeth = document.createElement('div');
  var teeth2 = document.createElement('div');
  var text = document.createElement('p');
  text.innerText = 'Who am I?';
  framebox.classList.add('framebox');
  frame.classList.add('frame');
  frame2.classList.add('frame');
  frame3.classList.add('frame');
  frame4.classList.add('frame');
  frame5.classList.add('frame');
  frame6.classList.add('frame');
  frame7.classList.add('frame');
  frame8.classList.add('frame');
  frame9.classList.add('frame');
  man.classList.add('man');
  manbody.classList.add('manbody');
  ear.classList.add('ear');
  ear2.classList.add('ear');
  ear2.classList.add('ear2');
  eye.classList.add('eye');
  eye2.classList.add('eye');
  eye2.classList.add('eye2');
  mouth.classList.add('mouth');
  teeth.classList.add('teeth');
  teeth2.classList.add('teeth');
  teeth2.classList.add('teeth2');
  container.appendChild(framebox);
  framebox.appendChild(frame);
  framebox.appendChild(frame2);
  framebox.appendChild(frame3);
  framebox.appendChild(frame4);
  framebox.appendChild(frame5);
  framebox.appendChild(frame6);
  framebox.appendChild(frame7);
  framebox.appendChild(frame8);
  framebox.appendChild(frame9);
  container.appendChild(man);
  man.appendChild(manbody);
  man.appendChild(ear);
  man.appendChild(ear2);
  man.appendChild(eye);
  man.appendChild(eye2);
  man.appendChild(mouth);
  mouth.appendChild(teeth);
  mouth.appendChild(teeth2);
  frame9.appendChild(text);
});

/***/ }),

/***/ "./app/javascript/prototypes/prototype_1/utilities.js":
/*!************************************************************!*\
  !*** ./app/javascript/prototypes/prototype_1/utilities.js ***!
  \************************************************************/
/*! exports provided: getRandomArbitrary, sample, getFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArbitrary", function() { return getRandomArbitrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrame", function() { return getFrame; });
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getFrame() {
  return document.getElementById('frame');
}



/***/ })

/******/ });
//# sourceMappingURL=prototype_3-090c3662e7b6adc5b638.js.map