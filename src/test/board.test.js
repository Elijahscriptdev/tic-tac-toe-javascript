import Board from '../js/board';

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
