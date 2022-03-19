import initializeGame from './game';
import Gameboard from './gameboard';

let board = Gameboard();
let grid = null;
let currentShip = null;
let rootElem = null;
let length = 0;
let direction = 'x';

const isGameReady = () => {
  if (board.ships.length !== 5) {
    return;
  }
  grid = null;
  currentShip = null;
  const playerBoard = board;
  const computerBoard = Gameboard();
  const modal = document.querySelector('.modal');
  const shipsElem = document.querySelectorAll('.ships__count > *');
  board = Gameboard();
  modal.classList.toggle('show');
  shipsElem.forEach((e) => {
    e.classList.remove('disabled');
  });
  initializeGame(playerBoard, computerBoard);
};

// ---- ---- //
// drag & drop handlers //
function handleDragStart(e) {
  length = Number(e.target.classList[1]);
  currentShip = e.target;
}

function handleDragEnter(e) {
  e.preventDefault();
  if (e.target.classList.contains('user__grid')) {
    return;
  }
  e.target.classList.add('drag-over');
}

function handleDragLeave(e) {
  e.target.classList.remove('drag-over');
}

function handleDrop(e) {
  e.target.classList.remove('drag-over');
  if (e.target.classList.contains('user__grid')) {
    return;
  }
  if (currentShip === null) {
    return;
  }
  let i = Number(e.target.classList[1]);
  const x = Number(i % 10);
  const y = Math.floor(i / 10);

  if (!board.canPlace(x, y, direction, length)) {
    alert('Can\'t place there!');
    return;
  }

  currentShip.classList.add('disabled');
  currentShip.setAttribute('draggable', 'false');
  currentShip.removeEventListener('dragstart', handleDragStart);
  let shipLength = i + length;
  let increment = 1;
  if (direction === 'y') {
    increment = 10;
    shipLength = i + (length * 10);
  }
  for (i; i < shipLength; i += increment) {
    const square = grid.querySelector(`.${CSS.escape(i)}`);
    square.classList.add('temporary-set');
  }
  board.placeShip(x, y, direction, length);
  currentShip = null;
  isGameReady();
}

function handleDragOver(e) {
  e.preventDefault();
}
// ---- ---- //
// ---- ---- //

const setShipListeners = (playerElem) => {
  rootElem = playerElem;
  const modal = document.querySelector('.modal');
  const axisToggle = document.querySelector('.ships__axis-toggle');
  const ships = rootElem.querySelectorAll('.ships__count > *');
  grid = rootElem.querySelector('.user__grid');
  modal.classList.toggle('show');
  axisToggle.addEventListener('click', () => {
    if (direction === 'x') {
      direction = 'y';
      axisToggle.textContent = 'Direction: y';
    } else {
      direction = 'x';
      axisToggle.textContent = 'Direction: x';
    }
  });
  ships.forEach((e) => {
    e.addEventListener('dragstart', handleDragStart);
  });
  grid.addEventListener('dragover', handleDragOver);
  grid.addEventListener('drop', handleDrop);
  grid.addEventListener('dragleave', handleDragLeave);
  grid.addEventListener('dragenter', handleDragEnter);
};

export default function retrieveDraggedBoard() {
  return board;
}

export { setShipListeners };
