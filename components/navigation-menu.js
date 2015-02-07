var React = require('react');
var ActionCreators = require('../actions/action-creators');

var NavigationMenu = React.createClass({
  getPreviousPrediction: function() {
    ActionCreators.getPreviousPrediction();
  },

  getNextPrediction: function() {
    ActionCreators.getNextPrediction();
  },

  render: function() {
    return (
      <nav className="navigation-menu">
        <button className="btn" onClick={this.getPreviousPrediction}>Previous</button>
        <button className="btn" onClick={this.getNextPrediction}>Next</button>
      </nav>
    );
  }
});

module.exports = NavigationMenu;