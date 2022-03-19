import Player from './player';
// this module contains all the logic that interacts
// with the DOM

let playerTurn = 1;
let isGameReady = false;

const updateShipCount = (playerElem, board) => {
  const shipsElems = playerElem.querySelectorAll('.ships__count > *');
  const { ships } = board;
  const emptyDiv = document.createElement('div');
  const sortedShips = [...ships].sort((a, b) => a.length - b.length);
  console.log(sortedShips);
  console.log(shipsElems);

  for (let i = 0; i < 5; i += 1) {
    shipsElems[i].innerHTML = '';
    for (let j = 0; j < sortedShips[i].squares.length; j += 1) {
      if (sortedShips[i].squares[j] === 'hit') {
        shipsElems[i].append(emptyDiv.cloneNode());
      }
    }
  }
};

const displayShips = (board, playerElem) => {
  const grid = playerElem.querySelector('.user__grid');
  grid.innerHTML = '';
  const square = document.createElement('div');
  square.classList.add('user__square');

  for (let i = 0; i < 100; i += 1) {
    const newSquare = square.cloneNode();
    newSquare.classList.add(i);
    const x = Number(i % 10);
    const y = Math.floor(i / 10);
    if (board.board[x][y] > 0) {
      newSquare.classList.add('user__square--ship');
    }
    grid.append(newSquare);
  }
};

const placeRandomShips = (board) => {
  let x = Math.floor(Math.random() * 5);
  let y = Math.floor(Math.random() * 5);
  let direction = (Math.random() > 0.5) ? 'y' : 'x';
  const length = [2, 3, 3, 4, 5];
  let isPlaced = false;
  for (let i = 0; i < 5; i += 1) {
    while (!isPlaced) {
      isPlaced = board.placeShip(x, y, direction, length[i]);
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      direction = (Math.random() > 0.5) ? 'y' : 'x';
    }
    isPlaced = false;
  }
};

const attackRandomSquare = (squaresList) => {
  let r = Math.floor(Math.random() * 100);
  while (squaresList[r].classList.contains('user__square--hit')) {
    r = Math.floor(Math.random() * 100);
  }
  squaresList[r].click();
};

const game = (name, name2, board, board2) => {
  const p1 = Player(name);
  const p2 = Player(name2);
  const p1Board = board;
  const p2Board = board2;
  const p1RootElem = document.querySelector('#player1');
  const p2RootElem = document.querySelector('#player2');
  p1RootElem.querySelector('.user__name span').textContent = p1.name;
  p2RootElem.querySelector('.user__name span').textContent = p2.name;

  placeRandomShips(p2Board);
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
      updateShipCount(p1RootElem, p1Board);
      if (p1Board.checkWin()) {
        alert(`${p2.name} has won the game!`);
        alert('Refresh to end the match (will update this later!)');
        isGameReady = false;
      }
      playerTurn = 1;
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
        alert(`${p1.name} has won the game!`);
        alert('Refresh to end the match (will update this later!)');
        isGameReady = false;
      }
      setTimeout(() => {
        playerTurn = 2;
        attackRandomSquare(p1Squares);
      }, 700);
    });
  });
};

const initializeGame = (p1Board, p2Board) => {
  isGameReady = true;
  game('Player', 'Computer', p1Board, p2Board);
};

export default initializeGame;
