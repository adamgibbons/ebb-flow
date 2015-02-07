var express = require('express');
var http = require('http');
var mongoose = require('mongoose');

var routes = require('./routes');
var config = require('./config');

var app = express();
var port = process.env.port || 8000;

app.set('view engine', 'jade');

app.get('/', routes.index);
app.use('/', express.static(__dirname + '/public/'));

var server = http.createServer(app).listen(port, function() {
  console.log("Express server listening on port " + port);
});