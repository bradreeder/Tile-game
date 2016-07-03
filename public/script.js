const game = (function (ajax, createLevel) { // eslint-disable-line
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
        gameObj.gameReset();
        break;
      }
      default: {
        break;
      }
    }
  };
  gameObj.movePosition = function movePosition(x, y) {
    if (levelMap[x][y]) { // eslint-disable-line
      if (levelMap[x][y] !== 'obstacle' && levelMap[x][y] !== 'explored') { // eslint-disable-line
        gameObj.recalcuateLastPosition();
        gameObj.recalculateCurrentPosition(x, y);
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
  gameObj.gameReset = function gameReset() {
    gameObj.clearGameContainer();
    ajax(currentLevel); // eslint-disable-line
  };
  gameObj.clearGameContainer = function clearGameContainer() {
    while (gameContainer.firstChild) { // eslint-disable-line
      gameContainer.removeChild(gameContainer.firstChild); // eslint-disable-line
    }
  };

  body.addEventListener('keyup', gameObj.gameControls);
  window.addEventListener('load', ajax('/level2.txt'));

}(ajax, createLevel)); // eslint-disable-line
