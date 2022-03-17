import Gameboard from '../gameboard';
import Player from '../player';

test('hits empty & filled square', () => {
  const testBoard = Gameboard();
  const player1 = Player();
  expect(player1.name).toBe('Player');
  expect(player1.attack(testBoard, 5, 3)).toBe(true);
  expect(player1.attack(testBoard, 5, 3)).toBe(false);
});

test('computer plays correctly', () => {
  const testBoard = Gameboard();
  const computer = Player('Computer');
  expect(computer.name).toBe('Computer');
  expect(computer.attack(testBoard)).toBe(true);
});
