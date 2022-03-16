const Ship = (shipLength) => {
  const length = shipLength;
  const squares = [...Array(length).keys()];
  const coordinates = [];

  const hit = (key) => {
    if (squares[key] === 'hit') {
      return false;
    }
    squares[key] = 'hit';
    return true;
  };

  const isSunk = () => squares.reduce((prev, curr) => prev && curr === 'hit', true);

  return {
    squares,
    coordinates,
    length,
    hit,
    isSunk,
  };
};

export default Ship;
