const fs = require('fs');

function handler(req, res) {
  const url = req.url;
  if (url === '/') {
    fs.readFile(`${__dirname}/../public/index.html`, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('<h1>404 -- Page requested cannot be found');
      }
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end(data);
    });
  } else if (url.includes('public')) {
    const ext = url.split('.')[1];
    fs.readFile(`${__dirname}/..${url}`, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('<h1>404 -- Page requested cannot be found</h1>');
      }
      res.writeHead(200, { 'Content-type': `text/${ext}` });
      res.end(data);
    });
  } else if (url.includes('level')) {
    fs.readFile(`${__dirname}/../resources${url}`, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('<h1>404 -- Page requested cannot be found</h1>');
      }
      res.writeHead(200, { 'Content-type': 'text/plain' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('<h1>404 -- Page requested cannot be found</h1>');
  }
}

module.exports = handler;
