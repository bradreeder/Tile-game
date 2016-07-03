const ajax = (function (createLevelModule) {  // eslint-disable-line
  return function XHRRequest(url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function onReadyStateChange() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = xhr.responseText.split('\n');
        const level = []; let row = [];
        response.forEach((item) => {
          item !== '/b' ? row.push(item) : (level.push(row), row = []); // eslint-disable-line
        });
        createLevel.generateLevel(level, url); // eslint-disable-line
      }
    };
    xhr.open('GET', url || '/level1.txt');
    xhr.send();
  };
}(createLevel)); // eslint-disable-line
