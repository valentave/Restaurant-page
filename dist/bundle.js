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

/***/ "./src/generateFooter.js":
/*!*******************************!*\
  !*** ./src/generateFooter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateFooter: () => (/* binding */ generateFooter)\n/* harmony export */ });\n/* harmony import */ var _github_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-mark.svg */ \"./src/github-mark.svg\");\n\r\n\r\nfunction generateFooter() {\r\n    const element = document.createElement('footer');\r\n    element.classList.add('footer')\r\n    const gitHubIcon =  new Image();\r\n    gitHubIcon.src = _github_mark_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n    element.innerHTML = `\r\n        <p>Desarrollado por</p>\r\n        <a href=\"https://github.com/valentave\"><img src=\"${gitHubIcon.src}\"></a>\r\n        <p>Valentín Taverna</p>\r\n    `;\r\n    return element\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/generateFooter.js?");

/***/ }),

/***/ "./src/generateHeader.js":
/*!*******************************!*\
  !*** ./src/generateHeader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHeader: () => (/* binding */ generateHeader)\n/* harmony export */ });\n/* harmony import */ var _generateNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateNav.js */ \"./src/generateNav.js\");\n\r\n\r\nfunction generateHeader() {\r\n    const element = document.createElement('header');\r\n    element.classList.add('header');\r\n    element.innerHTML = `\r\n        <h1 class=\"header__logo\">El Bodegón Argentino</h1>\r\n    `;    \r\n    const nav = (0,_generateNav_js__WEBPACK_IMPORTED_MODULE_0__.generateNav)();\r\n    element.appendChild(nav);\r\n    return element\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/generateHeader.js?");

/***/ }),

/***/ "./src/generateHero.js":
/*!*****************************!*\
  !*** ./src/generateHero.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHero: () => (/* binding */ generateHero)\n/* harmony export */ });\nfunction generateHero() {\r\n    const element = document.createElement('section');\r\n    element.classList.add('hero')\r\n    element.innerHTML = `\r\n        <section class=\"hero\">\r\n            <h2 class=\"hero__h2\">¿Quiénes somos?</h2>\r\n            <p class=\"hero__p\">Somos un comedor familiar con más de 40 años de experiencia en el rubro. En <strong>El Bodegón Argentino</strong>, te ofrecemos platos tradicionales llenos de sabor y calidad, cuidadosamente preparados para transportarte a la esencia misma de Argentina. Disfrutá de jugosos cortes de carne a la parrilla, riquísimas empanadas y una variedad de opciones para todos los gustos.</p>\r\n        </section>\r\n    `;\r\n    return element\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/generateHero.js?");

/***/ }),

/***/ "./src/generateNav.js":
/*!****************************!*\
  !*** ./src/generateNav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateNav: () => (/* binding */ generateNav)\n/* harmony export */ });\nfunction generateNav() {\r\n    const element = document.createElement('nav');\r\n    element.classList.add('nav')\r\n    element.innerHTML = `\r\n        <button class=\"nav__button nav__home\">Home</button>\r\n        <button class=\"nav__button nav__menu\">Menu</button>\r\n        <button class=\"nav__button nav__contact\">Contact</button>\r\n    `;\r\n    return element\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/generateNav.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateHeader.js */ \"./src/generateHeader.js\");\n/* harmony import */ var _generateHero_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateHero.js */ \"./src/generateHero.js\");\n/* harmony import */ var _generateFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateFooter.js */ \"./src/generateFooter.js\");\n\r\n\r\n\r\n\r\nconst body = document.querySelector('body');\r\nconst content = document.createElement('div');\r\ncontent.classList.add('content');\r\nbody.appendChild(content);\r\n\r\nconst main = document.createElement('main');\r\nmain.classList.add('main');\r\n\r\n// Initialize the header\r\ncontent.appendChild((0,_generateHeader_js__WEBPACK_IMPORTED_MODULE_0__.generateHeader)());  \r\n\r\n// Initialize the hero\r\ncontent.appendChild(main);\r\nmain.appendChild((0,_generateHero_js__WEBPACK_IMPORTED_MODULE_1__.generateHero)());\r\n\r\n\r\n// Initialize the footer\r\ncontent.appendChild((0,_generateFooter_js__WEBPACK_IMPORTED_MODULE_2__.generateFooter)());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/github-mark.svg":
/*!*****************************!*\
  !*** ./src/github-mark.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6fa18895f6e6c7772cab.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/github-mark.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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