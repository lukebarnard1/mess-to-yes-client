var fs = require('fs');
var path = require('path');
var express = require('express');
// var bodyParser = require('body-parser');
var http = require('http');
var app = express();

var port = process.argv[2];
var config_path = process.argv[3];

// Statically serve files in public directory
app.use('/static/', express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res){
  var options = {
    root: path.join(__dirname, 'public'),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  res.sendFile('index.html', options);
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

http.createServer(app).listen(port, function() {
  console.log('Express started: http://localhost:' + port + '/');
});