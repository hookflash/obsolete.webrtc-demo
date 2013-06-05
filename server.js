
const HTTP = require('http');
const URL = require('url');
const PATH = require('path');
const SEND = require('send');

const PORT = 8080;

var server = HTTP.createServer(function (req, res) {
    SEND(req, URL.parse(req.url).pathname).root(__dirname).pipe(res);
});

server.listen(PORT);

console.log('Open browser to: http://localhost:' + PORT + '/');
