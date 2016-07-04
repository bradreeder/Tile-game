const fs = require('fs');

function handleError(res) {
  res.writeHead(404);
  res.end('<h1>404 -- Page requested cannot be found</h1>');
}

function handleFile(res, ext, data) {
  res.writeHead(200, { 'Content-type': `text/${ext}` });
  res.end(data);
}

function handler(req, res) {
  const url = req.url;
  if (url === '/') {
    fs.readFile(`${__dirname}/../public/index.html`, (err, data) => {
      if (err) {
        handleError(res);
      } else {
        handleFile(res, 'html', data);
      }
    });
  } else if (url.includes('public')) {
    const ext = url.split('.')[1];
    fs.readFile(`${__dirname}/..${url}`, (err, data) => {
      if (err) {
        handleError(res);
      } else {
        handleFile(res, ext, data);
      }
    });
  } else if (url.includes('level')) {
    fs.readFile(`${__dirname}/../resources${url}`, 'utf8', (err, data) => {
      if (err) {
        handleError(res);
      } else {
        handleFile(res, 'plain', data);
      }
    });
  } else if (url === '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'image/x-icon' });
    console.log('Favicon requested');
    res.end();
  } else { handleError(res); }
}

module.exports = handler;
