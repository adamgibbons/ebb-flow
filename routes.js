var JSX = require('node-jsx').install();
var React = require('react');
var TweetsApp = require('./components/TweetsApp');
var Tweet = require('./models/Tweet');

module.exports = {
  index: function(req, res) {
    var markup = React.renderToString(TweetsApp());

    res.render('home', {
      markup: markup
    });
  }
};