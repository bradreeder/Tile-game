const createLevel = (function (game) {  // eslint-disable-line
  game.generateLevelGrid = function generateLevelGrid (level, levelNo) { // eslint-disable-line
    game.updateLevel(level, levelNo); // eslint-disable-line
    level.forEach((row, rowIndex) => {
      row.forEach((item, itemIndex) => {
        const gridBox = game.createGridBox(row, rowIndex, item, itemIndex);
        if (item === 'active') { // if id char ever has 4 characters then refactor
          game.updateCurrentPosition(gridBox);
        }
        if (item === 'unexplored') {
          game.tilesLeftToExplore++; // eslint-disable-line
        }
      });
    });
  };
  game.updateLevel = function updateLevel(level, levelNo) { // eslint-disable-line
    game.levelGrid = level; // eslint-disable-line
    game.currentLevel = levelNo; // eslint-disable-line
  };
  game.updateCurrentPosition = function updateCurrentPosition(activeGridBox) { // eslint-disable-line
    game.currentPosition = activeGridBox.id.length === 2 // eslint-disable-line
      ? [+(activeGridBox.id.charAt(0)), +(activeGridBox.id.charAt(1))]
      : [+(activeGridBox.id.charAt(0)), +(activeGridBox.id.charAt(1) + activeGridBox.id.charAt(2))];
  };
  game.createGridBox = function createGridBox(row, rowIndex, item, itemIndex) { // eslint-disable-line
    const gridBox = document.createElement('div');
    gridBox.className = `col-1-${row.length} ${item}`;
    gridBox.id = `${JSON.stringify(rowIndex) + JSON.stringify(itemIndex)}`;
    game.gameContainer.appendChild(gridBox); // eslint-disable-line
    return gridBox;
  };
}(game)); // eslint-disable-line
