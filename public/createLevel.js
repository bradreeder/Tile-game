/* global game */
const createLevel = (function module(game) {
  game.generateLevelGrid = function generateLevelGrid(level, levelNo) {
    game.updateLevel(level, levelNo);
    level.forEach((row, rowIndex) => {
      row.forEach((item, itemIndex) => {
        const gridBox = game.createGridBox(row, rowIndex, item, itemIndex);
        if (item === 'active') {
          game.updateCurrentPosition(gridBox);
        }
        if (item === 'unexplored') {
          game.tilesLeftToExplore++;
        }
      });
    });
  };
  game.updateLevel = function updateLevel(level, levelNo) {
    game.levelGrid = level;
    game.currentLevel = levelNo;
  };
  game.updateCurrentPosition = function updateCurrentPosition(activeGridBox) {
    game.currentPosition = activeGridBox.id.length === 2
      ? [+(activeGridBox.id.charAt(0)), +(activeGridBox.id.charAt(1))]
      : [+(activeGridBox.id.charAt(0)), +(activeGridBox.id.charAt(1) + activeGridBox.id.charAt(2))];
  }; // if id char ever has 4 characters then refactor
  game.createGridBox = function createGridBox(row, rowIndex, item, itemIndex) {
    const gridBox = document.createElement('div');
    gridBox.className = `col-1-${row.length} ${item}`;
    gridBox.id = `${JSON.stringify(rowIndex) + JSON.stringify(itemIndex)}`;
    game.gameContainer.appendChild(gridBox);
    return gridBox;
  };
}(game));

window.createLevel = createLevel;
