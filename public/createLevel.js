const gameContainer = document.getElementById('game-container');
let levelMap = []; let currentLevel = ''; let currentPosition = []; // eslint-disable-line

const createLevel = (function() {  // eslint-disable-line
  function generateLevel (level, levelNo) { // eslint-disable-line
    levelMap = level; currentLevel = levelNo;
    level.forEach((row, rowIndex) => {
      row.forEach((item, itemIndex) => {
        const gridBox = document.createElement('div');
        gridBox.className = `col-1-9 ${item}`;
        gridBox.id = `${JSON.stringify(rowIndex) + JSON.stringify(itemIndex)}`;
        gameContainer.appendChild(gridBox);
        if (item === 'active') {
          currentPosition = [+(gridBox.id.charAt(0)), +(gridBox.id.charAt(1))];
        }
      });
    });
  }
  return {
    generateLevel: generateLevel, // eslint-disable-line
  };
}());
