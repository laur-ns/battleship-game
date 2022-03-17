const Player = (newName) => {
  let name = newName;
  if (name === undefined) {
    name = 'Player';
  }

  const attack = (board, x, y) => {
    let xCoord = x;
    let yCoord = y;
    if (xCoord === undefined || yCoord === undefined) {
      xCoord = Math.floor(Math.random() * 10);
      yCoord = Math.floor(Math.random() * 10);
    }
    return board.receiveAttack(xCoord, yCoord);
  };

  return {
    name,
    attack,
  };
};

export default Player;
