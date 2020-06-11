const Player = (askedName, askedCoin) => {
  const name = askedName;
  const coin = askedCoin;
  return { name, coin };
};

const Board = () => {
  // Do not pass the board
  const gameBoard = [
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
      gameBoard[0][0] === gameBoard[1][1] &&
      gameBoard[0][0] === gameBoard[2][2] &&
      gameBoard[0][0] === coin
    ) {
      return true;
    }
    return false;
  };

  const across2 = (coin) => {
    if (
      gameBoard[0][2] === gameBoard[1][1] &&
      gameBoard[0][2] === gameBoard[2][0] &&
      gameBoard[0][2] === coin
    ) {
      return true;
    }
    return false;
  };

  const sidesHorizontal = (coin) => {
    for (let i = 0; i < gameBoard.length; i += 1) {
      if (
        gameBoard[i][0] === gameBoard[i][1] &&
        gameBoard[i][0] === gameBoard[i][2] &&
        gameBoard[i][0] === coin
      ) {
        return true;
      }
    }
    return false;
  };

  const sidesVertical = (coin) => {
    for (let i = 0; i < gameBoard.length; i += 1) {
      if (
        gameBoard[0][i] === gameBoard[1][i] &&
        gameBoard[0][i] === gameBoard[2][i] &&
        gameBoard[0][i] === coin
      ) {
        return true;
      }
    }
    return false;
  };

  const won = (coin) => {
    if (
      (across1(coin) === true || across2(coin) === true,
      sidesHorizontal(coin) === true,
      sidesVertical(coin) === true)
    ) {
      return true;
    }
    return false;
  };

  return {
    getBoard,
    updateBoard,
    won,
    draw,
    getCurrentPlayer,
    changeCurrentPlayer,
  };
};

const logicOfGame = (player1, player2, gameBoard, cellId) => {
  const placeMove = () => {
    if (gameBoard.currentPlayer === player2.coin) {
      gameBoard.updateBoard(cellId, player2.coin);
      if (gameBoard.won(player2.coin) === true) {
        console.log(`${player2.name} is the winner`);
      }
      if (gameBoard.draw() === true) {
        console.log('Its a draw');
      }
      gameBoard.changeCurrentPlayer();
    } else {
      gameBoard.updateBoard(cellId, player1.coin);
      if (gameBoard.won(player1.coin) === true) {
        console.log(`${player1.name} is the winner`);
      }
      if (gameBoard.draw() === true) {
        console.log('Its a draw');
      }
      gameBoard.changeCurrentPlayer();
    }
  };
  return { placeMove };
};

const updatePageBoard = (cellId, coin) => {
  const currentCell = document.getElementById(cellId);
  const choice = document.createElement('p');
  choice.setAttribute('class', 'choice');
  choice.appendChild(document.createTextNode(coin));
  currentCell.appendChild(choice);
};

const initializeGame = () => {
  const mainContainer = document.getElementById('main-container');
  // Grab user info and initialize player + board
  const input1 = document.getElementById('player-1').value;
  const input2 = document.getElementById('player-2').value;
  const player1 = Player(input1, 'X');
  const player2 = Player(input2, 'O');
  const gameBoard = Board();

  // Lets hide the form
  const playerInput = document.getElementById('player-input');
  playerInput.removeAttribute('id');
  playerInput.classList.add('hidden');
  mainContainer.append(playerInput);

  // Lets bring up the board
  const boardId = document.getElementById('board');
  boardId.classList.remove('hidden');
  mainContainer.append(boardId);

  // Initialize the cells attributes with event listeners
  const cells = document.querySelectorAll('[data-cell]');

  cells.forEach((cell) => {
    cell.addEventListener(
      'click',
      () => {
        updatePageBoard(cell.id, gameBoard.getCurrentPlayer());
        logicOfGame(player1, player2, gameBoard, cell.id).placeMove();
      },
      {
        once: true,
      }
    );
  });
};
