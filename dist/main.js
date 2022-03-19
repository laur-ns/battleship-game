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

/***/ "./src/drag-ships.js":
/*!***************************!*\
  !*** ./src/drag-ships.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retrieveDraggedBoard),\n/* harmony export */   \"setShipListeners\": () => (/* binding */ setShipListeners)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nvar board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nvar grid = null;\nvar currentShip = null;\nvar rootElem = null;\nvar length = 0;\nvar direction = 'x';\n\nvar isGameReady = function isGameReady() {\n  if (board.ships.length !== 5) {\n    return;\n  }\n\n  grid = null;\n  currentShip = null;\n  var playerBoard = board;\n  var computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var modal = document.querySelector('.modal');\n  var shipsElem = document.querySelectorAll('.ships__count > *');\n  board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  modal.classList.toggle('show');\n  shipsElem.forEach(function (e) {\n    e.classList.remove('disabled');\n  });\n  (0,_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerBoard, computerBoard);\n}; // ---- ---- //\n// drag & drop handlers //\n\n\nfunction handleDragStart(e) {\n  length = Number(e.target.classList[1]);\n  currentShip = e.target;\n}\n\nfunction handleDragEnter(e) {\n  e.preventDefault();\n\n  if (e.target.classList.contains('user__grid')) {\n    return;\n  }\n\n  e.target.classList.add('drag-over');\n}\n\nfunction handleDragLeave(e) {\n  e.target.classList.remove('drag-over');\n}\n\nfunction handleDrop(e) {\n  e.target.classList.remove('drag-over');\n\n  if (e.target.classList.contains('user__grid')) {\n    return;\n  }\n\n  if (currentShip === null) {\n    return;\n  }\n\n  var i = Number(e.target.classList[1]);\n  var x = Number(i % 10);\n  var y = Math.floor(i / 10);\n\n  if (!board.canPlace(x, y, direction, length)) {\n    alert('Can\\'t place there!');\n    return;\n  }\n\n  currentShip.classList.add('disabled');\n  currentShip.setAttribute('draggable', 'false');\n  currentShip.removeEventListener('dragstart', handleDragStart);\n  var shipLength = i + length;\n  var increment = 1;\n\n  if (direction === 'y') {\n    increment = 10;\n    shipLength = i + length * 10;\n  }\n\n  for (i; i < shipLength; i += increment) {\n    var square = grid.querySelector(\".\".concat(CSS.escape(i)));\n    square.classList.add('temporary-set');\n  }\n\n  board.placeShip(x, y, direction, length);\n  currentShip = null;\n  isGameReady();\n}\n\nfunction handleDragOver(e) {\n  e.preventDefault();\n} // ---- ---- //\n// ---- ---- //\n\n\nvar setShipListeners = function setShipListeners(playerElem) {\n  rootElem = playerElem;\n  var modal = document.querySelector('.modal');\n  var axisToggle = document.querySelector('.ships__axis-toggle');\n  var ships = rootElem.querySelectorAll('.ships__count > *');\n  grid = rootElem.querySelector('.user__grid');\n  modal.classList.toggle('show');\n  axisToggle.addEventListener('click', function () {\n    if (direction === 'x') {\n      direction = 'y';\n      axisToggle.textContent = 'Direction: y';\n    } else {\n      direction = 'x';\n      axisToggle.textContent = 'Direction: x';\n    }\n  });\n  ships.forEach(function (e) {\n    e.addEventListener('dragstart', handleDragStart);\n  });\n  grid.addEventListener('dragover', handleDragOver);\n  grid.addEventListener('drop', handleDrop);\n  grid.addEventListener('dragleave', handleDragLeave);\n  grid.addEventListener('dragenter', handleDragEnter);\n};\n\nfunction retrieveDraggedBoard() {\n  return board;\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/drag-ships.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n // this module contains all the logic that interacts\n// with the DOM\n\nvar playerTurn = 1;\nvar isGameReady = false;\n\nvar updateShipCount = function updateShipCount(playerElem, board) {\n  var shipsElems = playerElem.querySelectorAll('.ships__count > *');\n  var ships = board.ships;\n  var emptyDiv = document.createElement('div');\n\n  var sortedShips = _toConsumableArray(ships).sort(function (a, b) {\n    return a.length - b.length;\n  });\n\n  console.log(sortedShips);\n  console.log(shipsElems);\n\n  for (var i = 0; i < 5; i += 1) {\n    shipsElems[i].innerHTML = '';\n\n    for (var j = 0; j < sortedShips[i].squares.length; j += 1) {\n      if (sortedShips[i].squares[j] === 'hit') {\n        shipsElems[i].append(emptyDiv.cloneNode());\n      }\n    }\n  }\n};\n\nvar displayShips = function displayShips(board, playerElem) {\n  var grid = playerElem.querySelector('.user__grid');\n  grid.innerHTML = '';\n  var square = document.createElement('div');\n  square.classList.add('user__square');\n\n  for (var i = 0; i < 100; i += 1) {\n    var newSquare = square.cloneNode();\n    newSquare.classList.add(i);\n    var x = Number(i % 10);\n    var y = Math.floor(i / 10);\n\n    if (board.board[x][y] > 0) {\n      newSquare.classList.add('user__square--ship');\n    }\n\n    grid.append(newSquare);\n  }\n};\n\nvar placeRandomShips = function placeRandomShips(board) {\n  var x = Math.floor(Math.random() * 5);\n  var y = Math.floor(Math.random() * 5);\n  var direction = Math.random() > 0.5 ? 'y' : 'x';\n  var length = [2, 3, 3, 4, 5];\n  var isPlaced = false;\n\n  for (var i = 0; i < 5; i += 1) {\n    while (!isPlaced) {\n      isPlaced = board.placeShip(x, y, direction, length[i]);\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n      direction = Math.random() > 0.5 ? 'y' : 'x';\n    }\n\n    isPlaced = false;\n  }\n};\n\nvar attackRandomSquare = function attackRandomSquare(squaresList) {\n  var r = Math.floor(Math.random() * 100);\n\n  while (squaresList[r].classList.contains('user__square--hit')) {\n    r = Math.floor(Math.random() * 100);\n  }\n\n  squaresList[r].click();\n};\n\nvar game = function game(name, name2, board, board2) {\n  var p1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n  var p2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name2);\n  var p1Board = board;\n  var p2Board = board2;\n  var p1RootElem = document.querySelector('#player1');\n  var p2RootElem = document.querySelector('#player2');\n  p1RootElem.querySelector('.user__name span').textContent = p1.name;\n  p2RootElem.querySelector('.user__name span').textContent = p2.name;\n  placeRandomShips(p2Board);\n  displayShips(p1Board, p1RootElem);\n  displayShips(p2Board, p2RootElem);\n  var p1Squares = p1RootElem.querySelectorAll('.user__grid > *');\n  var p2Squares = p2RootElem.querySelectorAll('.user__grid > *');\n  p1Squares.forEach(function (e) {\n    e.addEventListener('click', function () {\n      if (!isGameReady) {\n        return;\n      }\n\n      if (playerTurn !== 2) {\n        return;\n      }\n\n      var x = Number(e.classList[1] % 10);\n      var y = Math.floor(e.classList[1] / 10);\n\n      if (!p2.attack(p1Board, x, y)) {\n        return;\n      }\n\n      e.classList.add('user__square--hit');\n      updateShipCount(p1RootElem, p1Board);\n\n      if (p1Board.checkWin()) {\n        alert(\"\".concat(p2.name, \" has won the game!\"));\n        alert('Refresh to end the match (will update this later!)');\n        isGameReady = false;\n      }\n\n      playerTurn = 1;\n    });\n  });\n  p2Squares.forEach(function (e) {\n    e.addEventListener('click', function () {\n      if (!isGameReady) {\n        return;\n      }\n\n      if (playerTurn !== 1) {\n        return;\n      }\n\n      var x = Number(e.classList[1] % 10);\n      var y = Math.floor(e.classList[1] / 10);\n\n      if (!p1.attack(p2Board, x, y)) {\n        return;\n      }\n\n      e.classList.add('user__square--hit');\n      playerTurn = 2;\n\n      if (p2Board.checkWin()) {\n        alert(\"\".concat(p1.name, \" has won the game!\"));\n        alert('Refresh to end the match (will update this later!)');\n        isGameReady = false;\n      }\n\n      setTimeout(function () {\n        playerTurn = 2;\n        attackRandomSquare(p1Squares);\n      }, 700);\n    });\n  });\n};\n\nvar initializeGame = function initializeGame(p1Board, p2Board) {\n  isGameReady = true;\n  game('Player', 'Computer', p1Board, p2Board);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeGame);\n\n//# sourceURL=webpack://my-webpack-project/./src/game.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drag_ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-ships */ \"./src/drag-ships.js\");\n\nvar player1Elem = document.querySelector('#player1');\n(0,_drag_ships__WEBPACK_IMPORTED_MODULE_0__.setShipListeners)(player1Elem);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Player = function Player(newName) {\n  var name = newName;\n\n  if (name === undefined || name === null || name === '') {\n    name = 'Player';\n  }\n\n  var attack = function attack(board, x, y) {\n    var xCoord = x;\n    var yCoord = y;\n\n    if (xCoord === undefined || yCoord === undefined) {\n      xCoord = Math.floor(Math.random() * 10);\n      yCoord = Math.floor(Math.random() * 10);\n    }\n\n    return board.receiveAttack(xCoord, yCoord);\n  };\n\n  return {\n    name: name,\n    attack: attack\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://my-webpack-project/./src/player.js?");

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