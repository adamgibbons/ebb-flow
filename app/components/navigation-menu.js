var React = require('react/addons');
var ActionCreators = require('../actions/action-creators');
var ApplicationStore = require('../stores/application-store');
var ListenToStore = require('../utils/listen-to-store');

var NavigationMenu = React.createClass({

  stores: [ApplicationStore],

  mixins: [ListenToStore],

  getInitialState: function() {
    return {
      predictionIndex: 0,
      predictions: []
    };
  },

  getStateFromStore: function() {
    this.setState({
      predictionIndex: ApplicationStore.getPredictionIndex(),
      predictions: ApplicationStore.getPredictions()
    });
  },

  getPreviousPrediction: function() {
    ActionCreators.getPreviousPrediction();
  },

  getNextPrediction: function() {
    ActionCreators.getNextPrediction();
  },

  getPredictionsCount: function() {
    if (!this.state.predictions.length) {
      return 0;
    }

    return this.state.predictions[0].periods.length;
  },

  isLastPrediction: function() {
    var lastPredictionIndex = this.getPredictionsCount() - 1;

    return this.state.predictionIndex === lastPredictionIndex;
  },

  isFirstPrediction: function() {
    return this.state.predictionIndex === 0;
  },

  render: function() {

    var prevBtnClasses = React.addons.classSet({
      'btn': true,
      'disabled': this.isFirstPrediction()
    });

    var nextBtnClasses = React.addons.classSet({
      'btn': true,
      'disabled': this.isLastPrediction()
    });

    return (
      <nav className="navigation-menu">
        <button className={prevBtnClasses} onClick={this.getPreviousPrediction}>Previous</button>
        <button className={nextBtnClasses} onClick={this.getNextPrediction}>Next</button>
      </nav>
    );
  }
});

module.exports = NavigationMenu;
