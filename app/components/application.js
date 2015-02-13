var React = require('react');

var ActionCreators = require('../actions/action-creators');
var NavigationMenu = require('./navigation-menu');
var PredictionsList = require('./predictions-list');

var Application = React.createClass({
  componentWillMount: function() {
    ActionCreators.requestTidePredictions(95060);
  },

  render: function() {
    return (
      <div className="app-wrapper">
        <h1>ebb ~ flow</h1>
        <PredictionsList/>
        <NavigationMenu/>
      </div>
    );
  }
});

module.exports = Application;
