var React = require('react');

var ActionCreators = require('../actions/action-creators');

var PredictionsList = React.createClass({
  render: function() {
    var self = this;

    var predictions = this.props.predictions.map(function (p, idx) {
      return <Prediction level={p.level} time={p.time} isActive={idx === self.props.currentPrediction} />;
    });

    return <div className="prediction-list">{predictions}</div>;
  }
});

var Prediction = React.createClass({
  render: function() {
    var classes = React.addons.classSet({
      'prediction': true,
      'active': this.props.isActive
    });

    return (
      <div className={classes}>
        <p>{this.props.level} ft at {this.props.time}</p>
      </div>
    );
  }
});

module.exports = PredictionsList;