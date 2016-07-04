/* global game */
const loadLevel = (function module(game) {
  game.loadLevel = function requestLevelFromServer(levelNumber) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function onReadyStateChange() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = xhr.responseText.split('\n');
        const levelGrid = []; let gridRow = [];
        response.forEach((item) => {
          if (item !== '/b') {
            gridRow.push(item);
          } else {
            levelGrid.push(gridRow);
            gridRow = [];
          }
        });
        game.generateLevelGrid(levelGrid, levelNumber);
      }
    };
    xhr.open('GET', `/level${levelNumber.toString()}.txt`);
    xhr.send();
  };
}(game));

window.loadLevel = loadLevel;
