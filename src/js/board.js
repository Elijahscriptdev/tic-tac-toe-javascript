const Board = () => {
  // Do not pass the board
  let gameBoard = [
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine'],
  ];

  let currentPlayer = 'X';
  const getCurrentPlayer = () => currentPlayer;
  const changeCurrentPlayer = () => {
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
  };

  const restartBoard = () => {
    gameBoard = [
      ['one', 'two', 'three'],
      ['four', 'five', 'six'],
      ['seven', 'eight', 'nine'],
    ];
    currentPlayer = 'X';
  };

  const getBoard = () => gameBoard;

  const updateBoard = (position, coin) => {
    for (let index = 0; index < gameBoard.length; index += 1) {
      const pos = gameBoard[index].indexOf(position);
      if (pos >= 0) {
        gameBoard[index][pos] = coin;
      }
    }
  };

  const draw = () => {
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (gameBoard[i][j].length > 1) {
          return false;
        }
      }
    }
    return true;
  };

  const across1 = (coin) => {
    if (
      gameBoard[0][0] === gameBoard[1][1]
      && gameBoard[0][0] === gameBoard[2][2]
      && gameBoard[0][0] === coin
    ) {
      return true;
    }
    return false;
  };

  const across2 = (coin) => {
    if (
      gameBoard[0][2] === gameBoard[1][1]
      && gameBoard[0][2] === gameBoard[2][0]
      && gameBoard[0][2] === coin
    ) {
      return true;
    }
    return false;
  };

  const sidesHorizontal = (coin) => {
    for (let i = 0; i < gameBoard.length; i += 1) {
      if (
        gameBoard[i][0] === gameBoard[i][1]
        && gameBoard[i][0] === gameBoard[i][2]
        && gameBoard[i][0] === coin
      ) {
        return true;
      }
    }
    return false;
  };

  const sidesVertical = (coin) => {
    for (let i = 0; i < gameBoard.length; i += 1) {
      if (
        gameBoard[0][i] === gameBoard[1][i]
        && gameBoard[0][i] === gameBoard[2][i]
        && gameBoard[0][i] === coin
      ) {
        return true;
      }
    }
    return false;
  };

  const won = (coin) => {
    if (
      across1(coin) === true
      || across2(coin) === true
      || sidesHorizontal(coin) === true
      || sidesVertical(coin) === true
    ) {
      return true;
    }
    return false;
  };

  // For Testing
  const drawTest = (dummy) => {
    gameBoard = dummy;
  };

  const wonTest = (dummy) => {
    gameBoard = dummy;
  };

  return {
    getBoard,
    updateBoard,
    won,
    draw,
    getCurrentPlayer,
    changeCurrentPlayer,
    restartBoard,
    drawTest,
    wonTest,
  };
};

export default Board;
