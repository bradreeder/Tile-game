const game = (function () { // eslint-disable-line
  const gameObj = {};
  gameObj.gameContainer = document.getElementById('game-container');
  gameObj.levelMap = [];
  gameObj.currentLevel = 0;
  gameObj.currentPosition = [];
  gameObj.tilesLeftToExplore = 0;
  return gameObj;
}());
