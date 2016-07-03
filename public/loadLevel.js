const loadLevel = (function (game) {  // eslint-disable-line
  game.loadLevel = function requestLevelFromServer (levelNumber) { // eslint-disable-line
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function onReadyStateChange() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = xhr.responseText.split('\n');
        const levelGrid = []; let gridRow = [];
        response.forEach((item) => {
          item !== '/b' ? gridRow.push(item) : (levelGrid.push(gridRow), gridRow = []); // eslint-disable-line
        });
        game.generateLevelGrid(levelGrid, levelNumber); // eslint-disable-line
      }
    };
    xhr.open('GET', `/level${levelNumber.toString()}.txt`);
    xhr.send();
  };
}(game)); // eslint-disable-line
