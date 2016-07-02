const http = require('http');
const handler = require('./handler.js');
const port = process.env.PORT || 4000;

http.createServer(handler).listen(port);

console.log(`Server is running on localhost:${port}`);
