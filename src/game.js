import Gameboard from './gameboard';
import Player from './player';

// this module contains all the logic that interacts with the DOM

const startNewGame = () => {
  const player1Name = prompt('Enter your name');
  const player1 = Player();
  const player1Board = Gameboard();
};

export default startNewGame;
