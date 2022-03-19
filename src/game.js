import Gameboard from './gameboard';
import Player from './player';
// this module contains all the logic that interacts
// with the DOM

let playerTurn = 2;
let isGameReady = false;

const displayShips = (board, playerElem) => {
  const grid = playerElem.querySelector('.user__grid');
  grid.innerHTML = '';
  board.placeShip(0, 0, 'x', 2);
  board.placeShip(2, 2, 'y', 3);
  board.placeShip(4, 2, 'x', 3);
  board.placeShip(5, 6, 'y', 4);
  board.placeShip(5, 4, 'x', 5);
  const square = document.createElement('div');
  square.classList.add('user__square');
  for (let i = 0; i < 100; i++) {
    const newSquare = square.cloneNode();
    newSquare.classList.add(i);
    const x = Number(i % 10);
    const y = Math.floor(i / 10);
    if (board.board[x][y] > 0) {
      newSquare.classList.add('user__square--ship');
    }
    grid.append(newSquare);
  }
  isGameReady = true;
};

const game = (name, name2) => {
  const p1 = Player(name);
  const p2 = Player(name2);
  const p1Board = Gameboard();
  const p2Board = Gameboard();
  const p1RootElem = document.querySelector('#player1');
  const p2RootElem = document.querySelector('#player2');
  p1RootElem.querySelector('.user__name span').textContent = p1.name;
  p2RootElem.querySelector('.user__name span').textContent = p2.name;

  displayShips(p1Board, p1RootElem);
  displayShips(p2Board, p2RootElem);

  const p1Squares = p1RootElem.querySelectorAll('.user__grid > *');
  const p2Squares = p2RootElem.querySelectorAll('.user__grid > *');
  p1Squares.forEach((e) => {
    e.addEventListener('click', () => {
      if (!isGameReady) {
        return;
      }
      if (playerTurn !== 2) {
        return;
      }
      const x = Number(e.classList[1] % 10);
      const y = Math.floor(e.classList[1] / 10);
      if (!p2.attack(p1Board, x, y)) {
        return;
      }
      e.classList.add('user__square--hit');
      playerTurn = 1;
      if (p1Board.checkWin()) {
        console.log(`{p2.name} has won the game!`);
      }
    });
  });

  p2Squares.forEach((e) => {
    e.addEventListener('click', () => {
      if (!isGameReady) {
        return;
      }
      if (playerTurn !== 1) {
        return;
      }
      const x = Number(e.classList[1] % 10);
      const y = Math.floor(e.classList[1] / 10);
      if (!p1.attack(p2Board, x, y)) {
        return;
      }
      e.classList.add('user__square--hit');
      playerTurn = 2;
      if (p2Board.checkWin()) {
        console.log(`{p1.name} has won the game!`);
      }
    });
  });
};

const initializeGame = () => {
  const playerName = prompt('Enter your name');
  game(playerName, 'Computer');
};

export default initializeGame;
