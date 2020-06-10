const Player = (askedName, askedCoin) => {
  const name = askedName;
  const coin = askedCoin;
  return { name, coin };
};

let winner = false;
let draw = false;

let gameBoard = [ ["one", "two", "three"], ["", "", ""], ["", "", ""] ];

function restart() {
// do something when cell are filled

}


// const winners = {
//   row1: [1, 2, 3],
//   row2: [4, 5, 6],
//   row3: [7, 8, 9],
//   row4: [1, 4, 7],
//   row5: [2, 5, 8],
//   row6: [3, 6, 9],
//   row7: [1, 5, 9],
//   row8: [3, 5, 7]
// }

const cells = document.querySelectorAll('[data-cell]');

const player1 = Player('seth', 'X');
const player2 = Player('eli', 'O');
let currentPlayer = player1.coin;

function handleClick() {
  const currentCell = document.getElementById(this.id);
  const choice = document.createElement('p');
  choice.setAttribute('class', 'choice');
  // REFACTOR THIS FOR ? :
  if (currentPlayer === player2) {
    choice.appendChild(document.createTextNode(player2.coin));
    currentPlayer = player1;
  } else {
    choice.appendChild(document.createTextNode(player1.coin));
    currentPlayer = player2;
  }
  //
  currentCell.appendChild(choice);
}

cells.forEach((cell) => {
  cell.addEventListener('click', handleClick, { once: true });
});
