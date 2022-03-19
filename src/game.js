import Gameboard from './gameboard';
import Player from './player';
// this module contains all the logic that interacts
// with the DOM

let playerTurn = 2;

const game = (name, name2) => {
  const p1 = Player(name);
  const p2 = Player(name2);
  const p1Board = Gameboard();
  const p2Board = Gameboard();
  const p1RootElem = document.querySelector('#player1');
  const p2RootElem = document.querySelector('#player2');
  p1RootElem.querySelector('.user__name span').textContent = p1.name;
  p2RootElem.querySelector('.user__name span').textContent = p2.name;

  const p1Squares = p1RootElem.querySelectorAll('.user__grid > *');
  const p2Squares = p2RootElem.querySelectorAll('.user__grid > *');

  p1Squares.forEach((e) => {
    e.addEventListener('click', () => {
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
    });
  });

  p2Squares.forEach((e) => {
    e.addEventListener('click', () => {
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
    });
  });
};

const initializeGame = () => {
  const playerName = prompt('Enter your name');
  game(playerName, 'Computer');
};
export default initializeGame;
