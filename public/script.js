const game = (function (loadLevel) { // eslint-disable-line
  const body = document.body;
  const gameObj = {};
  gameObj.gameControls = function gameControls(e) {
    switch (e.keyCode) {
      case 37: { // press left arrow-key to move left
        const x = currentPosition[0]; // eslint-disable-line
        const y = currentPosition[1] - 1; // eslint-disable-line
        gameObj.movePosition(x, y);
        break;
      }
      case 38: { // press up arrow-key to move up
        const x = currentPosition[0] - 1; // eslint-disable-line
        const y = currentPosition[1]; // eslint-disable-line
        gameObj.movePosition(x, y);
        break;
      }
      case 39: { // press right arrow-key to move right
        const x = currentPosition[0]; // eslint-disable-line
        const y = currentPosition[1] + 1; // eslint-disable-line
        gameObj.movePosition(x, y);
        break;
      }
      case 40: { // press down arrow-key to move down
        const x = currentPosition[0] + 1; // eslint-disable-line
        const y = currentPosition[1]; // eslint-disable-line
        gameObj.movePosition(x, y);
        break;
      }
      case 13: { // press enter to reset the game
        tilesLeftToExplore = 0; // eslint-disable-line
        gameObj.clearGameContainer();
        loadLevel(currentLevel); // eslint-disable-line
        break;
      }
      default: {
        break;
      }
    }
  };
  gameObj.movePosition = function movePosition(x, y) {
    if (typeof levelMap[x][y] !== 'undefined') { // eslint-disable-line
      if (levelMap[x][y] !== 'obstacle' && levelMap[x][y] !== 'explored') { // eslint-disable-line
        gameObj.recalcuateLastPosition();
        gameObj.recalculateCurrentPosition(x, y);
        tilesLeftToExplore--; // eslint-disable-line
        if (tilesLeftToExplore === 0) { // eslint-disable-line
          gameObj.levelFinished();
        } else { gameObj.isDeadEnd(); } // eslint-disable-line
      }
    } else { return; }
  };
  gameObj.recalcuateLastPosition = function recalculateLastPosition() {
    levelMap[currentPosition[0]][currentPosition[1]] = 'explored'; // eslint-disable-line
    const lastPositionId = currentPosition[0].toString() + currentPosition[1].toString();  // eslint-disable-line
    const lastPosition = document.getElementById(lastPositionId);
    lastPosition.className = `col-1-${levelMap[0].length} explored`; // eslint-disable-line
  };
  gameObj.recalculateCurrentPosition = function recalculateCurrentPosition(x, y) {
    currentPosition = [x, y]; // eslint-disable-line
    levelMap[x][y] = 'active'; // eslint-disable-line
    const active = document.getElementById(x.toString() + y.toString());
    active.className = `col-1-${levelMap[0].length} active`; // eslint-disable-line
  };
  gameObj.levelReset = function levelReset() {
    tilesLeftToExplore = 0; // eslint-disable-line
    setTimeout(() => {
      gameObj.clearGameContainer();
      loadLevel(currentLevel); // eslint-disable-line
    }, 500);
  };
  gameObj.levelFinished = function levelFinished() {
    setTimeout(() => {
      gameObj.clearGameContainer();
      loadLevel(currentLevel + 1); // eslint-disable-line
    }, 500);
  };
  gameObj.isDeadEnd = function isDeadEnd() {
    const x = currentPosition[0]; const y = currentPosition[1]; // eslint-disable-line
    if ((typeof levelMap[x][y + 1] === 'undefined' || levelMap[x][y + 1] === 'obstacle' || levelMap[x][y + 1] === 'explored') // eslint-disable-line
     && (typeof levelMap[x][y - 1] === 'undefined' || levelMap[x][y - 1] === 'obstacle' || levelMap[x][y - 1] === 'explored') // eslint-disable-line
     && (typeof levelMap[x + 1] === 'undefined' || levelMap[x + 1][y] === 'obstacle' || levelMap[x + 1][y] === 'explored') // eslint-disable-line
     && (typeof levelMap[x - 1] === 'undefined' || levelMap[x - 1][y] === 'obstacle' || levelMap[x - 1][y] === 'explored')) { // eslint-disable-line
      gameObj.levelReset();
    }
  };
  gameObj.clearGameContainer = function clearGameContainer() {
    while (gameContainer.firstChild) { // eslint-disable-line
      gameContainer.removeChild(gameContainer.firstChild); // eslint-disable-line
    }
  };

  body.addEventListener('keyup', gameObj.gameControls);
  window.addEventListener('load', loadLevel(1));

}(loadLevel)); // eslint-disable-line
