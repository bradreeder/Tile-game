const gameContainer = document.getElementById('game-container');
let levelMap = []; let currentLevel = 0; let currentPosition = []; let tilesLeftToExplore = 0; // eslint-disable-line

const createLevel = (function() {  // eslint-disable-line
  function generateLevel (level, levelNo) { // eslint-disable-line
    levelMap = level; currentLevel = levelNo;
    level.forEach((row, rowIndex) => {
      row.forEach((item, itemIndex) => {
        const gridBox = document.createElement('div');
        gridBox.className = `col-1-${row.length} ${item}`;
        gridBox.id = `${JSON.stringify(rowIndex) + JSON.stringify(itemIndex)}`;
        gameContainer.appendChild(gridBox);
        if (item === 'active') { // if id char ever has 4 characters then refactor
          currentPosition = gridBox.id.length === 2
            ? [+(gridBox.id.charAt(0)), +(gridBox.id.charAt(1))]
            : [+(gridBox.id.charAt(0)), +(gridBox.id.charAt(1) + gridBox.id.charAt(2))];
        }
        if (item === 'unexplored') {
          tilesLeftToExplore++;
        }
      });
    });
  }
  return {
    generateLevel: generateLevel, // eslint-disable-line
  };
}());
