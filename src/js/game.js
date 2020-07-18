import { Player } from './player';
import { Board } from './board';
import {
  updatePageBoard,
  endGameMessage,
  hideForm,
  bringUpForm,
} from './pageHandler';

export const restartGame = () => {
  window.location.reload();
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

/* eslint-disable */
const initializeGame = () => {
  const mainContainer = document.getElementById('main-container');

  // Grab user info and initialize player + board
  const input1 = document.getElementById('player-1').value;
  const input2 = document.getElementById('player-2').value;
  const player1 = Player(input1, 'X');
  const player2 = Player(input2, 'O');
  const gameBoard = Board();

  // hide it
  hideForm();

  // Lets bring up the board
  bringUpForm();

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

export const addEvent = () => {
  const startBtn = document.querySelector('#start-game-btn');
  startBtn.addEventListener('click', initializeGame);
};
