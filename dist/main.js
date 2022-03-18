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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n // this module contains all the logic that interacts with the DOM\n\nvar startNewGame = function startNewGame() {\n  var player1Name = prompt('Enter your name');\n  var player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var player1Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startNewGame);\n\n//# sourceURL=webpack://my-webpack-project/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nvar Gameboard = function Gameboard() {\n  var board = [];\n  var ships = []; // init\n\n  for (var i = 0; i < 10; i += 1) {\n    board[i] = [];\n\n    for (var j = 0; j < 10; j += 1) {\n      board[i].push(null);\n    }\n  }\n\n  var canPlace = function canPlace(x, y, direction, length) {\n    switch (direction) {\n      case 'x':\n        if (x + length > board.length) return false;\n\n        for (var _i = 0; _i < length; _i += 1) {\n          if (board[x + _i][y] !== null) return false;\n        }\n\n        break;\n\n      case 'y':\n        if (y + length > board.length) return false;\n\n        for (var _j = 0; _j < length; _j += 1) {\n          if (board[x][y + _j] !== null) return false;\n        }\n\n        break;\n\n      default:\n    }\n\n    return true;\n  };\n\n  var placeShip = function placeShip(x, y, direction, length) {\n    if (!canPlace(x, y, direction, length)) {\n      return false;\n    }\n\n    var shipCount = ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length));\n\n    if (direction === 'x') {\n      for (var run = x; run < x + length; run += 1) {\n        board[run][y] = shipCount;\n        ships[shipCount - 1].coordinates.push([run, y]);\n      }\n    }\n\n    if (direction === 'y') {\n      for (var rise = y; rise < y + length; rise += 1) {\n        board[x][rise] = shipCount;\n        ships[shipCount - 1].coordinates.push([x, rise]);\n      }\n    }\n\n    return true;\n  };\n\n  var receiveAttack = function receiveAttack(x, y) {\n    if (board[x][y] === 0) {\n      return false;\n    }\n\n    if (board[x][y] === null) {\n      board[x][y] = 0;\n      return true;\n    }\n\n    var ship = ships[board[x][y] - 1];\n    var i;\n\n    for (i = 0; i < ship.coordinates.length; i += 1) {\n      if (ship.coordinates[i][0] === x && ship.coordinates[i][1] === y) {\n        break;\n      }\n    }\n\n    return ships[board[x][y] - 1].hit(i);\n  };\n\n  var checkWin = function checkWin() {\n    var win = true;\n    ships.forEach(function (e) {\n      e.squares.forEach(function (i) {\n        if (i !== 'hit') {\n          win = false;\n        }\n      });\n    });\n    return win;\n  };\n\n  return {\n    board: board,\n    placeShip: placeShip,\n    ships: ships,\n    canPlace: canPlace,\n    checkWin: checkWin,\n    receiveAttack: receiveAttack\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://my-webpack-project/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n(0,_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Player = function Player(newName) {\n  var name = newName;\n\n  if (name === undefined) {\n    name = 'Player';\n  }\n\n  var attack = function attack(board, x, y) {\n    var xCoord = x;\n    var yCoord = y;\n\n    if (xCoord === undefined || yCoord === undefined) {\n      xCoord = Math.floor(Math.random() * 10);\n      yCoord = Math.floor(Math.random() * 10);\n    }\n\n    return board.receiveAttack(xCoord, yCoord);\n  };\n\n  return {\n    name: name,\n    attack: attack\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://my-webpack-project/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar Ship = function Ship(shipLength) {\n  var length = shipLength;\n\n  var squares = _toConsumableArray(Array(length).keys());\n\n  var coordinates = [];\n\n  var hit = function hit(key) {\n    if (squares[key] === 'hit') {\n      return false;\n    }\n\n    squares[key] = 'hit';\n    return true;\n  };\n\n  var isSunk = function isSunk() {\n    return squares.reduce(function (prev, curr) {\n      return prev && curr === 'hit';\n    }, true);\n  };\n\n  return {\n    squares: squares,\n    coordinates: coordinates,\n    length: length,\n    hit: hit,\n    isSunk: isSunk\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://my-webpack-project/./src/ship.js?");

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