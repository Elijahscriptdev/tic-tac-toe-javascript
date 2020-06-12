const Player = (askedName, askedCoin) => {
  const name = askedName;
  const coin = askedCoin;
  return { name, coin };
};

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

  return {
    getBoard,
    updateBoard,
    won,
    draw,
    getCurrentPlayer,
    changeCurrentPlayer,
    restartBoard,
  };
};

const restartGame = () => {
  window.location.reload();
};

const endGameMessage = (name, draw) => {
  const mainContainer = document.getElementById('main-container');
  const boardContainer = document.getElementById('board');
  const restartContainer = document.getElementById('restart-container');
  const endGameMessage = document.createElement('h1');
  const resetButton = document.createElement('button');
  boardContainer.classList.add('hidden');
  restartContainer.classList.remove('hidden');
  // Create Button
  resetButton.appendChild(document.createTextNode('RESET'));
  resetButton.classList.add('btn');
  resetButton.classList.add('btn-success');
  resetButton.setAttribute('id', 'restart');
  resetButton.addEventListener('click', restartGame);
  // Start appending to main container
  if (draw === true) {
    endGameMessage.appendChild(
      document.createTextNode("Wow! It's a tied game!!"),
    );
  } else {
    endGameMessage.appendChild(
      document.createTextNode(`${name} is the winner`),
    );
  }
  restartContainer.appendChild(endGameMessage);
  restartContainer.appendChild(resetButton);

  mainContainer.appendChild(boardContainer);
  mainContainer.appendChild(restartContainer);
};

const logicOfGame = (player1, player2, gameBoard, cellId) => {
  const placeMove = () => {
    const coin = gameBoard.getCurrentPlayer();
    gameBoard.updateBoard(cellId, coin);
    if (gameBoard.won(coin) === true) {
      if (coin === player1.coin) {
        endGameMessage(player1.name, false);
      } else {
        endGameMessage(player2.name, false);
      }
      return 'Done';
    }
    if (gameBoard.draw() === true) {
      endGameMessage(player1.name, true);
      return 'Done';
    }
    gameBoard.changeCurrentPlayer();
    return 'Done';
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

/* eslint-disable */
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
/* eslint-enable */
