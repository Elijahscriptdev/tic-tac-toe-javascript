import Player from '../js/player';

describe('Tests Player Creation', () => {
  const player1 = Player('eli', 'O');
  const player2 = Player('seth', 'X');

  test('return the player name and token', () => {
    expect(player1.name).toBe('eli');
    expect(player1.coin).toBe('O');
  });

  test('return the player name and token', () => {
    expect(player2.name).toBe('seth');
    expect(player2.coin).toBe('X');
  });
});
