/* global game */
const addGameControls = (function module(game) {
  game.gameControls = function gameControls(e) {
    switch (e.keyCode) {
      case 37: { // press left arrow-key to move left
        const x = game.currentPosition[0];
        const y = game.currentPosition[1] - 1;
        game.movePosition(x, y);
        break;
      }
      case 38: { // press up arrow-key to move up
        const x = game.currentPosition[0] - 1;
        const y = game.currentPosition[1];
        game.movePosition(x, y);
        break;
      }
      case 39: { // press right arrow-key to move right
        const x = game.currentPosition[0];
        const y = game.currentPosition[1] + 1;
        game.movePosition(x, y);
        break;
      }
      case 40: { // press down arrow-key to move down
        const x = game.currentPosition[0] + 1;
        const y = game.currentPosition[1];
        game.movePosition(x, y);
        break;
      }
      case 13: { // press enter to reset the game
        game.tilesLeftToExplore = 0;
        game.clearGameContainer();
        game.loadLevel(game.currentLevel);
        break;
      }
      default: {
        break;
      }
    }
  };
  game.movePosition = function movePosition(x, y) {
    if (typeof game.levelGrid[x] !== 'undefined' && typeof game.levelGrid[x][y] !== 'undefined') {
      if (game.levelGrid[x][y] !== 'obstacle' && game.levelGrid[x][y] !== 'explored') {
        game.recalcuateLastPosition();
        game.recalculateCurrentPosition(x, y);
        game.tilesLeftToExplore--;
        if (game.tilesLeftToExplore === 0) {
          game.levelFinished();
        } else { game.isDeadEnd(); }
      } else { return; }
    }
  };
  game.recalcuateLastPosition = function recalculateLastPosition() {
    game.levelGrid[game.currentPosition[0]][game.currentPosition[1]] = 'explored';
    const lastPositionId = game.currentPosition[0].toString() + game.currentPosition[1].toString();
    const lastPosition = document.getElementById(lastPositionId);
    lastPosition.className = `col-1-${game.levelGrid[0].length} explored`;
  };
  game.recalculateCurrentPosition = function recalculateCurrentPosition(x, y) {
    game.currentPosition = [x, y];
    game.levelGrid[x][y] = 'active';
    const active = document.getElementById(x.toString() + y.toString());
    active.className = `col-1-${game.levelGrid[0].length} active`;
  };
  game.levelReset = function levelReset() {
    game.tilesLeftToExplore = 0;
    setTimeout(() => {
      game.clearGameContainer();
      game.loadLevel(game.currentLevel);
    }, 500);
  };
  game.levelFinished = function levelFinished() {
    setTimeout(() => {
      game.clearGameContainer();
      game.loadLevel(game.currentLevel + 1);
    }, 500);
  };
  game.isInvalidMove = function isInvalidMove(grid, x, y, xDir, yDir) {
    const newX = x + xDir; const newY = y + yDir;
    return (
      typeof game.levelGrid[newX] === 'undefined' ||
      typeof game.levelGrid[newX][newY] === 'undefined' ||
      game.levelGrid[newX][newY] === 'obstacle' ||
      game.levelGrid[newX][newY] === 'explored'
    );
  };
  game.isDeadEnd = function isDeadEnd() {
    const x = game.currentPosition[0]; const y = game.currentPosition[1];
    if (game.isInvalidMove(game.leveGrid, x, y, 1, 0) &&
        game.isInvalidMove(game.leveGrid, x, y, -1, 0) &&
        game.isInvalidMove(game.leveGrid, x, y, 0, 1) &&
        game.isInvalidMove(game.leveGrid, x, y, 0, -1)) {
      game.levelReset();
    }
  };
  game.clearGameContainer = function clearGameContainer() {
    while (game.gameContainer.firstChild) {
      game.gameContainer.removeChild(game.gameContainer.firstChild);
    }
  };

  document.body.addEventListener('keyup', game.gameControls);
  window.addEventListener('load', game.loadLevel(1));
}(game));

window.addGameControls = addGameControls;
