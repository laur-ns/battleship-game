import Gameboard from '../gameboard';

test('create standard sized gameboard', () => {
  const game = Gameboard();
  expect(game.board.length).toBe(10);
  expect(game.board[9].length).toBe(10);
});

test('gameboard initializes empty', () => {
  const game = Gameboard();
  expect(game.board[3][2]).toBe(null);
});

test('place ship x, y, direction, length', () => {
  const game = Gameboard();
  game.placeShip(4, 5, 'y', 3);
  expect(game.board[4][7]).toBe(1);
  expect(game.board[4][8]).toBe(null);
});

test('placing multiple ships stores index', () => {
  const game = Gameboard();
  game.placeShip(4, 5, 'y', 1);
  game.placeShip(2, 3, 'y', 2);
  game.placeShip(8, 7, 'y', 3);
  expect(game.ships[2].length).toBe(3);
  expect(game.board[8][9]).toBe(3);
});

test('placing ship out of bounds', () => {
  const game = Gameboard();
  expect(game.canPlace(8, 3, 'x', 3)).toBe(false);
  expect(game.canPlace(7, 0, 'x', 3)).toBe(true);
  expect(game.canPlace(7, 9, 'x', 1)).toBe(true);
  expect(game.canPlace(7, 10, 'x', 1)).toBe(false);
});

test('placing ship on another ship', () => {
  const game = Gameboard();
  game.placeShip(4, 5, 'y', 3);
  expect(game.placeShip(4, 7, 'y', 2)).toBe(false);
  expect(game.board[4][7]).toBe(1);
});

test('receiveAttack hits ships', () => {
  const game = Gameboard();
  game.placeShip(4, 5, 'y', 4);
  expect(game.receiveAttack(4, 6)).toBe(true);
  expect(game.receiveAttack(4, 6)).toBe(false);
});

test('hit empty squares', () => {
  const game = Gameboard();
  expect(game.receiveAttack(7, 6)).toBe(true);
  expect(game.board[7][6]).toBe(0);
  expect(game.receiveAttack(7, 6)).toBe(false);
});

test('gameboard checks for wins', () => {
  const game = Gameboard();
  game.placeShip(0, 0, 'x', 2);
  game.placeShip(3, 5, 'y', 3);
  expect(game.checkWin()).toBe(false);
  game.receiveAttack(0, 0);
  game.receiveAttack(1, 0);
  expect(game.checkWin()).toBe(false);
  game.receiveAttack(3, 5);
  game.receiveAttack(3, 6);
  game.receiveAttack(3, 7);
  expect(game.checkWin()).toBe(true);
});
