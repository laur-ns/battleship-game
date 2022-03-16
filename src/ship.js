const Ship = (shipLength) => {
  const length = shipLength;
  const squares = [...Array(length).keys()];
  const targets = [];

  const hit = (i) => {
    if (squares[i] === 'hit') {
      return false;
    }
    squares[i] = 'hit';
    return true;
  };

  const isSunk = () => squares.reduce((prev, curr) => prev && curr === 'hit', true);

  return {
    squares, length, hit, isSunk, targets,
  };
};

export default Ship;
