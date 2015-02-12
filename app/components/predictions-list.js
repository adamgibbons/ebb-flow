var React = require('react');

var ActionCreators = require('../actions/action-creators');

var ApplicationStore = require('../stores/application-store');
var ListenToStore = require('../utils/listen-to-store');

var PeriodsList = React.createClass({

  stores: [ApplicationStore],

  mixins: [ListenToStore],

  getInitialState: function() {
    return {
      isLoaded: false,
      predictions: []
    };
  },

  getStateFromStore: function() {
    this.setState({
      isLoaded: ApplicationStore.isLoaded(),
      predictions: ApplicationStore.getPredictions()
    });
  },

  render: function() {
    var self = this;

    if (this.state.isLoaded) {
      var periods = this.state.predictions[0].periods.map(function (p, idx) {
        return (
          <Period type={p.type} level={p.heightFT} time={p.timestamp} isActive={idx === self.state.currentPrediction} />
        );
      });

      return <div className="prediction-list">{periods}</div>;

    } else {

      return <p>Loading...</p>;      
    }
  }

});

var Period = React.createClass({
  render: function() {
    var classes = React.addons.classSet({
      'prediction': true,
      'active': this.props.isActive
    });

    return (
      <div className={classes}>
        <p>{this.props.type} tide measuring {this.props.level} ft at {this.props.time}</p>
      </div>
    );
  }
});

module.exports = PeriodsList;
