var JSX = require('node-jsx').install();
var React = require('react');

var LowTideApp = require('./components/application');

module.exports = {
  index: function(req, res) {
    var markup = React.renderToString(LowTideApp());

    res.render('home', {
      markup: markup
    });
  }
};