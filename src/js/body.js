const displayBody = () => {
  const body = document.querySelector('#main-container');
  body.innerHTML = `
    <h1 class="text-center title">TIC-TAC-TOE</h1>
      <div id="player-input">
        <form>
          <div class="form-group">
            <label>Player 1</label>
            <input type="text" class="form-control" id="player-1" />
          </div>
          <div class="form-group">
            <label>Player 2</label>
            <input type="text" class="form-control" id="player-2" />
          </div>

          <div type="submit" class="btn btn-danger" id="start-game-btn">
            PLAY
          </div>
        </form>
      </div>
      <div class="board hidden" id="board">
        <div class="cell" id="one" data-cell></div>
        <div class="cell" id="two" data-cell></div>
        <div class="cell" id="three" data-cell></div>
        <div class="cell" id="four" data-cell></div>
        <div class="cell" id="five" data-cell></div>
        <div class="cell" id="six" data-cell></div>
        <div class="cell" id="seven" data-cell></div>
        <div class="cell" id="eight" data-cell></div>
        <div class="cell" id="nine" data-cell></div>
      </div>

      <div id="restart-container" class="hidden"></div>
`
};

export default displayBody;