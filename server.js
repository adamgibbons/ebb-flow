var express = require('express');
var exphbs = require('express-handlebars');
var http = require('http');
var mongoose = require('mongoose');
var Twitter = require('ntwitter');

var routes = require('./routes');
var config = require('./config');
// var streamHandler = require('./utils/stream-handler');

var app = express();
var port = process.env.port || 8000;
var twitter = new Twitter(config.twitter);

mongoose.connect('mongodb://localhost/lowtide');

// app.disable('etag');

app.set('view engine', 'jade');

// routing
app.get('/', routes.index);

app.use('/', express.static(__dirname + '/public/'));

var server = http.createServer(app).listen(port, function() {
  console.log("Express server listening on port " + port);
});