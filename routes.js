var JSX = require('node-jsx').install();
var React = require('react');
var TweetsApp = require('./components/TweetsApp');
var Tweet = require('./models/Tweet');

module.exports = {
  index: function(req, res) {
    Tweet.getTweets(0, 0, function (tweets, pages) {

      // var markup = React.renderComponentToString(TweetsApp({tweets: tweets}));

      var markup = React.renderToString(TweetsApp());

      res.render('home', {
        markup: markup
        // state: JSON.stringify(tweets)
      });

    });
  }
};