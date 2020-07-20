const restartGame = () => {
  window.location.reload();
};

export const endGameMessage = (name, draw) => {
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

export const updatePageBoard = (cellId, coin) => {
  const currentCell = document.getElementById(cellId);
  const choice = document.createElement('p');
  choice.setAttribute('class', 'choice');
  choice.appendChild(document.createTextNode(coin));
  currentCell.appendChild(choice);
};

export const hideForm = () => {
  const mainContainer = document.getElementById('main-container');

  // Lets hide the form
  const playerInput = document.getElementById('player-input');
  playerInput.removeAttribute('id');
  playerInput.classList.add('hidden');
  mainContainer.append(playerInput);
};

export const bringUpForm = () => {
  const mainContainer = document.getElementById('main-container');

  const boardId = document.getElementById('board');
  boardId.classList.remove('hidden');
  mainContainer.append(boardId);
};
