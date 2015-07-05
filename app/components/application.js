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
        <header className="header">
          <div className="header-location">tide chart ⌖ santa cruz,monterey bay, CA</div>
          <div className="header-title">ebb ≊ flow</div>
        </header>
        <PredictionsList/>
        <NavigationMenu/>
        <ZipInput/>
      </div>
    );
  }
});

module.exports = Application;
