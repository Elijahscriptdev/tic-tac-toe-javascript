const Player = (askedName, askedCoin) => {
  const name = askedName;
  const coin = askedCoin;
  return { name, coin };
};

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
