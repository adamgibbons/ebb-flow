var React = require('react/addons');
var UnixTimestamp = require('unix-timestamp');

var ActionCreators = require('../actions/action-creators');

var ApplicationStore = require('../stores/application-store');
var ListenToStore = require('../utils/listen-to-store');

var PeriodsList = React.createClass({

  stores: [ApplicationStore],

  mixins: [ListenToStore],

  getInitialState: function() {
    return {
      isLoaded: false,
      predictions: [],
      currentPredictionIdx: 0
    };
  },

  getStateFromStore: function() {
    this.setState({
      isLoaded: ApplicationStore.isLoaded(),
      predictions: ApplicationStore.getPredictions(),
      currentPrediction: ApplicationStore.getPredictionIndex()
    });
  },

  isActiveItem: function(idx) {
    return idx === this.state.currentPrediction;
  },

  render: function() {
    var self = this;

    if (this.state.isLoaded) {
      var periods = this.state.predictions[0].periods.map(function (p, idx) {

        return (
          <Period type={p.type} level={p.heightFT} timestamp={p.timestamp} isActive={self.isActiveItem(idx)} />
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
        <p>
          {this.props.type} tide measuring {this.props.level} ft at <Timestamp seconds={this.props.timestamp}/>
        </p>
      </div>
    );
  }
});

var Timestamp = React.createClass({
  formatTimestamp: function(timestamp) {
    return UnixTimestamp.toDate(timestamp).toString();
  },

  render: function() {
    return <span>{this.formatTimestamp(this.props.seconds)}</span>;
  }
});

module.exports = PeriodsList;
