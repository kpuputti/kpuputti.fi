var express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.send('hello, world: ' + Date.now());
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('Listening on port: ' + port);
});
