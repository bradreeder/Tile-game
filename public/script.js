const gameContainer = document.getElementById('game-container');
const body = document.body;
/*eslint-disable */
let level = [['unexplored', 'unexplored', 'obstacle', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored'],
['unexplored', 'unexplored', 'obstacle', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'obstacle', 'unexplored'],
['unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored'],
['unexplored', 'obstacle', 'unexplored', 'unexplored', 'obstacle', 'unexplored', 'unexplored', 'unexplored', 'obstacle'],
['unexplored', 'unexplored', 'unexplored', 'obstacle', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored'],
['unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'obstacle', 'unexplored'],
['unexplored', 'active', 'obstacle', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored']];
/*eslint-enable */
const gameObj = {};
gameObj.currentPosition = '';
gameObj.generateLevel = function generateLevel() {
  level.forEach((row, rowIndex) => {
    row.forEach((item, itemIndex) => {
      const gridBox = document.createElement('div');
      gridBox.className = `col-1-9 ${item}`;
      gridBox.id = `${JSON.stringify(rowIndex) + JSON.stringify(itemIndex)}`;
      gameContainer.appendChild(gridBox);
      if (item === 'active') {
        gameObj.currentPosition = [+(gridBox.id.charAt(0)), +(gridBox.id.charAt(1))];
      }
    });
  });
};
gameObj.gameControls = function gameControls(e) {
  switch (e.keyCode) {
    case 37: {
      const x = gameObj.currentPosition[0];
      const y = gameObj.currentPosition[1] - 1;
      gameObj.calculatePosition(x, y);
      break;
    }
    case 38: {
      const x = gameObj.currentPosition[0] - 1;
      const y = gameObj.currentPosition[1];
      gameObj.calculatePosition(x, y);
      break;
    }
    case 39: {
      const x = gameObj.currentPosition[0];
      const y = gameObj.currentPosition[1] + 1;
      gameObj.calculatePosition(x, y);
      break;
    }
    case 40: {
      const x = gameObj.currentPosition[0] + 1;
      const y = gameObj.currentPosition[1];
      gameObj.calculatePosition(x, y);
      break;
    }
    case 13: {
      gameObj.gameReset();
      break;
    }
    default: {
      break;
    }
  }
};
gameObj.calculatePosition = function calculatePosition(x, y) {
  if (level[x][y] && level[x][y] !== 'obstacle' && level[x][y] !== 'explored') {
    level[gameObj.currentPosition[0]][gameObj.currentPosition[1]] = 'explored';
    const lastPositionId = gameObj.currentPosition[0].toString() + gameObj.currentPosition[1].toString();
    const lastPosition = document.getElementById(lastPositionId);
    lastPosition.className = 'col-1-9 explored';
    gameObj.currentPosition = [x, y];
    level[x][y] = 'active';
    const active = document.getElementById(x.toString() + y.toString());
    active.className = 'col-1-9 active';
  } else { return; }
};
gameObj.gameReset = function gameReset() {
  /*eslint-disable */
  level = [['unexplored', 'unexplored', 'obstacle', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored'],
  ['unexplored', 'unexplored', 'obstacle', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'obstacle', 'unexplored'],
  ['unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored'],
  ['unexplored', 'obstacle', 'unexplored', 'unexplored', 'obstacle', 'unexplored', 'unexplored', 'unexplored', 'obstacle'],
  ['unexplored', 'unexplored', 'unexplored', 'obstacle', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored'],
  ['unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'obstacle', 'unexplored'],
  ['unexplored', 'active', 'obstacle', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored', 'unexplored']];
  /*eslint-enable */
  gameObj.clearGameContainer();
  gameObj.generateLevel();
};
gameObj.clearGameContainer = function clearGameContainer() {
  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }
};

window.addEventListener('load', gameObj.generateLevel);
body.addEventListener('keyup', gameObj.gameControls);
