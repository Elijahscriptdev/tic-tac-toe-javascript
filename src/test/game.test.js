import { Player, Board } from '../js/game';

describe('Tests Player Creation', () => {
  test('return the player name and token', () => {
    const player = Player('eli', 'O');
    expect(player.name).toBe('eli');
    expect(player.coin).toBe('O');
  });
});

describe('Tests Board Creation', () => {
  const board = Board();
  afterEach(() => {
    board.restartBoard();
  });
  test('return the board', () => {
    const dummy = [
      ['one', 'two', 'three'],
      ['four', 'five', 'six'],
      ['seven', 'eight', 'nine'],
    ];
    expect(board.getBoard()).toEqual(dummy);
  });
  test('update the position at [0][0] with X', () => {
    board.updateBoard('one', 'X');
    const dummy = [
      ['X', 'two', 'three'],
      ['four', 'five', 'six'],
      ['seven', 'eight', 'nine'],
    ];
    expect(board.getBoard()).toEqual(dummy);
  });
  test('checks that indeed afterEach does reset the board', () => {
    const dummy = [
      ['one', 'two', 'three'],
      ['four', 'five', 'six'],
      ['seven', 'eight', 'nine'],
    ];
    expect(board.getBoard()).toEqual(dummy);
  });
});
