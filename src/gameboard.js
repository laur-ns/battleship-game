import Ship from './ship';

const Gameboard = () => {
  const board = [];
  const ships = [];

  // init
  for (let i = 0; i < 10; i += 1) {
    board[i] = [];
    for (let j = 0; j < 10; j += 1) {
      board[i].push(null);
    }
  }

  const canPlace = (x, y, direction, length) => {
    switch (direction) {
      case 'x':
        if (x + length > board.length) return false;
        for (let i = 0; i < length; i += 1) {
          if (board[x + i][y] !== null) return false;
        }
        break;
      case 'y':
        if (y + length > board.length) return false;
        for (let j = 0; j < length; j += 1) {
          if (board[x][y + j] !== null) return false;
        }
        break;
      default:
    }
    return true;
  };

  const placeShip = (x, y, direction, length) => {
    if (!canPlace(x, y, direction, length)) {
      return false;
    }
    const shipCount = ships.push(Ship(length));
    if (direction === 'x') {
      for (let run = x; run < x + length; run += 1) {
        board[run][y] = shipCount;
        ships[shipCount - 1].coordinates.push([run, y]);
      }
    }
    if (direction === 'y') {
      for (let rise = y; rise < y + length; rise += 1) {
        board[x][rise] = shipCount;
        ships[shipCount - 1].coordinates.push([x, rise]);
      }
    }
    return true;
  };

  const receiveAttack = (x, y) => {
    if (board[x][y] === 0) {
      return false;
    }
    if (board[x][y] === null) {
      board[x][y] = 0;
      return true;
    }
    const ship = ships[board[x][y] - 1];
    let i;
    for (i = 0; i < ship.coordinates.length; i += 1) {
      if (ship.coordinates[i][0] === x && ship.coordinates[i][1] === y) {
        break;
      }
    }
    return ships[board[x][y] - 1].hit(i);
  };

  const checkWin = () => {
    let win = true;
    ships.forEach((e) => {
      e.squares.forEach((i) => {
        if (i !== 'hit') {
          win = false;
        }
      });
    });
    return win;
  };

  return {
    board,
    placeShip,
    ships,
    canPlace,
    checkWin,
    receiveAttack,
  };
};

export default Gameboard;
