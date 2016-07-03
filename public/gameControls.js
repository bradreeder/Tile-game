const gameControls = (function (game) { // eslint-disable-line
  game.gameControls = function gameControls(e) { // eslint-disable-line
    switch (e.keyCode) {
      case 37: { // press left arrow-key to move left
        const x = game.currentPosition[0]; // eslint-disable-line
        const y = game.currentPosition[1] - 1; // eslint-disable-line
        game.movePosition(x, y);
        break;
      }
      case 38: { // press up arrow-key to move up
        const x = game.currentPosition[0] - 1; // eslint-disable-line
        const y = game.currentPosition[1]; // eslint-disable-line
        game.movePosition(x, y);
        break;
      }
      case 39: { // press right arrow-key to move right
        const x = game.currentPosition[0]; // eslint-disable-line
        const y = game.currentPosition[1] + 1; // eslint-disable-line
        game.movePosition(x, y);
        break;
      }
      case 40: { // press down arrow-key to move down
        const x = game.currentPosition[0] + 1; // eslint-disable-line
        const y = game.currentPosition[1]; // eslint-disable-line
        game.movePosition(x, y);
        break;
      }
      case 13: { // press enter to reset the game
        game.tilesLeftToExplore = 0; // eslint-disable-line
        game.clearGameContainer();
        game.loadLevel(game.currentLevel); // eslint-disable-line
        break;
      }
      default: {
        break;
      }
    }
  };
  game.movePosition = function movePosition(x, y) { // eslint-disable-line
    if (typeof game.levelGrid[x] !== 'undefined' && typeof game.levelGrid[x][y] !== 'undefined') { // eslint-disable-line
      if (game.levelGrid[x][y] !== 'obstacle' && game.levelGrid[x][y] !== 'explored') { // eslint-disable-line
        game.recalcuateLastPosition();
        game.recalculateCurrentPosition(x, y);
        game.tilesLeftToExplore--; // eslint-disable-line
        if (game.tilesLeftToExplore === 0) { // eslint-disable-line
          game.levelFinished();
        } else { game.isDeadEnd(); } // eslint-disable-line
      }
    } else { return; }
  };
  game.recalcuateLastPosition = function recalculateLastPosition() { // eslint-disable-line
    game.levelGrid[game.currentPosition[0]][game.currentPosition[1]] = 'explored'; // eslint-disable-line
    const lastPositionId = game.currentPosition[0].toString() + game.currentPosition[1].toString();  // eslint-disable-line
    const lastPosition = document.getElementById(lastPositionId);
    lastPosition.className = `col-1-${game.levelGrid[0].length} explored`; // eslint-disable-line
  };
  game.recalculateCurrentPosition = function recalculateCurrentPosition(x, y) { // eslint-disable-line
    game.currentPosition = [x, y]; // eslint-disable-line
    game.levelGrid[x][y] = 'active'; // eslint-disable-line
    const active = document.getElementById(x.toString() + y.toString());
    active.className = `col-1-${game.levelGrid[0].length} active`; // eslint-disable-line
  };
  game.levelReset = function levelReset() { // eslint-disable-line
    game.tilesLeftToExplore = 0; // eslint-disable-line
    setTimeout(() => {
      game.clearGameContainer();
      game.loadLevel(game.currentLevel); // eslint-disable-line
    }, 500);
  };
  game.levelFinished = function levelFinished() { // eslint-disable-line
    setTimeout(() => {
      game.clearGameContainer();
      game.loadLevel(game.currentLevel + 1); // eslint-disable-line
    }, 500);
  };
  game.isDeadEnd = function isDeadEnd() { // eslint-disable-line
    const x = game.currentPosition[0]; const y = game.currentPosition[1]; // eslint-disable-line
    if ((typeof game.levelGrid[x][y + 1] === 'undefined' || game.levelGrid[x][y + 1] === 'obstacle' || game.levelGrid[x][y + 1] === 'explored') // eslint-disable-line
     && (typeof game.levelGrid[x][y - 1] === 'undefined' || game.levelGrid[x][y - 1] === 'obstacle' || game.levelGrid[x][y - 1] === 'explored') // eslint-disable-line
     && (typeof game.levelGrid[x + 1] === 'undefined' || game.levelGrid[x + 1][y] === 'obstacle' || game.levelGrid[x + 1][y] === 'explored') // eslint-disable-line
     && (typeof game.levelGrid[x - 1] === 'undefined' || game.levelGrid[x - 1][y] === 'obstacle' || game.levelGrid[x - 1][y] === 'explored')) { // eslint-disable-line
      game.levelReset();
    }
  };
  game.clearGameContainer = function clearGameContainer() { // eslint-disable-line
    while (game.gameContainer.firstChild) { // eslint-disable-line
      game.gameContainer.removeChild(game.gameContainer.firstChild); // eslint-disable-line
    }
  };

  document.body.addEventListener('keyup', game.gameControls);
  window.addEventListener('load', game.loadLevel(1));

}(game)); // eslint-disable-line
