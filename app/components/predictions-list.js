var React = require('react/addons');

var ActionCreators = require('../actions/action-creators');

var ApplicationStore = require('../stores/application-store');
var ListenToStore = require('../utils/listen-to-store');

var Period = require('./period');

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

      return (
        <div className="periods">
          {periods}
        </div>
      );

    } else {

      return <p>Loading...</p>;      
    }
  }
});

module.exports = PeriodsList;
