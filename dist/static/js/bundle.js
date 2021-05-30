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

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _components_CommonDialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CommonDialog.js */ \"./src/components/CommonDialog.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar App = function App(props) {\n  _classCallCheck(this, App);\n\n  var dialog = new _components_CommonDialog_js__WEBPACK_IMPORTED_MODULE_0__.default({\n    props: props\n  });\n  dialog.open();\n};\n\n\n\n//# sourceURL=webpack://liveconnect-frontend-task/./src/App.js?");

/***/ }),

/***/ "./src/components/CommonDialog.js":
/*!****************************************!*\
  !*** ./src/components/CommonDialog.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CommonDialog)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CommonDialog = /*#__PURE__*/function () {\n  function CommonDialog(_ref) {\n    var props = _ref.props;\n\n    _classCallCheck(this, CommonDialog);\n\n    this.isModalOpen = false;\n    this.data = null;\n    this.modalContainer = document.createElement('div');\n    this.modalContainer.className = 'modalContainer';\n    this.modalContainer.classList.add('hidden');\n    props.appendChild(this.modalContainer);\n    this.render();\n  }\n\n  _createClass(CommonDialog, [{\n    key: \"open\",\n    value: function open() {\n      this.isModalOpen = !this.isModalOpen;\n      var modal = document.querySelector('.modalContainer');\n      modal.classList.toggle('hidden');\n    }\n  }, {\n    key: \"close\",\n    value: function close() {}\n  }, {\n    key: \"changeTtile\",\n    value: function changeTtile() {}\n  }, {\n    key: \"editable\",\n    value: function editable() {}\n  }, {\n    key: \"save\",\n    value: function save() {}\n  }, {\n    key: \"cancel\",\n    value: function cancel() {}\n  }, {\n    key: \"getDataSource\",\n    value: function getDataSource() {}\n  }, {\n    key: \"setDataSource\",\n    value: function setDataSource() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var background = document.createElement('div');\n      background.className = 'background';\n      var modalContents = document.createElement('section');\n      modalContents.className = 'modalContents';\n      this.modalContainer.appendChild(background);\n      this.modalContainer.appendChild(modalContents);\n    }\n  }]);\n\n  return CommonDialog;\n}();\n\n\n\n//# sourceURL=webpack://liveconnect-frontend-task/./src/components/CommonDialog.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ \"./src/App.js\");\n\nvar app = new _App_js__WEBPACK_IMPORTED_MODULE_0__.default(document.querySelector('.app'));\n\n//# sourceURL=webpack://liveconnect-frontend-task/./src/main.js?");

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
/******/ })()
;