import { Player } from '../js/player';

describe('Tests Player Creation', () => {
  test('return the player name and token', () => {
    const player = Player('eli', 'O');
    expect(player.name).toBe('eli');
    expect(player.coin).toBe('O');
  });
});
