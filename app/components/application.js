var React = require('react');

var ActionCreators = require('../actions/action-creators');
var NavigationMenu = require('./navigation-menu');
var PredictionsList = require('./predictions-list');
var ZipInput = require('./zip-modal');

var Application = React.createClass({
  componentWillMount: function() {
    ActionCreators.requestTidePredictionsByGeolocation();
  },

  render: function() {
    return (
      <div className="app-wrapper">
        <h1>ebb ~ flow</h1>
        <PredictionsList/>
        <NavigationMenu/>
        <ZipInput/>
      </div>
    );
  }
});

module.exports = Application;
