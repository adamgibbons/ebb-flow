var React = require('react');

var ListenToStore = require('../utils/listen-to-store');
var TidePredictionsActionCreators = require('../actions/tide-prediction-action-creators');
var TidePredictionsStore = require('../stores/tide-predictions-store');

var LowTideList = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Low Tides</h1>
        <h2>Santa Cruz, California</h2>

        <p>{this.props.prediction.dateString} at {this.props.prediction.time}</p>
        <p>Level: {this.props.prediction.level}ft</p>
      </div>
    );
  }
});

module.exports = LowTideList;