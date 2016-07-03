const createLevel = (function (game) {  // eslint-disable-line
  game.generateLevelGrid = function generateLevelGrid (level, levelNo) { // eslint-disable-line
    game.levelGrid = level; game.currentLevel = levelNo; // eslint-disable-line
    level.forEach((row, rowIndex) => {
      row.forEach((item, itemIndex) => {
        const gridBox = document.createElement('div');
        gridBox.className = `col-1-${row.length} ${item}`;
        gridBox.id = `${JSON.stringify(rowIndex) + JSON.stringify(itemIndex)}`;
        game.gameContainer.appendChild(gridBox); // eslint-disable-line
        if (item === 'active') { // if id char ever has 4 characters then refactor
          game.currentPosition = gridBox.id.length === 2 // eslint-disable-line
            ? [+(gridBox.id.charAt(0)), +(gridBox.id.charAt(1))]
            : [+(gridBox.id.charAt(0)), +(gridBox.id.charAt(1) + gridBox.id.charAt(2))];
        }
        if (item === 'unexplored') {
          game.tilesLeftToExplore++; // eslint-disable-line
        }
      });
    });
  };
}(game)); // eslint-disable-line
