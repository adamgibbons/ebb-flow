var React = require('react');
var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();

var NavigationMenu = React.createClass({
  getNextPrediction: function() {
    ee.emit('requested-next-prediction');
  },

  render: function() {
    return (
      <nav className="navigation-menu">
        <button className="btn">Previous</button>
        <button className="btn" onClick={this.getNextPrediction}>Next</button>
      </nav>
    );
  }
});

module.exports = NavigationMenu;