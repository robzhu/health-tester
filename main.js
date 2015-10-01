var express = require("express");
var app = express();

app.get('/good', function (req, res) {
  res.status(200).send('passed');
});

app.get('/bad', function (req, res) {
  res.status(400).send('failed');
});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});