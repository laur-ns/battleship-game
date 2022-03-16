import Ship from '../ship';

test('stores ship length', () => {
  expect(Ship(4).length).toBe(4);
});

test('hits ship squares', () => {
  const testShip = Ship(4);
  testShip.hit(0);
  expect(testShip.squares[0]).toEqual('hit');
});

test('ship sinks when all squares hit', () => {
  const testShip = Ship(3);
  testShip.hit(0);
  testShip.hit(1);
  testShip.hit(2);
  expect(testShip.isSunk()).toBeTruthy();
});

test('ship shouldnt be sunk until all squares hit', () => {
  const testShip = Ship(3);
  testShip.hit(0);
  testShip.hit(2);
  expect(testShip.isSunk()).toBeFalsy();
});

test('creates squares', () => {
  expect(Ship(3).squares).toEqual([0, 1, 2]);
});
