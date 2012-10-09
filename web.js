var express = require('express');
var app = express();

// Redirect all www.kpuputti.fi to kpuputti.fi
app.all('*', function (request, response, next) {
    var host = request.headers.host;

    if (host === 'www.kpuputti.fi') {
        response.redirect(301, 'http://kpuputti.fi' + request.url);
    } else {
        next();
    }
});

app.get('/', function (request, response) {
    response.sendfile('public/index.html');
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('Listening on port: ' + port);
});
