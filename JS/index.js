const Player = (askedName, askedCoin) => {
  const name = askedName;
  const coin = askedCoin;
  return { name, coin };
};

const Board = () => {
  // Do not pass the board
  let gameBoard = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
  ];

  const getBoard = () => gameBoard;

  const updateBoard = (position, coin) => {
    for (let index = 0; index < gameBoard.length; index++) {
      const pos = gameBoard[index].indexOf(position);
      if (pos >= 0) {
        gameBoard[index][pos] = coin;
      }
    }
  };

  const draw = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (gameBoard[i][j].length > 1) {
          return false;
        }
      }
    }
    return true;
  };

  let across1 = (coin) => {
    console.log(getBoard());
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
    for (let i = 0; i < gameBoard.length; i++) {
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
    for (let i = 0; i < gameBoard.length; i++) {
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

  return { getBoard, updateBoard, won, draw };
};

// INITIALIZE EVERYTHING
const cells = document.querySelectorAll("[data-cell]");

const player1 = Player("seth", "X");
const player2 = Player("eli", "O");
let currentPlayer = player1.coin;
let coolBoard = Board();

function handleClick() {
  const currentCell = document.getElementById(this.id);
  const choice = document.createElement("p");
  choice.setAttribute("class", "choice");
  // REFACTOR THIS FOR ? :
  if (currentPlayer === player2) {
    choice.appendChild(document.createTextNode(player2.coin));
    coolBoard.updateBoard(this.id, player2.coin);
    // console.log(coolBoard.won(player2.coin));
    if (coolBoard.won(player2.coin) === true) {
      console.log(`${player2.name} is the winner`);
    }
    if (coolBoard.draw() === true) {
      console.log("Its a draw");
    }
    currentPlayer = player1;
  } else {
    choice.appendChild(document.createTextNode(player1.coin));
    coolBoard.updateBoard(this.id, player1.coin);
    // console.log(coolBoard.won(player1.coin));
    if (coolBoard.won(player1.coin) === true) {
      console.log(`${player1.name} is the winner`);
    }
    if (coolBoard.draw() === true) {
      console.log("Its a draw");
    }
    currentPlayer = player2;
  }
  //
  currentCell.appendChild(choice);
}

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});
